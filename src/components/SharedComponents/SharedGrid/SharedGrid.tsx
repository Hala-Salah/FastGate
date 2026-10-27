import styles from "./styles.module.css";
import type { ReactNode } from "react";
interface SharedGridProps {
  children: ReactNode;
  minColumnWidth?: string; // بتحدد أقل عرض للعنصر قبل ما ينزل لصف جديد
}

function SharedGrid({ children, minColumnWidth = "200px" }: SharedGridProps) {
  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`,
      }}
    >
      {children}
    </div>
  );
}

export default SharedGrid;
