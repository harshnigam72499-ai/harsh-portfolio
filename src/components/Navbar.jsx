import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <motion.div
        className={`px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl bg-black/60 border-b border-white/10 shadow-[0_0_30px_rgba(0,245,255,0.05)]"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-lg font-black tracking-widest"
          style={{ fontFamily: "'Orbitron', monospace" }}
        >
          HARSH<span style={{ color: 'var(--cyan)', textShadow: 'var(--glow-cyan)' }}>.dev</span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative text-xs uppercase tracking-widest transition-colors duration-300 group"
              >
                <span className={isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"}>
                  {link.label}
                </span>
                {/* Active indicator */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
                {/* Hover glow dot */}
                {isActive && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                    style={{ boxShadow: '0 0 8px var(--cyan)' }}
                  />
                )}
              </a>
            );
          })}

          {/* Resume button */}
          <a
            ref={btnRef}
            href="/resume.pdf"
            download
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { if (btnRef.current) btnRef.current.style.transform = ""; }}
            className="glow-btn ml-2 px-5 py-2 text-xs uppercase tracking-widest rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold transition-transform duration-200"
            data-magnetic
          >
            Resume
          </a>

          <a
            href="/admin"
            className="text-xs uppercase tracking-widest text-gray-600 hover:text-gray-400 transition"
          >
            Admin
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block w-6 h-0.5 bg-white rounded"
              animate={{
                rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                y: menuOpen && i === 0 ? 8 : menuOpen && i === 2 ? -8 : 0,
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className={`text-sm uppercase tracking-widest transition py-1 border-b border-white/5 ${
                    active === link.id ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a href="/resume.pdf" download onClick={() => setMenuOpen(false)}
                className="text-center py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold text-sm tracking-widest uppercase mt-2"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
