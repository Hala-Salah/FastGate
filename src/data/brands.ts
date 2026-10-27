export interface BrandCategory {
  id: string;
  name: string;
  icon: string;
}
export type BrandType = "products" | "services";

export type ProductType = "food" | "non-food";

export interface Brand {
  id: string;
  name: string;
  logo: string;
  brandHeroImage: string;
  description: string;
  type: BrandType;
  productType: ProductType; // ← جديد
  categories: BrandCategory[];
}

export const brands: Brand[] = [
  // =====================================================
  // QITAF SPICES
  // =====================================================
  {
    id: "Qitaf-spices",
    name: "QITAF Spices",
    logo: "/assets/images/OurBrand/qitaf-spices.png",

    brandHeroImage: "/assets/images/OurBrand/BrandHero/qitaf-spices.jpeg",

    description:
      "A premium spice brand offering a wide range of high-quality herbs and spices, carefully selected to bring rich flavor and authentic taste to every meal.",

    type: "products",
    productType: "food",

    categories: [
      {
        id: "pure-spices",
        name: "Pure Spices",
        icon: "GiChiliPepper",
      },
      {
        id: "blended-spices",
        name: "Blended Spices",
        icon: "GiCoolSpices",
      },
      {
        id: "seeds-flavorings",
        name: "Seeds & Flavorings",
        icon: "LiaSeedlingSolid",
      },
      {
        id: "dried-herbs",
        name: "Dried Herbs",
        icon: "GiHerbsBundle",
      },
      {
        id: "paprika-collection",
        name: "Paprika Collection",
        icon: "GiBellPepper",
      },
      {
        id: "spice-packets",
        name: "Spice Packets",
        icon: "GoContainer",
      },
      {
        id: "dried-fruit",
        name: "Dried Fruit",
        icon: "GiFruitBowl",
      },
    ],
  },

  // =====================================================
  // FASTORA
  // =====================================================
  {
    id: "Fastora",
    name: "Fastora",

    logo: "/assets/images/OurBrand/Fastora.png",

    brandHeroImage: "/assets/images/OurBrand/BrandHero/qitaf-spices.jpeg",

    description:
      "Fastora is committed to providing reliable, high-quality services designed to meet customer needs with efficiency and excellence.",

    type: "services",
    productType: "non-food",

    categories: [],
  },

  // =====================================================
  // QITAF FOOD
  // =====================================================
  {
    id: "Qitaf",
    name: "Qitaf",

    logo: "/assets/images/OurBrand/qitaf.png",

    brandHeroImage: "/assets/images/OurBrand/BrandHero/qitaf-spices.jpeg",

    description:
      "Qitaf is a trusted brand committed to delivering high-quality everyday essentials, combining reliability, value, and consistent quality for every household.",

    type: "products",
    productType: "food",

    categories: [
      {
        id: "food-supplies",
        name: "Food Supplies",
        icon: "GiRiceCooker",
      },
      {
        id: "pickles",
        name: "Pickles",
        icon: "GiPickle",
      },
      {
        id: "tomato-products-sauces",
        name: "Tomato Products & Sauces",
        icon: "GiTomato",
      },
      {
        id: "potted-meat",
        name: "Potted Meat",
        icon: "IoFish",
      },
      {
        id: "canned-legumes",
        name: "Canned Legumes",
        icon: "GiOpenedFoodCan",
      },
    ],
  },

  // =====================================================
  // TINDA
  // =====================================================
  {
    id: "Tinda",
    name: "Tinda",

    logo: "/assets/images/OurBrand/Tinda.png",

    brandHeroImage: "/assets/images/OurBrand/BrandHero/TindaHero.jpeg",

    description:
      "Tinda is committed to providing strong, reliable, and high-quality household products that combine durability, functionality, and excellent value.",

    type: "products",
    productType: "non-food",

    categories: [
      {
        id: "soft",
        name: "Soft",
        icon: "GiCottonFlower",
      },
      {
        id: "strong",
        name: "Strong",
        icon: "MdFitnessCenter",
      },
      {
        id: "clean",
        name: "Clean",
        icon: "BsStars",
      },
    ],
  },

  // =====================================================
  // LILUM
  // =====================================================
  {
    id: "Lilum",
    name: "Lilum",

    logo: "/assets/images/OurBrand/Lilum.png",

    brandHeroImage: "/assets/images/OurBrand/BrandHero/LilumHero.png",

    description:
      "Lilum is dedicated to providing high-quality cleaning solutions that deliver effective performance, freshness, and reliable results for everyday care.",

    type: "products",
    productType: "non-food",

    categories: [
      {
        id: "fresheners",
        name: "Fresheners",
        icon: "GiDelicatePerfume",
      },
      {
        id: "cleaning-solutions",
        name: "Cleaning Solutions",
        icon: "MdCleaningServices",
      },
      {
        id: "emollients",
        name: "Emollients",
        icon: "MdOutlineLocalLaundryService",
      },
    ],
  },
];
