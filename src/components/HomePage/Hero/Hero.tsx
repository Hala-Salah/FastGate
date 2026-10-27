import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.css";
import earthLight from "../../../../public/assets/images/SectionOne/LightMode.png";
import earthDark from "../../../../public/assets/images/SectionOne/DarkMode.png";
import { useMediaQuery } from "./useMediaQuery/useMediaQuery";
import StarryBackground from "./Stars/Stars";
import AboutUs from "./AboutUs/AboutUs";
import MainHero from "./MainHero/MainHero";

function HeroAboutSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 601px) and (max-width: 1024px)");

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    restDelta: 0.001,
  });

  const desktopConfig = {
    scale: [1, 0.45] as [number, number],
    left: ["50%", "22%"] as [string, string],
    top: ["82%", "52%"] as [string, string],
  };

  const tabletConfig = {
    scale: [0.9, 0.48] as [number, number],
    left: ["50%", "25%"] as [string, string],
    top: ["80%", "48%"] as [string, string],
  };

  const mobileConfig = {
    scale: [0.72, 0.36] as [number, number],
    left: ["50%", "50%"] as [string, string],
    top: ["82%", "28%"] as [string, string],
  };

  const config = isMobile
    ? mobileConfig
    : isTablet
      ? tabletConfig
      : desktopConfig;

  const earthScale = useTransform(smoothProgress, [0, 1], config.scale);

  const earthLeft = useTransform(smoothProgress, [0, 1], config.left);

  const earthTop = useTransform(smoothProgress, [0, 1], config.top);

  const heroOpacity = useTransform(smoothProgress, [0, 0.28], [1, 0]);

  const aboutOpacity = useTransform(smoothProgress, [0.55, 0.85], [0, 1]);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.sticky}>
        <StarryBackground />
        <motion.img
          src={earthLight}
          alt="Earth"
          className={`${styles.earthImage} ${styles.earthLight}`}
          style={{
            left: earthLeft,
            top: earthTop,
            x: "-50%",
            y: "-50%",
            scale: earthScale,
          }}
        />

        <motion.img
          src={earthDark}
          alt="Earth"
          className={`${styles.earthImage} ${styles.earthDark}`}
          style={{
            left: earthLeft,
            top: earthTop,
            x: "-50%",
            y: "-50%",
            scale: earthScale,
          }}
        />

        <motion.div
          className={styles.heroContent}
          style={{ opacity: heroOpacity }}
        >
          <MainHero />
        </motion.div>
        <motion.div
          className={styles.aboutContent}
          style={{ opacity: aboutOpacity }}
        >
          <AboutUs />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroAboutSection;
