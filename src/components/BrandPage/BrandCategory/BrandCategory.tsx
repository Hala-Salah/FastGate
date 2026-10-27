import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import TitleComponent from "../../SharedComponents/SectionsTitle/SectionsTitle";
import SharedCard from "../../SharedComponents/SharedCard/SharedCard";
import SharedGrid from "../../SharedComponents/SharedGrid/SharedGrid";
import { slugify } from "../../../utils/slugify";
import * as GiIcons from "react-icons/gi";
import * as HiIcons from "react-icons/hi2";
import * as IoIcon from "react-icons/io5";
import * as MdIcon from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { LiaSeedlingSolid } from "react-icons/lia";
import { GoContainer } from "react-icons/go";

const iconSets: Record<string, React.ComponentType<{ size?: number }>> = {
  ...GiIcons,
  ...HiIcons,
  ...IoIcon,
  ...MdIcon,
  GoContainer,
  BsStars,
  LiaSeedlingSolid,
};

interface Category {
  name: string;
  icon: string;
}

interface BrandCategoriesProps {
  categories: Category[];
}

function BrandCategories({ categories }: BrandCategoriesProps) {
  const { brandId } = useParams();

  return (
    <section className={styles.catSection}>
      {" "}
      <TitleComponent title="Categories" />
      <SharedGrid minColumnWidth="180px">
        {categories.map((category) => {
          const IconComponent = iconSets[category.icon];
          return (
            <Link
              key={category.name}
              to={`/brands/${brandId}/${slugify(category.name)}`}
              className={styles.categoryLink}
            >
              <SharedCard
                title={category.name}
                icon={IconComponent ? <IconComponent size={28} /> : null}
              />
            </Link>
          );
        })}
      </SharedGrid>
    </section>
  );
}

export default BrandCategories;
