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
    <div className="absolute inset-0 z-20 flex items-center justify-start px-10 py-20 pointer-events-auto">

      {/* Left Frosted Glass Panel */}
      <div className="flex-1 max-w-2xl relative">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 space-y-8 text-white relative">

          {/* Close Button */}
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-400 transition"
            >
              ✕
            </button>
          )}

          <h2 className="text-4xl font-bold">Skills</h2>

          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-3">
              <h3 className="text-xl font-semibold text-blue-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm hover:bg-blue-500/30 hover:scale-105 transition transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Right Empty Space */}
      <div className="flex-1"></div>

    </div>
  );
}