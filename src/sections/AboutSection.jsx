// src/sections/AboutSection.jsx
export default function AboutSection({ onClose }) {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-start px-10 py-20 pointer-events-auto">
      
      {/* Left side: Frosted glass box */}
      <div className="flex-1 max-w relative">
        {/* Frosted box */}
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

          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-lg md:text-xl text-white/90">
            Hi, I’m Ananya, a B.Tech CS student with a passion for building web and software applications. I enjoy exploring full-stack development, data structures, and AI/ML projects. I love turning ideas into functional code and continuously learning new technologies. Currently, I’m focused on improving my skills in React, Python, and cloud computing.
          </p>

          {/* Resume Download Button */}
          <a
            href="/Ananya_Singh_Resume.pdf"
            download
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right side empty for free space */}
      <div className="flex-1"></div>
    </div>
  );
}