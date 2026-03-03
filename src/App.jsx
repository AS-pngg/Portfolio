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
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [showHint, setShowHint] = useState(
    localStorage.getItem("cameraHintHidden") !== "true"
  );

  const defaultCameraPosition = [0, 0, 15];

  // 🌍 Planet Data (Now With Moons)
  const planets = [
    {
      name: "About",
      size: 1.25,
      texture: "/1.jpg",
      orbitRadius: 6,
      orbitSpeed: 0.3,
      orbitTilt: -5,
      moons: [],
    },
    {
      name: "Projects",
      size: 1.7,
      texture: "/2.jpg",
      orbitRadius: 12,
      orbitSpeed: 0.27,
      orbitTilt: 0.2,
      moons: [
        { size: 0.3, distance: 2.2, speed: -1.2, textureUrl: "/moon2.jpg", tilt: 0  },
        { size: 0.25, distance: 3.2, speed: 1.5, textureUrl: "/moon3.jpg", tilt: -0.5  },
        { size: 0.4, distance: 4, speed: 0.5, textureUrl: "/moon4.jpg", tilt: 0.3  },
      ],
    },
    {
      name: "Skills",
      size: 1.6,
      texture: "/3.jpg",
      orbitRadius: 17,
      orbitSpeed: 0.3,
      orbitTilt: 10,
      moons: [],
    },
    {
      name: "Contact",
      size: 2,
      texture: "/4.jpg",
      orbitRadius: 20,
      orbitSpeed: 0.2,
      orbitTilt: 10,
      moons: [],
    },
  ];

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">

      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar
          onNavigate={(sectionName) => {
            setSelectedPlanet(sectionName);
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

        <Space />

        {/* 🌍 Render Planets */}
        {planets.map((planet) => {
          if (activeSection && activeSection !== planet.name) return null;

          return (
            <Planet
              key={planet.name}
              size={planet.size}
              textureUrl={planet.texture}
              orbitRadius={planet.orbitRadius}
              orbitSpeed={planet.orbitSpeed}
              orbitTilt={planet.orbitTilt}
              title={planet.name}
              moons={planet.moons} // ✅ PASS MOONS
              selectedPlanet={selectedPlanet}
              onSelect={() => {
                setSelectedPlanet(planet.name);
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
          onStart={() => {
            if (showHint) {
              localStorage.setItem("cameraHintHidden", "true");
              setShowHint(false);
            }
          }}
        />
      </Canvas>

      {/* HERO */}
      <div
        className={`absolute inset-0 z-10 pointer-events-none
        transition-opacity duration-700
        ${selectedPlanet ? "opacity-0" : "opacity-100"}`}
      >
        <Hero />
      </div>

      {/* Interaction Hint */}
      {showHint && !selectedPlanet && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center">
          <div className="flex flex-col items-center">
            <div className="relative w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-scrollWheel" />
            </div>

            <p className="text-white/70 text-sm tracking-widest mt-4">
              Click a planet to explore
            </p>

            <p className="text-white/40 text-xs tracking-wider mt-2">
              Drag to rotate • Scroll to zoom
            </p>
          </div>
        </div>
      )}

      {/* SECTIONS */}
      {activeSection === "About" && (
        <AboutSection onClose={() => {
          setSelectedPlanet(null);
          setActiveSection(null);
        }} />
      )}

      {activeSection === "Projects" && (
        <ProjectsSection onClose={() => {
          setSelectedPlanet(null);
          setActiveSection(null);
        }} />
      )}

      {activeSection === "Skills" && (
        <SkillSection onClose={() => {
          setSelectedPlanet(null);
          setActiveSection(null);
        }} />
      )}

      {activeSection === "Contact" && (
        <ContactSection onClose={() => {
          setSelectedPlanet(null);
          setActiveSection(null);
        }} />
      )}

    </div>
  );
}