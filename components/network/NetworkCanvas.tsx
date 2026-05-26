"use client";

import { Canvas } from "@react-three/fiber";
import NetworkScene from "./NetworkScene";
import { DESKTOP, MOBILE } from "./config";

export default function NetworkCanvas({ mobile }: { mobile: boolean }) {
  const cfg = mobile ? MOBILE : DESKTOP;
  return (
    <Canvas
      dpr={cfg.dpr}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6], fov: 40 }}
      style={{ width: "100%", height: "100%" }}
    >
      <NetworkScene cfg={cfg} />
    </Canvas>
  );
}
