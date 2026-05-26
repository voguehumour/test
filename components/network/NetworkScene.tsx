"use client";

import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { net } from "@/lib/networkStore";
import { curl2 } from "@/lib/noise";
import type { NetConfig } from "./config";
import nodeVert from "./shaders/node.vert.glsl";
import nodeFrag from "./shaders/node.frag.glsl";
import connVert from "./shaders/connection.vert.glsl";
import connFrag from "./shaders/connection.frag.glsl";

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function readVar(name: string, fallback: THREE.Vector3): THREE.Vector3 {
  if (typeof window === "undefined") return fallback;
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  const parts = raw.split(",").map((n) => parseFloat(n));
  if (parts.length === 3 && parts.every((n) => !Number.isNaN(n))) {
    return fallback.set(parts[0], parts[1], parts[2]);
  }
  return fallback;
}

export default function NetworkScene({ cfg }: { cfg: NetConfig }) {
  const { viewport, size } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.InstancedMesh>(null);
  const connRef = useRef<THREE.Mesh>(null);

  const N = cfg.nodeCount;
  const S = cfg.ribbonSegments;

  // --- one-time layout: base node positions + a sparse connection graph ---
  const { base, edges } = useMemo(() => {
    const rnd = mulberry32(20260526);
    const base: THREE.Vector3[] = [];
    for (let i = 0; i < N; i++) {
      base.push(
        new THREE.Vector3(
          (rnd() * 2 - 1) * cfg.spread,
          (rnd() * 2 - 1) * cfg.spread * 0.85,
          (rnd() * 2 - 1) * 0.4,
        ),
      );
    }
    // connect each node to its two nearest neighbors (dedup undirected)
    const set = new Set<string>();
    const edges: [number, number][] = [];
    for (let i = 0; i < N; i++) {
      const d = base
        .map((p, j) => ({ j, dist: p.distanceTo(base[i]) }))
        .filter((o) => o.j !== i)
        .sort((a, b) => a.dist - b.dist);
      for (let k = 0; k < 2; k++) {
        const j = d[k].j;
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (!set.has(key)) {
          set.add(key);
          edges.push(i < j ? [i, j] : [j, i]);
        }
      }
    }
    return { base, edges };
  }, [N, cfg.spread]);

  const E = edges.length;

  // --- node geometry (instanced) + static per-instance attributes ---
  const nodeGeo = useMemo(() => {
    const g = new THREE.IcosahedronGeometry(0.05, 2);
    g.setAttribute(
      "aScale",
      new THREE.InstancedBufferAttribute(new Float32Array(N).fill(1), 1),
    );
    g.setAttribute(
      "aActive",
      new THREE.InstancedBufferAttribute(new Float32Array(N), 1),
    );
    return g;
  }, [N]);

  // --- connection ribbon geometry: (S+1)*2 verts per edge ---
  const connGeo = useMemo(() => {
    const vpe = (S + 1) * 2;
    const total = E * vpe;
    const g = new THREE.BufferGeometry();
    const pos = new Float32Array(total * 3);
    const along = new Float32Array(total);
    const side = new Float32Array(total);
    const connId = new Float32Array(total);
    const glow = new Float32Array(total);
    const index: number[] = [];
    for (let e = 0; e < E; e++) {
      const o = e * vpe;
      for (let s = 0; s <= S; s++) {
        const a = s / S;
        for (let w = 0; w < 2; w++) {
          const vi = o + s * 2 + w;
          along[vi] = a;
          side[vi] = w === 0 ? -1 : 1;
          connId[vi] = e;
        }
        if (s < S) {
          const v0 = o + s * 2;
          index.push(v0, v0 + 1, v0 + 2, v0 + 1, v0 + 3, v0 + 2);
        }
      }
    }
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("aAlong", new THREE.BufferAttribute(along, 1));
    g.setAttribute("aSide", new THREE.BufferAttribute(side, 1));
    g.setAttribute("aConnId", new THREE.BufferAttribute(connId, 1));
    g.setAttribute("aGlow", new THREE.BufferAttribute(glow, 1));
    g.setIndex(index);
    return g;
  }, [E, S]);

  const nodeMat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: nodeVert,
        fragmentShader: nodeFrag,
        transparent: true,
        uniforms: {
          uNode: { value: new THREE.Vector3(0.886, 0.882, 0.866) },
          uAccent: { value: new THREE.Vector3(0.851, 0.416, 0.267) },
          uTemp: { value: 0.45 },
          uBaseAlpha: { value: 1 },
        },
      }),
    [],
  );

  const connMat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: connVert,
        fragmentShader: connFrag,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uNode: { value: new THREE.Vector3(0.886, 0.882, 0.866) },
          uAccent: { value: new THREE.Vector3(0.851, 0.416, 0.267) },
          uTime: { value: 0 },
          uPulseConn: { value: -1 },
          uPulseT: { value: 0 },
          uPulseActive: { value: 0 },
          uTemp: { value: 0.45 },
          uBaseAlpha: { value: 1 },
        },
      }),
    [],
  );

  // --- per-frame mutable sim state ---
  const sim = useRef({
    cur: base.map((p) => p.clone()),
    activation: new Float32Array(N),
    pulse: { active: false, t: 0, conn: -1, dst: 0, wait: 3 },
    temp: 0.45,
    colorTick: 0,
    tmpNode: new THREE.Vector3(0.886, 0.882, 0.866),
    tmpAccent: new THREE.Vector3(0.851, 0.416, 0.267),
    mat: new THREE.Matrix4(),
  });

  useFrame((_, rawDelta) => {
    const dt = Math.min(rawDelta, 1 / 30);
    const t = performance.now() / 1000;
    const s = sim.current;
    const group = groupRef.current;
    if (!group || !nodesRef.current) return;

    // refresh theme colors occasionally (cheap, handles theme toggle)
    if (s.colorTick++ % 20 === 0) {
      readVar("--net-node", s.tmpNode);
      readVar("--net-accent", s.tmpAccent);
      (nodeMat.uniforms.uNode.value as THREE.Vector3).copy(s.tmpNode);
      (nodeMat.uniforms.uAccent.value as THREE.Vector3).copy(s.tmpAccent);
      (connMat.uniforms.uNode.value as THREE.Vector3).copy(s.tmpNode);
      (connMat.uniforms.uAccent.value as THREE.Vector3).copy(s.tmpAccent);
    }

    // smoothed temperature toward the active section's mood
    s.temp += (net.mood.temp - s.temp) * Math.min(dt * 1.5, 1);
    nodeMat.uniforms.uTemp.value = s.temp;
    connMat.uniforms.uTemp.value = s.temp;
    connMat.uniforms.uTime.value = t;

    // --- group transform: hero placement → top-right corner module ---
    const compress = net.reduced ? 0 : net.compress;
    const heroX = viewport.width * 0.16;
    const inset = Math.min(viewport.width, viewport.height) * 0.12 + 0.4;
    const cornerX = viewport.width / 2 - inset;
    const cornerY = viewport.height / 2 - inset;
    const tx = THREE.MathUtils.lerp(heroX, cornerX, compress);
    const ty = THREE.MathUtils.lerp(0, cornerY, compress);
    const ts = THREE.MathUtils.lerp(1, 0.16, compress);
    group.position.x += (tx - group.position.x) * Math.min(dt * 4, 1);
    group.position.y += (ty - group.position.y) * Math.min(dt * 4, 1);
    const ns = group.scale.x + (ts - group.scale.x) * Math.min(dt * 4, 1);
    group.scale.setScalar(ns);
    connMat.uniforms.uBaseAlpha.value = THREE.MathUtils.lerp(1, 0.92, compress);
    nodeMat.uniforms.uBaseAlpha.value = 1;

    // cursor → world, then into group-local space for magnetism
    const radiusWorld = (viewport.height * 180) / size.height;
    const curWorldX = net.px * (viewport.width / 2);
    const curWorldY = net.py * (viewport.height / 2);

    // --- drift + magnetism ---
    const reduced = net.reduced;
    for (let i = 0; i < N; i++) {
      const b = base[i];
      const p = s.cur[i];
      if (reduced) {
        // static composition; nothing moves
        p.copy(b);
      } else {
        const [cx, cy] = curl2(b.x * 0.5 + i, b.y * 0.5, t * 0.04);
        const driftX = b.x + cx * 0.32;
        const driftY = b.y + cy * 0.32;
        const driftZ = b.z + Math.sin(t * 0.3 + i) * 0.1;
        p.x += (driftX - p.x) * Math.min(dt * 1.2, 1);
        p.y += (driftY - p.y) * Math.min(dt * 1.2, 1);
        p.z += (driftZ - p.z) * Math.min(dt * 1.2, 1);

        // magnetic lean toward the cursor (soft falloff)
        if (net.pointerActive && ns > 0.001) {
          const worldX = group.position.x + p.x * ns;
          const worldY = group.position.y + p.y * ns;
          const dx = curWorldX - worldX;
          const dy = curWorldY - worldY;
          const dist = Math.hypot(dx, dy);
          if (dist < radiusWorld) {
            const fall = 1 - dist / radiusWorld;
            const pull = fall * fall * 0.35;
            p.x += (dx / ns) * pull * Math.min(dt * 4, 1);
            p.y += (dy / ns) * pull * Math.min(dt * 4, 1);
          }
        }
      }
    }

    // --- pulse scheduler ---
    const pulse = s.pulse;
    if (!reduced && E > 0) {
      if (!pulse.active) {
        pulse.wait -= dt;
        if (pulse.wait <= 0) {
          pulse.active = true;
          pulse.t = 0;
          pulse.conn = Math.floor(Math.random() * E);
          pulse.dst = edges[pulse.conn][1];
        }
      } else {
        pulse.t += dt / 0.9;
        if (pulse.t >= 1) {
          pulse.active = false;
          s.activation[pulse.dst] = 1;
          s.activation[edges[pulse.conn][0]] = Math.max(
            s.activation[edges[pulse.conn][0]],
            0.4,
          );
          const { pulseMin, pulseMax } = net.mood;
          pulse.wait = pulseMin + Math.random() * (pulseMax - pulseMin);
        }
      }
    }
    connMat.uniforms.uPulseActive.value = pulse.active ? 1 : 0;
    connMat.uniforms.uPulseConn.value = pulse.conn;
    connMat.uniforms.uPulseT.value = pulse.t;

    // --- write node instances ---
    const breathe = reduced ? 1 + Math.sin(t * 0.8) * 0.12 : 1;
    const aScale = nodeGeo.getAttribute("aScale") as THREE.InstancedBufferAttribute;
    const aActive = nodeGeo.getAttribute("aActive") as THREE.InstancedBufferAttribute;
    for (let i = 0; i < N; i++) {
      const p = s.cur[i];
      s.mat.makeTranslation(p.x, p.y, p.z);
      nodesRef.current.setMatrixAt(i, s.mat);
      let scl = 1;
      if (reduced) scl = i === 0 ? breathe : 1;
      else {
        // grow with cursor proximity
        const worldX = group.position.x + p.x * ns;
        const worldY = group.position.y + p.y * ns;
        const dist = Math.hypot(curWorldX - worldX, curWorldY - worldY);
        if (net.pointerActive && dist < radiusWorld) {
          scl = 1 + (1 - dist / radiusWorld) * 0.6;
        }
        s.activation[i] = Math.max(0, s.activation[i] - dt * 1.4);
      }
      (aScale.array as Float32Array)[i] = scl;
      (aActive.array as Float32Array)[i] = s.activation[i];
    }
    nodesRef.current.instanceMatrix.needsUpdate = true;
    aScale.needsUpdate = true;
    aActive.needsUpdate = true;

    // --- rebuild connection ribbons from bent beziers ---
    const pos = connGeo.getAttribute("position") as THREE.BufferAttribute;
    const glow = connGeo.getAttribute("aGlow") as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    const garr = glow.array as Float32Array;
    const vpe = (S + 1) * 2;
    const A = new THREE.Vector3();
    const B = new THREE.Vector3();
    const C = new THREE.Vector3();
    const P = new THREE.Vector3();
    const prev = new THREE.Vector3();
    for (let e = 0; e < E; e++) {
      A.copy(s.cur[edges[e][0]]);
      B.copy(s.cur[edges[e][1]]);
      // control point: midpoint pushed perpendicular for an organic bend
      C.addVectors(A, B).multiplyScalar(0.5);
      const dirx = B.x - A.x;
      const diry = B.y - A.y;
      const len = Math.hypot(dirx, diry) || 1;
      const bend =
        (reduced ? 0.12 : 0.18 + 0.1 * Math.sin(t * 0.5 + e)) * len;
      C.x += (-diry / len) * bend;
      C.y += (dirx / len) * bend;
      for (let si = 0; si <= S; si++) {
        const a = si / S;
        const mt = 1 - a;
        P.set(
          mt * mt * A.x + 2 * mt * a * C.x + a * a * B.x,
          mt * mt * A.y + 2 * mt * a * C.y + a * a * B.y,
          mt * mt * A.z + 2 * mt * a * C.z + a * a * B.z,
        );
        // tangent (approx via previous point) → perpendicular for width
        let nx = 0,
          ny = 1;
        if (si > 0) {
          const tx2 = P.x - prev.x;
          const ty2 = P.y - prev.y;
          const tl = Math.hypot(tx2, ty2) || 1;
          nx = -ty2 / tl;
          ny = tx2 / tl;
        }
        prev.copy(P);
        // cursor glow for this point
        let g = 0;
        if (net.pointerActive && ns > 0.001) {
          const wx = group.position.x + P.x * ns;
          const wy = group.position.y + P.y * ns;
          const d = Math.hypot(curWorldX - wx, curWorldY - wy);
          if (d < radiusWorld) g = (1 - d / radiusWorld) ** 2;
        }
        for (let w = 0; w < 2; w++) {
          const vi = e * vpe + si * 2 + w;
          const sgn = w === 0 ? -1 : 1;
          arr[vi * 3] = P.x + nx * cfg.ribbonWidth * sgn;
          arr[vi * 3 + 1] = P.y + ny * cfg.ribbonWidth * sgn;
          arr[vi * 3 + 2] = P.z;
          garr[vi] = g;
        }
      }
    }
    pos.needsUpdate = true;
    glow.needsUpdate = true;
  });

  return (
    <group ref={groupRef} position={[viewport.width * 0.16, 0, 0]}>
      <instancedMesh
        ref={nodesRef}
        args={[nodeGeo, nodeMat, N]}
        frustumCulled={false}
      />
      <mesh ref={connRef} geometry={connGeo} material={connMat} frustumCulled={false} />
    </group>
  );
}
