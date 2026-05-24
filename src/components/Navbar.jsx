import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-black/40 px-5 py-4 shadow-2xl shadow-cyan-500/5 backdrop-blur-2xl">
        <button
          onClick={() => scrollToSection("home")}
          className="text-lg font-semibold tracking-wide"
        >
          Harsh<span className="text-cyan-300">.dev</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative text-sm transition duration-300 ${
                active === link.id
                  ? "text-cyan-300"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}

              {active === link.id && (
                <span className="absolute -bottom-2 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-cyan-300" />
              )}
            </button>
          ))}

          <a
            href="/resume.pdf"
            download
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            Resume
          </a>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 flex max-w-7xl flex-col gap-3 rounded-3xl border border-white/10 bg-[#0a1020]/95 p-5 shadow-2xl backdrop-blur-2xl md:hidden">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="rounded-2xl border border-white/5 bg-white/[0.03] py-3 text-center text-sm text-gray-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
            >
              {link.label}
            </button>
          ))}

          <a
            href="/resume.pdf"
            download
            className="rounded-2xl border border-white/10 bg-white/5 py-3 text-center text-sm font-medium"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
