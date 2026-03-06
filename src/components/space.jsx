import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Space() {
  const meshRef = useRef();

  const texture = useTexture("/milkyway.jpg");

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0002; // slow galaxy rotation
    }
  });

  return (
    <mesh ref={meshRef} scale={50}>
      <sphereGeometry args={[1, 8, 8]} />

      <meshBasicMaterial
        map={texture}
        side={THREE.BackSide}
        toneMapped={false}
      />
    </mesh>
  );
}