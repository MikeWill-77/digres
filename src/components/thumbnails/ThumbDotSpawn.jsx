export default function ThumbDotSpawn() {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="g4" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#C0182A" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#C0182A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g4)" />
      {[18, 38, 58, 78, 100].map((r, i) => (
        <circle
          key={i}
          cx="50%"
          cy="50%"
          r={r}
          fill="none"
          stroke="#C0182A"
          strokeWidth="0.9"
          opacity={0.5 - i * 0.08}
          strokeDasharray={i % 2 === 0 ? "4 6" : "2 8"}
        />
      ))}
      <circle cx="50%" cy="50%" r="5" fill="#C0182A" opacity="0.7" />
    </svg>
  );
}
