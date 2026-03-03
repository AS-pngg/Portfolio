import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

import Space from "./components/space";
import Hero from "./components/HeroText";
import Navbar from "./components/Navbar";
import Planet from "./components/Planet";

import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectSection";
import SkillSection from "./sections/SkillSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null); // camera target
  const [activeSection, setActiveSection] = useState(null);   // UI overlay

  const defaultCameraPosition = [0, 0, 15];

  // Planet data
  const planets = [
    { name: "About", pos: [-5, 20, 0], size: 1.5, texture: "/1.jpg", orbitRadius: 6, orbitSpeed: 0.3, orbitTilt: -5 },
    { name: "Projects", pos: [0, -20, 5], size: 1.25, texture: "/2.jpg", orbitRadius: 12, orbitSpeed: 0.27, orbitTilt: 0.2 },
    { name: "Skills", pos: [5, 5, 10], size: 1.6, texture: "/3.jpg", orbitRadius: 17, orbitSpeed: 0.3, orbitTilt: 10 },
    { name: "Contact", pos: [-5, 0, 20], size: 2, texture: "/4.jpg", orbitRadius: 20, orbitSpeed: 0.2, orbitTilt: 10 },
  ];

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">

      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar
          onNavigate={(sectionName, planetPos) => {
          setSelectedPlanet(planetPos);
          setActiveSection(sectionName);
          }}
        />
    </div>

      {/* 3D CANVAS */}
      <Canvas
        className="absolute inset-0 z-0"
        camera={{
          position: defaultCameraPosition,
          fov: 60,
          near: 0.1,
          far: 1000,
        }}
        shadows
        gl={{ alpha: true }}
        onPointerMissed={() => {
          setSelectedPlanet(null);
          setActiveSection(null);
        }}
      >

        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <pointLight position={[-5, -5, -5]} intensity={1} />

        {/* Space background */}
        <Space />

        {/* Render planets */}
        {planets.map((planet) => {
          // Only show the selected planet if a section is active
          if (activeSection && activeSection !== planet.name) return null;

          return (
            <Planet
              key={planet.name}
              position={planet.pos}
              size={planet.size}
              textureUrl={planet.texture}
              orbitRadius={planet.orbitRadius}
              orbitSpeed={planet.orbitSpeed}
              orbitTilt={planet.orbitTilt}
              title={planet.name}
              selectedPlanet={selectedPlanet}
              onSelect={() => {
                setSelectedPlanet(planet.pos);
                setActiveSection(planet.name);
              }}
            />
          );
        })}

        <OrbitControls
          makeDefault
          enableZoom={!selectedPlanet}
          enablePan={!selectedPlanet}
          enableRotate={!selectedPlanet}
        />
      </Canvas>

      {/* HERO OVERLAY */}
      <div
        className={`absolute inset-0 z-10 pointer-events-none
        transition-opacity duration-700
        ${selectedPlanet ? "opacity-0" : "opacity-100"}`}
      >
        <Hero />
      </div>

      {/* SECTION OVERLAYS */}
      {activeSection === "About" && (
        <AboutSection
          onClose={() => {
            setSelectedPlanet(null);
            setActiveSection(null);
          }}
        />
      )}
      {activeSection === "Projects" && (
        <ProjectsSection
          onClose={() => {
            setSelectedPlanet(null);
            setActiveSection(null);
          }}
        />
      )}
      {activeSection === "Skills" && (
        <SkillSection
          onClose={() => {
            setSelectedPlanet(null);
            setActiveSection(null);
          }}
        />
      )}
      {activeSection === "Contact" && (
        <ContactSection
          onClose={() => {
            setSelectedPlanet(null);
            setActiveSection(null);
          }}
        />
      )}
    </div>
  );
}