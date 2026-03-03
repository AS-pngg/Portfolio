// src/sections/SkillsSection.jsx
export default function SkillsSection({ onClose }) {
  const skills = [
    "JavaScript",
    "React",
    "Three.js / React Three Fiber",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "HTML & CSS",
    "Git & GitHub",
    "Responsive Design",
  ];

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-start px-10 py-20 pointer-events-auto">

      {/* Left side: Frosted glass box */}
      <div className="flex-1 max-w-lg relative">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 space-y-6 text-white relative">

          {/* Cross mark to close */}
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-400"
            >
              ✕
            </button>
          )}

          <h2 className="text-4xl font-bold">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-white/20 px-3 py-1 rounded-md text-sm md:text-base text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right side empty for free space / 3D planet */}
      <div className="flex-1"></div>
    </div>
  );
}