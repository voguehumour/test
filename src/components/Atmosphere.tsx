"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertex = /* glsl */ `
  uniform float uTime;
  attribute float aSize;
  attribute float aOffset;
  varying float vAlpha;
  void main() {
    vec3 pos = position;
    pos.y += sin(uTime * 0.05 + aOffset) * 0.6;
    pos.x += cos(uTime * 0.03 + aOffset * 1.3) * 0.4;
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * (300.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
    vAlpha = 0.6 + 0.4 * sin(uTime * 0.1 + aOffset * 2.0);
  }
`;

const fragment = /* glsl */ `
  varying float vAlpha;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    float a = smoothstep(0.5, 0.0, d) * vAlpha;
    gl_FragColor = vec4(0.62, 0.55, 0.42, a * 0.18);
  }
`;

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 380;

  const { positions, sizes, offsets } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const offsets = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
      sizes[i] = 1.5 + Math.random() * 5;
      offsets[i] = Math.random() * 100;
    }
    return { positions, sizes, offsets };
  }, []);

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame((_, dt) => {
    uniforms.uTime.value += dt;
    if (ref.current) ref.current.rotation.y += dt * 0.005;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aOffset" args={[offsets, 1]} />
      </bufferGeometry>
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.NormalBlending}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
      />
    </points>
  );
}

export function Atmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
      style={{ mixBlendMode: "multiply" }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
