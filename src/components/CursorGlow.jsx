import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (frameRef.current) return;

      frameRef.current = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${e.clientX - 150}px, ${
            e.clientY - 150
          }px, 0)`;
        }
        frameRef.current = null;
      });
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-75"
      style={{
        transform: "translate3d(-150px, -150px, 0)",
      }}
    >
      <div className="w-[300px] h-[300px] rounded-full bg-cyan-400/20 blur-3xl" />
    </div>
  );
}
