import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../../../LayoutComponents/PageTheme/ThemeContext";
import LightLogo from "/assets/images/LightLogo.png";
import DarkLogo from "/assets/images/DarkLogo.png";

const LogoSectionLift = () => {
  const { theme } = useTheme();

  return (
    <NavbarBrand as={Link} to="/">
      <img
        className={styles.fastgateLogo}
        src={theme === "dark" ? DarkLogo : LightLogo}
        alt="Fast Gate Group"
      />
    </NavbarBrand>
  );
};

export default LogoSectionLift;
