import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import useScrollAnimation from "../../Hook/Hook";

interface CardProps {
  title: string;
  subtitle?: string;
  image?: string;
  icon?: React.ReactNode;
  to?: string;
  imageHeight?: number;
  delay?: number; // بالميلي ثانية، للظهور المتتابع
}

function SharedCard({
  title,
  subtitle,
  image,
  icon,
  to,
  imageHeight = 80,
  delay = 0,
}: CardProps) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const content = (
    <div className={styles.card}>
      <div
        className={styles.visualWrapper}
        style={{ height: `${imageHeight}px` }}
      >
        {image && <img src={image} alt={title} className={styles.image} />}
        {icon && <span className={styles.icon}>{icon}</span>}
      </div>
      <span className={styles.title}>{title}</span>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
    </div>
  );

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${isVisible ? styles.visible : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {to ? (
        <Link to={to} className={styles.link}>
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}

export default SharedCard;
