import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onNavigate }) {
  return (
    <ul className="nav-ul flex gap-6">
      <li className="nav-li">
        <button
          className="nav-link text-white hover:text-amber-100"
          onClick={() => window.location.href = "/" }
        >
          Home
        </button>
      </li>
      <li className="nav-li">
        <button
          className="nav-link text-white hover:text-amber-100"
          onClick={() => onNavigate("About", [-5, 20, 0])}
        >
          About
        </button>
      </li>
      <li className="nav-li">
        <button
          className="nav-link text-white hover:text-amber-100"
          onClick={() => onNavigate("Projects", [5, 10, 5])}
        >
          Projects
        </button>
      </li>
      <li className="nav-li">
        <button
          className="nav-link text-white hover:text-amber-100"
          onClick={() => onNavigate("Skills", [10, 0, 10])}
        >
          Skills
        </button>
      </li>
      <li className="nav-li">
        <button
          className="nav-link text-white hover:text-amber-100"
          onClick={() => onNavigate("Contact", [-5, 0, 20])}
        >
          Contact
        </button>
      </li>
    </ul>
  );
}

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-3xl font-bold transition-colors text-white hover:text-amber-100"
          >
            Ananya
          </a>

          {/* Hamburger for mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden sm:flex">
            <Navigation onNavigate={onNavigate} />
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.3 }}
        >
          <nav className="pb-5">
            <Navigation onNavigate={onNavigate} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;