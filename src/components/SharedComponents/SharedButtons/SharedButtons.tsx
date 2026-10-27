import { Link } from "react-router-dom";
import styles from "./styles.module.css";

type ButtonVariant = "primarybutton" | "secondarybutton";

interface ButtonProps {
  label: string;
  href?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

function SharedButton({
  label,
  href,
  variant = "secondarybutton",
  type = "button",
  disabled = false,
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `${styles.btn} ${styles[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link to={href} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default SharedButton;
