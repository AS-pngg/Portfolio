// src/sections/ContactSection.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function ContactSection({ onClose }) {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-auto px-6">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col md:flex-row gap-8 text-white">
        
        {/* Left Side - Contact Info */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="text-lg text-white/90">
            Feel free to connect with me or send a message below.
          </p>

          <div className="flex gap-6 text-3xl">
            <a href="https://github.com/YourUsername" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/YourUsername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/YourUsername" target="_blank" rel="noopener noreferrer">
              <SiLeetcode />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex-1">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent!");
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-aqua rounded-full text-black font-semibold hover:bg-mint transition-colors"
            >
              Send
            </button>
          </form>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-1 right-2 text-white text-2xl font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
}