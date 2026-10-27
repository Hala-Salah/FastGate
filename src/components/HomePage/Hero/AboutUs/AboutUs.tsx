import styles from "./styles.module.css";
function AboutUs() {
  return (
    <>
      <h2 className={styles.aboutTitle}>
        About <span className={styles.aboutTitleAccent}>Fast Gate</span>
      </h2>
      <p className={styles.aboutText}>
        We partner with distributors and retailers, delivering trusted brands
        across food, home, and daily essentials.
      </p>
      <p className={styles.aboutText}>
        Our mission is to provide exceptional quality and reliable supply that
        businesses can count on, order after order.
      </p>{" "}
    </>
  );
}

export default AboutUs;
