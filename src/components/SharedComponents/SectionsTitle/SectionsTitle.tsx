import styles from "./styles.module.css";
import useScrollAnimation from "../../Hook/Hook";

interface TitleComponentProps {
  title: string;
}

const TitleComponent = ({ title }: TitleComponentProps) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${isVisible ? styles.visible : ""}`}
    >
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default TitleComponent;
