import styles from "./styles.module.css";
import SharedButton from "../../../SharedComponents/SharedButtons/SharedButtons";

function MainHero() {
  return (
    <>
      <h1 className={styles.heroTitle}>FAST GATE</h1>

      <p className={styles.heroSubtitle}>
        Connecting the World with Unmatched Quality
      </p>

      <SharedButton
        label="Explore Our Products"
        href="/Our-Products"
        variant="primarybutton"
      />
    </>
  );
}

export default MainHero;
