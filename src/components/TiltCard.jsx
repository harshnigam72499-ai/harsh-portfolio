import { useRef } from "react";

export default function TiltCard({ children, glowColor = "rgba(0,245,255,0.2)" }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2, cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -12;
    const ry = ((x - cx) / cx) * 12;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`;
    // spotlight
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, ${glowColor}, transparent 70%)`;
      glowRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    if (glowRef.current) glowRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-200 ease-out will-change-transform relative"
    >
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-2xl pointer-events-none z-10 transition-opacity duration-300 opacity-0"
      />
      {children}
    </div>
  );
}
