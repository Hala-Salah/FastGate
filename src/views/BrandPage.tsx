import { useParams, Link } from "react-router-dom";
import { brands } from "../data/brands";
import BrandHero from "../components/BrandPage/BrandHero/BrandHero";
import BrandCategories from "../components/BrandPage/BrandCategory/BrandCategory";
import SharedButton from "../components/SharedComponents/SharedButtons/SharedButtons";

function BrandPage() {
  const { brandId } = useParams();
  const brand = brands.find((b) => b.id === brandId);

  if (!brand) {
    return (
      <div>
        <p>Brand not found.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <BrandHero
        name={brand.name}
        logo={brand.logo}
        description={brand.description}
        brandHeroImage={brand.brandHeroImage}
      />

      <BrandCategories categories={brand.categories} />

      <div className="d-flex justify-content-center my-5">
        <SharedButton
          label="Back to Brands"
          href="/#Our-Brands"
          variant="secondarybutton"
        />
      </div>
    </div>
  );
}

export default BrandPage;
