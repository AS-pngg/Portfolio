export default function SkillsSection({ onClose }) {
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
    <div className="absolute inset-0 z-20 flex items-center md:items-center justify-center md:justify-start px-4 md:px-10 py-16 md:py-20 pointer-events-auto overflow-y-auto">

      {/* Glass Panel */}
      <div className="w-full md:flex-1 max-w-lg md:max-w-2xl relative">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 space-y-6 md:space-y-8 text-white relative">

          {/* Close Button */}
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-white text-2xl md:text-3xl font-bold hover:text-red-400 transition"
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

      {/* Empty right space on desktop */}
      <div className="hidden md:block flex-1"></div>

    </div>
  );
}