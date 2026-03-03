import { useRef, useMemo } from "react";
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
  moons = [],
}) {
  const meshRef = useRef();
  const groupRef = useRef();
  const moonPivots = useRef([]);
  const angleRef = useRef(Math.random() * Math.PI * 2);

  const planetTexture = useTexture(textureUrl);

  const moonTextureUrls = useMemo(
    () => moons.map((moon) => moon.textureUrl),
    [moons]
  );

  const loadedMoonTextures = useTexture(
    moonTextureUrls.length ? moonTextureUrls : []
  );

  useFrame((_, delta) => {
    if (!groupRef.current || !meshRef.current) return;

    // 🌍 Planet Orbit
    if (!selectedPlanet) {
      angleRef.current += orbitSpeed * delta;

      const x = orbitRadius * Math.cos(angleRef.current);
      const z = orbitRadius * Math.sin(angleRef.current);
      const y = orbitTilt * Math.sin(angleRef.current);

      groupRef.current.position.set(x, y, z);
    } else if (selectedPlanet === title) {
      groupRef.current.position.lerp(new THREE.Vector3(5, 0, 0), 0.05);
    }

    // Planet spin
    meshRef.current.rotation.y += 0.5 * delta;

    // 🌕 Moon Orbit (Tilted)
    moonPivots.current.forEach((pivot, index) => {
      if (!pivot) return;
      pivot.rotation.y += (moons[index]?.speed || 1) * delta;
    });
  });

  return (
    <group ref={groupRef}>
      {/* PLANET */}
      <mesh
        ref={meshRef}
        onClick={() => onSelect(title)}
      >
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial map={planetTexture} />
      </mesh>

      {/* MOONS */}
      {moons.map((moon, index) => (
        <group
          key={index}
          ref={(el) => (moonPivots.current[index] = el)}
          rotation={[moon.tilt || 0, 0, 0]} 
        >
          <mesh position={[moon.distance, 0, 0]}>
            <sphereGeometry args={[moon.size, 32, 32]} />
            <meshStandardMaterial
              map={
                Array.isArray(loadedMoonTextures)
                  ? loadedMoonTextures[index]
                  : loadedMoonTextures
              }
            />
          </mesh>
        </group>
      ))}

      {/* TITLE */}
      {!selectedPlanet && (
        <Billboard>
          <Text
            position={[0, size + 0.6, 0]}
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