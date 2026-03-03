// src/sections/ProjectsSection.jsx
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection({ onClose }) {
  // Example project data
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern 3D portfolio built with React Three Fiber, showcasing interactive 3D elements and responsive design.",
      github: "https://github.com/AnanyaSingh/portfolio",
    },
    {
      title: "E-commerce App",
      description:
        "Full-stack e-commerce platform with cart, checkout, and payment integration using MERN stack.",
      github: "https://github.com/AnanyaSingh/ecommerce-app",
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with rooms, notifications, and authentication, using Node.js and Socket.IO.",
      github: "https://github.com/AnanyaSingh/chat-app",
    },
  ];

  return (
    <div className="absolute inset-0 z-20 flex items-start justify-start px-10 py-20 pointer-events-auto">
      {/* Left side: project boxes */}
      <div className="flex-1 flex flex-col gap-8 relative">
        {/* Cross mark to close */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-white text-3xl font-bold hover:text-red-400"
          >
            ✕
          </button>
        )}

        <h2 className="text-4xl font-bold text-white mb-6">Projects</h2>

        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 text-2xl"
              >
                <FaGithub />
              </a>
            </div>
            <p className="text-white/80">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Right side empty for 3D canvas */}
      <div className="flex-1"></div>
    </div>
  );
}