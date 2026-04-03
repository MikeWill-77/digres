export default function ThumbNextbridge() {
  const hexes = [
    { x: 80, y: 50 },
    { x: 180, y: 30 },
    { x: 260, y: 72 },
    { x: 140, y: 108 },
    { x: 320, y: 48 },
    { x: 60, y: 118 },
    { x: 220, y: 130 },
    { x: 350, y: 115 },
  ];

  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="g2" cx="70%" cy="40%">
          <stop offset="0%" stopColor="#C0182A" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#C0182A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g2)" />
      {hexes.map((h, i) => {
        const pts = [0, 1, 2, 3, 4, 5]
          .map((k) => {
            const a = (Math.PI / 180) * (60 * k - 30);
            return `${h.x + 20 * Math.cos(a)},${h.y + 20 * Math.sin(a)}`;
          })
          .join(" ");
        return (
          <polygon
            key={i}
            points={pts}
            fill="none"
            stroke="#C0182A"
            strokeWidth="1"
            opacity={i % 2 === 0 ? 0.38 : 0.14}
          />
        );
      })}
    </svg>
  );
}
