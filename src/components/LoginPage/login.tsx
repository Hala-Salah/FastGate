import type { ReactNode } from "react";
import StarryBackground from "../HomePage/Hero/Stars/Stars";
import styles from "./styles.module.css";

import earth from "../../../public/assets/images/SectionOne/DarkMode.png";

export default function LoginBody({ children }: { children?: ReactNode }) {
  return (
    <main className={styles.page}>
      {/* اليسار: النجوم + الأرض + الجملة */}
      <section className={styles.visual} aria-hidden="true">
        <div className={styles.stars}>
          <StarryBackground alwaysOn />
        </div>

        <img src={earth} alt="" className={styles.earth} />

        <div className={styles.tagline}>
          <p className={styles.taglineTitle}>FastGate Admin Panel</p>
          <p className={styles.taglineText}>Sign in to manage the website.</p>
        </div>
      </section>

      {/* اليمين: لوحة الفورم */}
      <section className={styles.panel}>{children}</section>
    </main>
  );
}
