const particles = Array.from({ length: 25 }, (_, index) => {
  const seed = index + 1;

  return {
    top: (seed * 37) % 100,
    left: (seed * 61) % 100,
    duration: 2 + ((seed * 13) % 40) / 10,
    delay: ((seed * 17) % 30) / 10,
  };
});

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_30%)]" />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-3xl rounded-full animate-pulse transform-gpu" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse transform-gpu" />

      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-ping transform-gpu"
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
