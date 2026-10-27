import styles from "./styles.module.css";
import logo from "../../../../../public/assets/images/DarkLogo.png";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
} from "react-icons/hi2";
// أيقونات السوشال ميديا كـ SVG مباشرة (Lucide شالت أيقونات البراندات من الإصدارات الحديثة)
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.02-3.58.07-4.85c.15-3.23 1.67-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-4.35.2-6.78 2.62-6.98 6.98C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

function PageFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />

      <div className={styles.container}>
        {/* شعار + وصف */}
        <div className={styles.column}>
          <img src={logo} alt="Fast Gate" className={styles.logo} />
          <p className={styles.tagline}>
            Everything you need, through one trusted gateway. Fast, reliable,
            and connected to the world's best products.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook" className={styles.socialIcon}>
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}>
              <InstagramIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
              <LinkedinIcon />
            </a>
          </div>
        </div>

        {/* روابط سريعة */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#brands">Our Brands</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* معلومات التواصل */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Get in Touch</h4>
          <ul className={styles.contactList}>
            <li>
              <HiOutlineMapPin className={styles.contactIcon} />
              <span>Amman, Jordan</span>
            </li>
            <li>
              <HiOutlinePhone className={styles.contactIcon} />
              <span>+962 7 9000 0000</span>
            </li>
            <li>
              <HiOutlineEnvelope className={styles.contactIcon} />
              <span>info@fastgate.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {year} Fast Gate. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default PageFooter;
