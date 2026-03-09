import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onNavigate, isMobile, closeMenu }) {

  const handleClick = (section) => {
    if (isMobile) {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    } else {
      onNavigate(section);
      closeMenu();
    }
  };

  return (
    <ul className="nav-ul flex flex-col sm:flex-row gap-6">
      <li className="nav-li">
        <button
          className="nav-link text-white hover:text-amber-100"
          onClick={() => handleClick("About")}
        >
          About
        </button>
      </li>

      <li className="nav-li">
        <button
          className="nav-link text-white hover:text-amber-100"
          onClick={() => handleClick("Projects")}
        >
          Projects
        </button>
      </li>

      <li className="nav-li">
        <button
          className="nav-link text-white hover:text-amber-100"
          onClick={() => handleClick("Skills")}
        >
          Skills
        </button>
      </li>

      <li className="nav-li">
        <button
          className="nav-link text-white hover:text-amber-100"
          onClick={() => handleClick("Contact")}
        >
          Contact
        </button>
      </li>
    </ul>
  );
}

const Navbar = ({ onNavigate, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-30 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">

          <a
            href="/"
            className="text-3xl font-bold transition-colors text-white hover:text-amber-100"
          >
            Ananya
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "/close.svg" : "/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden sm:flex">
            <Navigation
              onNavigate={onNavigate}
              isMobile={isMobile}
              closeMenu={() => setIsOpen(false)}
            />
          </nav>

        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="pb-5">
            <Navigation
              onNavigate={onNavigate}
              isMobile={true}
              closeMenu={() => setIsOpen(false)}
            />
          </nav>
        </motion.div>
      )}

    </div>
  );
};

export default Navbar;