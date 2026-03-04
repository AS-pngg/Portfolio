import React from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { max } from "three/tsl";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Space() {
  const meshRef = useRef();
  // Load texture from public folder
  const texture = useTexture("/milkyway.jpg");

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0005; // slow horizontal rotation
    }
  });

  return (
    <mesh ref={meshRef} scale={45}>
      {/* Sphere geometry */}
      <sphereGeometry args={[1, 8, 8]} />

      {/* Material rendered from inside */}
      <meshBasicMaterial
        map={texture}
        side={THREE.BackSide}
      />
    </mesh>
  );
}