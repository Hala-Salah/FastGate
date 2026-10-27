import { useMemo } from "react";
import styles from "./styles.module.css";

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  opacity: number;
  hasGlow: boolean;
  color: string;
}

const starColors = [
  "#ffffff",
  "#ffffff",
  "#ffffff",
  "#a8c8ff",
  "#a8c8ff",
  "#a8c8ff",
  "#cfe0ff",
  "#f7971d",
];

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => {
    const size = Math.random() * 2 + 0.5;
    return {
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size,
      opacity: Math.random() * 0.5 + 0.5,
      hasGlow: size > 1.7,
      color: starColors[Math.floor(Math.random() * starColors.length)],
    };
  });
}

function StarryBackground({ alwaysOn = false }: { alwaysOn?: boolean }) {
  const stars = useMemo(() => generateStars(280), []);

  return (
    <div
      className={`${styles.starryBackground} ${alwaysOn ? styles.alwaysOn : ""}`}
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className={`${styles.star} ${star.hasGlow ? styles.starGlow : ""}`}
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            background: star.color,
            boxShadow: star.hasGlow ? `0 0 4px 1px ${star.color}99` : undefined,
          }}
        />
      ))}
    </div>
  );
}

export default StarryBackground;
