import { motion } from "framer-motion";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-28"
    >
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center lg:text-left"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-cyan-300">
            Full Stack Developer
          </p>

          <h1 className="text-[clamp(3.8rem,10vw,8.5rem)] font-semibold leading-[0.92] tracking-tight">
            Harsh
            <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-400 bg-clip-text text-transparent">
              {" "}Nigam
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-300 md:text-lg lg:mx-0 lg:max-w-xl">
            Creating premium responsive interfaces with React, backend integrations and modern DevOps workflows.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <button
              onClick={scrollToProjects}
              className="flex h-14 min-w-[180px] items-center justify-center rounded-2xl bg-white px-8 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]"
            >
              View Projects
            </button>

            <button
              onClick={scrollToContact}
              className="flex h-14 min-w-[180px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 text-sm font-medium transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto flex aspect-square w-full max-w-[460px] items-center justify-center"
        >
          <div className="absolute h-[120%] w-[120%] animate-pulse rounded-full bg-cyan-400/10 blur-3xl" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-cyan-400/20"
          >
            <div className="absolute -top-2 left-1/2 h-16 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-300 to-transparent blur-[1px]" />
            <div className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 rounded-full bg-cyan-300/30 blur-xl" />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-purple-400/20"
          >
            <div className="absolute bottom-0 left-1/2 h-10 w-[2px] -translate-x-1/2 bg-gradient-to-t from-purple-400 to-transparent blur-[1px]" />
          </motion.div>

          <div className="relative flex h-[72%] w-[72%] items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/10 to-purple-500/10" />

            <div className="relative text-center">
              <p className="text-xs uppercase tracking-[0.45em] text-cyan-300 sm:text-sm">
                React • Node • Linux
              </p>
              <p className="mt-5 text-5xl font-semibold sm:text-6xl">2026</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
