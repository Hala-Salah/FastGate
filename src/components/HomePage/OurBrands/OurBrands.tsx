import styles from "./styles.module.css";
import TitleComponent from "../../SharedComponents/SectionsTitle/SectionsTitle";
import { brands } from "../../../data/brands";
import SharedCard from "../../SharedComponents/SharedCard/SharedCard";
import SharedGrid from "../../SharedComponents/SharedGrid/SharedGrid";

function OurBrands() {
  return (
    <section id="Our-Brands" className={styles.brandsSection}>
      <TitleComponent title="Our Brands" />

      <SharedGrid minColumnWidth="180px">
        {brands.map((brand, i) => (
          <SharedCard
            key={brand.id}
            title={brand.name}
            image={brand.logo}
            to={`/brands/${brand.id}`}
            delay={i * 90}
          />
        ))}
      </SharedGrid>
    </section>
  );
}

export default OurBrands;
