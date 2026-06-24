"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Points, PointMaterial, Torus } from "@react-three/drei";
import * as THREE from "three";

/* Reactive particle starfield */
function Starfield({ count = 1400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.012;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3fe0ff"
        size={0.022}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

/* Glowing distorted core that follows the pointer */
function Core(props: ThreeElements["group"]) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.6, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.4, 0.05);
  });

  return (
    <group ref={group} {...props}>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.1}>
        <Icosahedron args={[1.55, 6]}>
          <MeshDistortMaterial
            color="#0bb8e6"
            emissive="#0a5cff"
            emissiveIntensity={0.35}
            roughness={0.15}
            metalness={0.85}
            distort={0.38}
            speed={1.6}
          />
        </Icosahedron>

        {/* wireframe shell */}
        <Icosahedron args={[1.95, 1]}>
          <meshBasicMaterial color="#2ee6ff" wireframe transparent opacity={0.12} />
        </Icosahedron>
      </Float>

      {/* orbiting rings */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <Torus args={[2.7, 0.012, 16, 120]} rotation={[Math.PI / 2.4, 0, 0]}>
          <meshStandardMaterial color="#3fe0ff" emissive="#1a6bff" emissiveIntensity={0.9} roughness={0.3} />
        </Torus>
        <Torus args={[3.15, 0.008, 16, 120]} rotation={[Math.PI / 1.7, Math.PI / 5, 0]}>
          <meshStandardMaterial color="#7df0ff" emissive="#0a5cff" emissiveIntensity={0.7} roughness={0.3} />
        </Torus>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.4], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />
        <pointLight position={[6, 6, 6]} intensity={120} color="#3fe0ff" />
        <pointLight position={[-6, -4, 2]} intensity={70} color="#1a6bff" />
        <Core position={[0, 0, 0]} />
        <Starfield />
      </Suspense>
    </Canvas>
  );
}
