import styles from "./styles.module.css";

interface BrandHeroProps {
  name: string;
  logo: string;
  description: string;
  brandHeroImage: string;
}

function BrandHero({
  name,
  logo,
  description,
  brandHeroImage,
}: BrandHeroProps) {
  return (
    <div
      className={styles.heroWrapper}
      style={{ backgroundImage: `url(${brandHeroImage})` }}
    >
      <div className={styles.overlay} />
      <div className={styles.hero}>
        <div className={styles.glowOrb} />

        <div className={styles.logoWrapper}>
          <img src={logo} alt={name} className={styles.logo} />
        </div>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default BrandHero;
