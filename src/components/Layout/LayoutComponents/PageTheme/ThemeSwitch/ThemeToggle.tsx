import { useTheme } from "../ThemeContext";
import styles from "./styles.module.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className={`${styles.toggle} ${isDark ? styles.dark : styles.light}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className={styles.icon}>{isDark ? "🌙" : "☀️"}</span>
      <span className={styles.circle} />
    </button>
  );
};

export default ThemeToggle;
