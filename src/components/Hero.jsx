import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaDocker,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinux,
  FaReact,
  FaYoutube,
} from "react-icons/fa";

const socials = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TAGxyzBLADE",
    icon: FaYoutube,
    className: "hover:border-red-400/70 hover:text-red-300",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/harsh_nigam._/",
    icon: FaInstagram,
    className: "hover:border-pink-400/70 hover:text-pink-300",
  },
  {
    label: "Gmail",
    href: "mailto:harshnigam72499@gmail.com",
    icon: FaEnvelope,
    className: "hover:border-cyan-400/70 hover:text-cyan-300",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse transform-gpu"></div>

      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        HARSH NIGAM
      </motion.h1>

      <div className="text-xl md:text-3xl text-cyan-300 mt-6 font-bold">
        <Typewriter
          words={[
            "React Developer",
            "Linux Enthusiast",
            "DevOps Learner",
            "Cyberpunk Coder",
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {socials.map(({ label, href, icon: Icon, className }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className={`inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-gray-200 backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:bg-white/10 ${className}`}
            aria-label={label}
          >
            <Icon className="text-lg" />
            {label}
          </a>
        ))}
      </div>

      <div className="flex gap-8 text-5xl mt-10">
        <FaReact className="text-cyan-400 animate-spin transform-gpu" />
        <FaLinux className="hover:scale-125 transition will-change-transform" />
        <FaDocker className="text-blue-400 hover:scale-125 transition will-change-transform" />
        <FaGithub className="hover:scale-125 transition will-change-transform" />
      </div>
    </section>
  );
}
