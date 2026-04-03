export default function ThumbAtomic() {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <radialGradient id="g3" cx="50%" cy="60%">
          <stop offset="0%" stopColor="#C0182A" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#C0182A" stopOpacity="0" />
        </radialGradient>
        <pattern
          id="diag3"
          patternUnits="userSpaceOnUse"
          width="24"
          height="24"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="24" stroke="#C0182A" strokeWidth="0.6" opacity="0.35" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diag3)" />
      <rect width="100%" height="100%" fill="url(#g3)" />
      {[
        { x: "30%", y: "40%" },
        { x: "65%", y: "60%" },
        { x: "50%", y: "30%" },
      ].map((c, i) => (
        <circle
          key={i}
          cx={c.x}
          cy={c.y}
          r={8 + i * 4}
          fill="none"
          stroke="#C0182A"
          strokeWidth="0.8"
          opacity={0.3 - i * 0.07}
        />
      ))}
    </svg>
  );
}
