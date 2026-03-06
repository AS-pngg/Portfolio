// src/sections/SkillsSection.jsx

export default function SkillsSection({ onClose, isMobile }) {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind", "ThreeJS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB"],
    },
    {
      title: "Programming",
      skills: ["Python", "C/C++", "Data Structures & Algorithms"],
    },
    {
      title: "Tools & Cloud",
      skills: ["Git", "GitHub", "VS Code", "Linux"],
    },
  ];

  return (
    <div
      className={`
      z-20 pointer-events-auto
      ${
        isMobile
          ? "relative w-full flex justify-center px-6 py-24"
          : "absolute inset-0 flex items-center justify-start px-10 py-20"
      }
      `}
    >

      {/* Glass Panel */}
      <div
        className={`
        relative
        ${isMobile ? "w-full max-w-md" : "flex-1 max-w-2xl"}
        `}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 space-y-6 md:space-y-8 text-white relative border border-white/20">

          {/* Close Button (desktop only) */}
          {!isMobile && onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-400 transition"
            >
              ✕
            </button>
          )}

          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>

          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold text-blue-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-white/10 border border-white/20 rounded-full text-xs md:text-sm hover:bg-blue-500/30 hover:scale-110 transition transform skillFloat"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Empty right space (desktop only) */}
      {!isMobile && <div className="flex-1"></div>}

    </div>
  );
}