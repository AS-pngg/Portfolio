import { Canvas } from "@react-three/fiber";
import { OrbitControls, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { useState, useEffect, useMemo } from "react";

import Space from "./components/space";
import Hero from "./components/HeroText";
import Navbar from "./components/Navbar";
import Planet from "./components/Planet";

import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectSection";
import SkillSection from "./sections/SkillSection";
import ContactSection from "./sections/ContactSection";

/* 🔹 Mobile Detection */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

/* 🔹 Slow Network Detection */
function useSlowNetwork() {
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    if (navigator.connection) {
      const type = navigator.connection.effectiveType;
      if (type === "2g" || type === "slow-2g") {
        setIsSlow(true);
      }
    }
  }, []);

  return isSlow;
}

export default function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const isMobile = useIsMobile();
  const isSlowNetwork = useSlowNetwork();

  /* Decide if 3D should load */
  const use3D = !isMobile && !isSlowNetwork;

  const defaultCameraPosition = [0, 0, 15];

  /* 🌍 Planet Data */
  const planets = useMemo(
    () => [
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
          { size: 0.3, distance: 2.2, speed: -1.2, textureUrl: "/moon2.jpg" },
          { size: 0.25, distance: 3.2, speed: 1.5, textureUrl: "/moon3.jpg" },
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
    ],
    []
  );

  return (
    <div className="relative w-screen min-h-screen bg-black overflow-hidden">

      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* ================= MOBILE / SLOW INTERNET ================= */}
      {!use3D && (
        <div className="relative w-full min-h-screen overflow-y-auto">

          {/* Background */}
          <div
            className="fixed inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('/milkyway.jpg')" }}
          />

          {/* Scroll Sections */}
          <div className="relative z-10 flex flex-col gap-28 px-6 pt-32 pb-20">

            <Hero />

            <AboutSection />

            <ProjectsSection />

            <SkillSection />

            <ContactSection />

          </div>

        </div>
      )}

      {/* ================= DESKTOP 3D ================= */}
      {use3D && (
        <Canvas
          className="absolute inset-0 z-0"
          camera={{
            position: defaultCameraPosition,
            fov: 60,
            near: 0.1,
            far: 1000,
          }}
          dpr={[1, 1.3]}
          performance={{ min: 0.5 }}
          gl={{
            antialias: false,
            powerPreference: "low-power",
          }}
          onPointerMissed={() => {
            setSelectedPlanet(null);
            setActiveSection(null);
          }}
        >

          <AdaptiveDpr pixelated />
          <AdaptiveEvents />

          <ambientLight intensity={0.35} />
          <directionalLight position={[5, 5, 5]} intensity={1.3} />

          <Space />

          {/* PLANETS */}
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
                moons={planet.moons}
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
          />
        </Canvas>
      )}

      {/* DESKTOP SECTIONS */}
      {use3D && activeSection === "About" && (
        <AboutSection onClose={() => {
          setSelectedPlanet(null);
          setActiveSection(null);
        }} />
      )}

      {use3D && activeSection === "Projects" && (
        <ProjectsSection onClose={() => {
          setSelectedPlanet(null);
          setActiveSection(null);
        }} />
      )}

      {use3D && activeSection === "Skills" && (
        <SkillSection onClose={() => {
          setSelectedPlanet(null);
          setActiveSection(null);
        }} />
      )}

      {use3D && activeSection === "Contact" && (
        <ContactSection onClose={() => {
          setSelectedPlanet(null);
          setActiveSection(null);
        }} />
      )}

    </div>
  );
}