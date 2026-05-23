export default function Cube() {
  const faces = ["front", "back", "right", "left", "top", "bottom"];

  return (
    <div className="rubik-scene">
      <div className="rubik-cube">
        {faces.map((face) => (
          <div key={face} className={`rubik-face ${face}`}>
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="rubik-tile"></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
