import ThemeToggle from "../../PageTheme/ThemeSwitch/ThemeToggle";
import LangSwitcher from "./Languages/Languages";
import styles from "./styles.module.css";
const RightSection = () => {
  //  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className={styles.rightSection}>
        <ThemeToggle />
        <LangSwitcher />
      </div>
    </>
  );
};
export default RightSection;
