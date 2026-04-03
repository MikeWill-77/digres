export default function ThumbDotVest() {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="g1" cx="30%" cy="50%">
          <stop offset="0%" stopColor="#C0182A" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#C0182A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g1)" />
      {Array.from({ length: 8 }, (_, row) =>
        Array.from({ length: 18 }, (_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 38 + 10}
            cy={row * 22 + 10}
            r={col % 4 === 0 && row % 2 === 0 ? 3 : 1.2}
            fill="#C0182A"
            opacity={col % 4 === 0 && row % 2 === 0 ? 0.55 : 0.12}
          />
        ))
      )}
    </svg>
  );
}
