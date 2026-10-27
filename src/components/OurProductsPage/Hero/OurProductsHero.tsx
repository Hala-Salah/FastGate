import styles from "./styles.module.css";

function OurProductsHero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <h1 className={styles.title}>
            <span className={styles.eyebrow}>Our</span>
            <span className={styles.word}>Products</span>
          </h1>
        </div>
      </section>
    </>
  );
}

export default OurProductsHero;
