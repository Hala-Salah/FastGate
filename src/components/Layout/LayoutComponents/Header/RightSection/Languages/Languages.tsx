import { useState } from "react";
import { HiOutlineGlobeAlt, HiOutlineChevronDown } from "react-icons/hi2";
import styles from "./styles.module.css";

const languages = [
  { code: "ar", label: "العربية" },
  { code: "en", label: "English" },
  { code: "he", label: "עברית" },
];

function LangSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const toggleMenu = () => setIsOpen(!isOpen);

  const selectLanguage = (code: string) => {
    setCurrentLang(code);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.pillBtn} onClick={toggleMenu}>
        <HiOutlineGlobeAlt className={styles.icon} />
        <span className={styles.code}>{currentLang.toUpperCase()}</span>
        <HiOutlineChevronDown
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
        />
      </button>

      {isOpen && (
        <ul className={styles.dropdown}>
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                className={lang.code === currentLang ? styles.active : ""}
                onClick={() => selectLanguage(lang.code)}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LangSwitcher;
