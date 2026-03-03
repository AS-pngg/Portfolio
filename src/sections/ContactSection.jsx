import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function ContactSection({ onClose }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_q1xfipw",
        "template_dlcs9as",
        formRef.current,
        "EyPCc7ZBgZ9dVoCw3"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-start px-10 py-20 pointer-events-auto">

      {/* Left Frosted Glass Box */}
      <div className="flex-1 max-w-xl relative">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 space-y-6 text-white relative">

          {/* Close Button */}
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-400"
            >
              ✕
            </button>
          )}

          <h2 className="text-4xl font-bold">Contact Me</h2>

          {success ? (
            <p className="text-green-400 text-lg">
              Message sent successfully 🚀
            </p>
          ) : (
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="p-3 rounded bg-white/20 outline-none"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="p-3 rounded bg-white/20 outline-none"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="4"
                className="p-3 rounded bg-white/20 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          {/* Social Links */}
          <div className="flex gap-6 pt-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/ananya-singh-943739326/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/AS-pngg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://leetcode.com/u/Ananya_Singh123/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <SiLeetcode />
            </a>
          </div>

        </div>
      </div>

      {/* Right Side Empty Space */}
      <div className="flex-1"></div>

    </div>
  );
}