// components/Header.tsx
import styles from "./styles.module.css";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoSectionLift from "./LogoSection/LogoSection";
import Navbar from "react-bootstrap/Navbar";
import NavItemsSection from "./ItemsSection/ItemsSection";
import RightSection from "./RightSection/RightSection";
import { useState } from "react";

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={styles.MainNavBar}>
        <Navbar
          className={styles.NavBar}
          expand="lg"
          sticky="top"
          expanded={expanded}
          onToggle={(isExpanded) => setExpanded(isExpanded)}
        >
          <Container fluid className={styles.navWrapper}>
            <LogoSectionLift />
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className={styles.customToggler}
            >
              <span className={expanded ? styles.line1Open : ""}></span>
              <span className={expanded ? styles.line2Open : ""}></span>
              <span className={expanded ? styles.line3Open : ""}></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarScroll">
              <NavDropdown.Divider />
              <NavItemsSection />
              <RightSection />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
