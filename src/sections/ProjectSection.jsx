// src/sections/ProjectsSection.jsx
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection({ onClose, isMobile }) {

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern 3D portfolio built with React Three Fiber, showcasing interactive 3D elements and responsive design.",
      github: "https://github.com/AS-pngg/Portfolio",
      tech: ["React", "Three.js", "Tailwind"],
    },
    {
      title: "Mini Shell (C)",
      description:
        "A basic Unix-like shell implemented in C that executes user commands using system-level programming concepts.",
      github: "https://github.com/AS-pngg/mini-shell",
      tech: ["C", "Linux", "System Programming"],
    },
    {
      title: "Green Path",
      description:
        "A frontend web application developed as part of Smart India Hackathon (SIH).",
      github: "https://github.com/AS-pngg/The-Green-Path",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <div
      className={`
      z-20 pointer-events-auto
      ${
        isMobile
          ? "relative w-full flex justify-center px-6 py-24"
          : "absolute inset-0 flex items-start justify-start px-10 py-20"
      }
      `}
    >

      {/* Project container */}
      <div
        className={`
        relative flex flex-col gap-6 md:gap-8
        ${isMobile ? "w-full max-w-md" : "flex-1 max-w-xl"}
        `}
      >

        {/* Close button (desktop only) */}
        {!isMobile && onClose && (
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-white text-3xl font-bold hover:text-red-400"
          >
            ✕
          </button>
        )}

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
          Projects
        </h2>

        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 flex flex-col gap-4
            transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]
            hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >

            {/* Title + Github */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 text-xl md:text-2xl transition"
              >
                <FaGithub />
              </a>
            </div>

            {/* Description */}
            <p className="text-white/80 text-sm md:text-base">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs md:text-sm px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Desktop empty space */}
      {!isMobile && <div className="flex-1"></div>}

    </div>
  );
}