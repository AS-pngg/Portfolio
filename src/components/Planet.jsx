import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, Text, Billboard } from "@react-three/drei";
import * as THREE from "three";

export default function Planet({
  orbitRadius,
  orbitSpeed,
  orbitTilt,
  size,
  textureUrl,
  title,
  onSelect,
  selectedPlanet,
  moons = [], // NEW: array of moons [{ size, distance, speed, textureUrl }]
}) {
  const meshRef = useRef();
  const groupRef = useRef();
  const angleRef = useRef(Math.random() * Math.PI * 2);

  const texture = useTexture(textureUrl);

  useFrame((state, delta) => {
  if (!groupRef.current || !meshRef.current) return;

  // Orbit motion only if no planet selected
  if (!selectedPlanet) {
    angleRef.current += orbitSpeed * delta;
    const x = orbitRadius * Math.cos(angleRef.current);
    const z = orbitRadius * Math.sin(angleRef.current);
    const y = orbitTilt * Math.sin(angleRef.current);
    groupRef.current.position.set(x, y, z);
  } else if (selectedPlanet === title) {
    // Slide planet to right when selected
    groupRef.current.position.lerp(new THREE.Vector3(5, 0, 0), 0.05);
  }

  // Rotate planet
  meshRef.current.rotation.y += 0.5 * delta;
});

  return (
    <group ref={groupRef}>
      <mesh
        ref={meshRef}
        onClick={() => {
            onSelect({
                position: meshRef.current.position.toArray(),
                name: title,
            });
        }}
>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/* ✅ Hide title when selected */}
      {!selectedPlanet && (
        <Billboard>
          <Text
            position={[0, size + 0.5, 0]}
            fontSize={0.7}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {title}
          </Text>
        </Billboard>
      )}
    </group>
  );
}