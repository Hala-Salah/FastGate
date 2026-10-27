import { useRef, useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import {
  NavLink,
  Link as RouterLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { scroller } from "react-scroll";
import styles from "./styles.module.css";
import { brands } from "../../../../../data/brands";

type NavItem =
  | { label: string; type: "route"; path: string }
  | { label: string; type: "scroll"; target: string }
  | { label: string; type: "dropdown" };

const items: NavItem[] = [
  { label: "Home", type: "route", path: "/" },
  { label: "About US", type: "scroll", target: "About-FastGate" },
  { label: "Our Brands", type: "dropdown" },
  { label: "Our Products", type: "route", path: "/Our-Products" },
  { label: "Contact Us", type: "route", path: "/Contact-Us" },
];

const NavItemsSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setShowBrandsDropdown(true);
  };

  const closeDropdownWithDelay = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setShowBrandsDropdown(false);
    }, 200);
  };

  const handleScrollClick = (target: string) => {
    if (location.pathname !== "/") {
      // مش واقف بالهوم؟ روح للهوم الأول
      navigate("/");
      // استنى شوي لحد ما الصفحة تترندر، وبعدين اعمل scroll
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 100);
    } else {
      // أصلاً واقف بالهوم؟ اعمل scroll على طول
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  };

  return (
    <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
      {items.map((item) => {
        if (item.type === "scroll") {
          return (
            <Nav.Link
              key={item.label}
              onClick={() => handleScrollClick(item.target)}
              className={styles.NavItems}
              style={{ cursor: "pointer" }}
            >
              {item.label}
            </Nav.Link>
          );
        }

        if (item.type === "dropdown") {
          return (
            <NavDropdown
              key={item.label}
              title={item.label}
              id="our-brands-dropdown"
              className={`${styles.NavItems} ${styles.brandsDropdown}`}
              active={location.pathname.startsWith("/brands")}
              show={showBrandsDropdown}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdownWithDelay}
            >
              {brands.map((brand) => (
                <NavDropdown.Item
                  key={brand.id}
                  as={RouterLink}
                  to={`/brands/${brand.id}`}
                  onClick={() => {
                    if (closeTimeoutRef.current) {
                      clearTimeout(closeTimeoutRef.current);
                    }
                    setShowBrandsDropdown(false);
                  }}
                >
                  {brand.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          );
        }

        const isHome = item.path === "/";

        return (
          <Nav.Link
            as={isHome ? RouterLink : NavLink}
            to={item.path}
            key={item.label}
            className={styles.NavItems}
          >
            {item.label}
          </Nav.Link>
        );
      })}
    </Nav>
  );
};

export default NavItemsSection;
