// src/sections/AboutSection.jsx

export default function AboutSection({ onClose, isMobile }) {
  return (
    <div
      className={`
      z-20 pointer-events-auto
      ${isMobile
        ? "relative w-full flex justify-center px-6 py-20"
        : "absolute inset-0 flex items-center justify-start px-12 py-24"}
      `}
    >
      {/* Glass Card */}
      <div
        className={`
        bg-white/10 backdrop-blur-md text-white rounded-xl
        ${isMobile ? "w-full max-w-md p-6" : "max-w-xl p-10"}
        space-y-6 border border-white/20
        `}
      >
        {/* Close button (desktop only) */}
        {!isMobile && onClose && (
          <button
            onClick={onClose}
            className="absolute top-6 right-8 text-white text-2xl hover:text-red-400"
          >
            ✕
          </button>
        )}

        <h2 className="text-3xl md:text-4xl font-bold">
          About Me
        </h2>

        <p className="text-base md:text-lg text-white/90 leading-relaxed">
          Hi, I’m Ananya, a B.Tech Computer Science student passionate about
          building web and software applications. I enjoy exploring full-stack
          development, data structures, and AI/ML projects.
        </p>

        <p className="text-base md:text-lg text-white/80 leading-relaxed">
          I love turning ideas into functional code and continuously learning
          new technologies. Currently, I’m focused on improving my skills in
          React, Python, and cloud computing.
        </p>

        <a
          href="/Ananya_Singh_Resume.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-lg"
        >
          Download Resume
        </a>
      </div>

      {/* Empty right side on desktop */}
      {!isMobile && <div className="flex-1"></div>}
    </div>
  );
}