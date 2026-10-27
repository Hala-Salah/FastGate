// =====================================================
// PRODUCT VARIANT
// =====================================================
export interface ProductVariant {
  id: string;
  label: string;
  image: string;

  size?: string;
  weight?: string;
  scent?: string;
  color?: string;
  withTie?: boolean;
}

export interface Product {
  id: string;
  name: string;
  brandId: string;
  categoryId: string;
  description: string;
  variants: ProductVariant[];
}

export interface Product {
  id: string;

  name: string;

  brandId: string;

  categoryId: string;

  description: string;

  variants: ProductVariant[];
}

// =====================================================
// PRODUCTS DATA
// =====================================================

export const products: Product[] = [
  // ===================================================
  // QITAF SPICES
  // PURE SPICES
  // ===================================================

  {
    id: "1",
    name: "Black Pepper",
    brandId: "Qitaf-spices",
    categoryId: "pure-spices",

    description:
      "Premium quality black pepper, carefully selected for its bold flavor and rich aroma. Perfect for seasoning meats, soups, and everyday cooking.",

    variants: [
      {
        id: "2",
        label: "Small",
        size: "Small",
        weight: "110g",
        image: "/assets/images/Products/Small/بهار لحمة.png",
      },
      {
        id: "black-pepper-medium",
        label: "Medium",
        size: "Medium",
        weight: "330g",
        image: "/assets/images/Products/Large/بهار لحمة.png",
      },
      {
        id: "black-pepper-large",
        label: "Large",
        size: "Large",
        weight: "910g",
        image:
          "/assets/images/Products/XL/ChatGPT Image Aug 11, 2026 at 03_17_33 PM.png",
      },
    ],
  },
  {
    id: "3",
    name: "Black Pepper",
    brandId: "Qitaf-spices",
    categoryId: "pure-spices",

    description:
      "Premium quality black pepper, carefully selected for its bold flavor and rich aroma. Perfect for seasoning meats, soups, and everyday cooking.",

    variants: [
      {
        id: "4",
        label: "Small",
        size: "Small",
        weight: "110g",
        image: "/assets/images/Products/Small/بهار لحمة.png",
      },
      {
        id: "black-pepper-medium",
        label: "Medium",
        size: "Medium",
        weight: "330g",
        image: "/assets/images/Products/Large/بهار لحمة.png",
      },
      {
        id: "5",
        label: "Large",
        size: "Large",
        weight: "910g",
        image:
          "/assets/images/Products/XL/ChatGPT Image Aug 11, 2026 at 03_17_33 PM.png",
      },
    ],
  },

  {
    id: "9909099888",
    name: "Black Pepper",
    brandId: "Qitaf-spices",
    categoryId: "paprika-collection",

    description:
      "Premium quality black pepper, carefully selected for its bold flavor and rich aroma. Perfect for seasoning meats, soups, and everyday cooking.",

    variants: [
      {
        id: "black-pepper-small",
        label: "Small",
        size: "Small",
        weight: "110g",
        image: "/assets/images/Products/Small/بابريكا حلوة.png",
      },
      {
        id: "black-pepper-medium",
        label: "Medium",
        size: "Medium",
        weight: "330g",
        image: "/assets/images/Products/Large/بابريكا حلوة.png",
      },
      {
        id: "black-pepper-large",
        label: "Large",
        size: "Large",
        weight: "910g",
        image: "/assets/images/Products/XL/بابريكا حلوة.png",
      },
    ],
  },
  {
    id: "black-pepper",
    name: "بابريكا حارة",
    brandId: "Qitaf-spices",
    categoryId: "paprika-collection",

    description:
      "Premium quality black pepper, carefully selected for its bold flavor and rich aroma. Perfect for seasoning meats, soups, and everyday cooking.",

    variants: [
      {
        id: "black-pepper-medium",
        label: "Medium",
        size: "Medium",
        weight: "330g",
        image: "/assets/images/Products/Large/بابريكا حارة.png",
      },
      {
        id: "black-pepper-large",
        label: "Large",
        size: "Large",
        weight: "910g",
        image: "/assets/images/Products/XL/بابريكا حارة.png",
      },
    ],
  },
  {
    id: "6",
    name: "Dried Minced Onion",
    brandId: "Qitaf-spices",
    categoryId: "spice-packets",

    description:
      "Premium quality black pepper, carefully selected for its bold flavor and rich aroma. Perfect for seasoning meats, soups, and everyday cooking.",

    variants: [
      {
        id: "7",
        label: "Small",
        image:
          "/assets/images/Products/Packages/WhatsApp Image 2026-09-15 at 16.15.04.jpeg",
      },
    ],
  },

  {
    id: "8",
    name: "Dried Minced Onion",
    brandId: "Qitaf-spices",
    categoryId: "dried-herbs",

    description:
      "Premium quality black pepper, carefully selected for its bold flavor and rich aroma. Perfect for seasoning meats, soups, and everyday cooking.",

    variants: [
      {
        id: "9",
        label: "Small",
        size: "Small",
        weight: "910g",
        image: "/assets/images/Products/Small/بصل مبروش.png",
      },
    ],
  },
  {
    id: "10",
    name: "بصل مطحون",
    brandId: "Qitaf-spices",
    categoryId: "dried-herbs",

    description:
      "Premium quality black pepper, carefully selected for its bold flavor and rich aroma. Perfect for seasoning meats, soups, and everyday cooking.",

    variants: [
      {
        id: "black-pepper-medium",
        label: "Small",
        size: "Small",
        weight: "330g",
        image: "/assets/images/Products/Small/بصل مطحون.png",
      },
      {
        id: "black-pepper-medium",
        label: "Medium",
        size: "Medium",
        weight: "330g",
        image: "/assets/images/Products/Large/بصل مطحون.png",
      },
    ],
  },
  {
    id: "11",
    name: "Oregano",
    brandId: "Qitaf-spices",
    categoryId: "dried-herbs",

    description:
      "Premium quality black pepper, carefully selected for its bold flavor and rich aroma. Perfect for seasoning meats, soups, and everyday cooking.",

    variants: [
      {
        id: "12",
        label: "Large",
        size: "Large",
        weight: "910g",
        image: "/assets/images/Products/XL/اوريجانو.png",
      },
    ],
  },

  // ===================================================
  // QITAF FOOD
  // TOMATO PRODUCTS & SAUCES
  // ===================================================

  {
    id: "13",
    name: "Tomato Paste",
    brandId: "Qitaf",
    categoryId: "tomato-products-sauces",

    description:
      "Rich tomato paste made from carefully selected tomatoes for a full and authentic flavor.",

    variants: [
      {
        id: "14",
        label: "320g",
        weight: "320g",
        image: "/assets/images/Products/Qitaf/tomato-paste-320.png",
      },
      {
        id: "tomato-paste-800g",
        label: "800g",
        weight: "800g",
        image: "/assets/images/Products/Qitaf/tomato-paste-800.png",
      },
      {
        id: "tomato-paste-1kg",
        label: "1kg",
        weight: "1kg",
        image: "/assets/images/Products/Qitaf/tomato-paste-1kg.png",
      },
    ],
  },

  // ===================================================
  // QITAF FOOD
  // FOOD SUPPLIES
  // Product with only one weight
  // ===================================================

  {
    id: "15",
    name: "White Sugar",
    brandId: "Qitaf",
    categoryId: "food-supplies",

    description:
      "High-quality white sugar suitable for everyday cooking, baking, and beverages.",

    variants: [
      {
        id: "16",
        label: "1kg",
        weight: "1kg",
        image: "/assets/images/Products/Qitaf/sugar-1kg.png",
      },
    ],
  },

  {
    id: "17",
    name: "Rice",
    brandId: "Qitaf",
    categoryId: "food-supplies",

    description:
      "Premium quality rice selected for consistent texture, flavor, and excellent cooking results.",

    variants: [
      {
        id: "18",
        label: "1kg",
        weight: "1kg",
        image: "/assets/images/Products/Qitaf/rice-1kg.png",
      },
      {
        id: "19",
        label: "5kg",
        weight: "5kg",
        image: "/assets/images/Products/Qitaf/rice-5kg.png",
      },
    ],
  },

  // ===================================================
  // QITAF FOOD
  // PICKLES
  // ===================================================

  {
    id: "20",
    name: "Cucumber Pickles 7–9",
    brandId: "Qitaf",
    categoryId: "pickles",

    description:
      "Crunchy cucumber pickles carefully selected and prepared for a fresh and balanced taste.",

    variants: [
      {
        id: "21",
        label: "400g",
        weight: "400g",
        image: "/assets/images/Products/Qitaf/pickles-7-9-400.png",
      },
      {
        id: "22",
        label: "1kg",
        weight: "1kg",
        image: "/assets/images/Products/Qitaf/pickles-7-9-1kg.png",
      },
    ],
  },

  {
    id: "23",
    name: "Cucumber Pickles 18–27",
    brandId: "Qitaf",
    categoryId: "pickles",

    description:
      "Carefully prepared cucumber pickles with a crisp texture and distinctive savory flavor.",

    variants: [
      {
        id: "24",
        label: "400g",
        weight: "400g",
        image: "/assets/images/Products/Qitaf/pickles-18-27-400.png",
      },
      {
        id: "25",
        label: "1kg",
        weight: "1kg",
        image: "/assets/images/Products/Qitaf/pickles-18-27-1kg.png",
      },
    ],
  },

  // ===================================================
  // TINDA
  // STRONG
  // PLATES
  // ===================================================

  {
    id: "26",
    name: "Plates",
    brandId: "Tinda",
    categoryId: "strong",

    description:
      "Strong and durable disposable plates designed for convenient everyday use.",

    variants: [
      {
        id: "27",
        label: "7 inch",
        size: "7 inch",
        image: "/assets/images/Products/Tinda/plates-7.png",
      },
      {
        id: "tinda-plates-10-inch",
        label: "10 inch",
        size: "10 inch",
        image: "/assets/images/Products/Tinda/plates-10.png",
      },
    ],
  },

  {
    id: "28",
    name: "Table Cover",
    brandId: "Tinda",
    categoryId: "strong",

    description:
      "Practical and durable table covers designed to protect surfaces during everyday use.",

    variants: [
      {
        id: "29",
        label: "8",
        size: "8",
        image: "/assets/images/Products/Tinda/table-cover-8.png",
      },
      {
        id: "tinda-table-cover-10",
        label: "10",
        size: "10",
        image: "/assets/images/Products/Tinda/table-cover-10.png",
      },
    ],
  },

  {
    id: "30",
    name: "Trash Bags",
    brandId: "Tinda",
    categoryId: "strong",

    description:
      "Strong and reliable trash bags available in multiple sizes and closure options.",

    variants: [
      {
        id: "31",
        label: "55 × 60 cm - With Tie",
        size: "55 × 60 cm",
        withTie: true,
        image: "/assets/images/Products/Tinda/trash-55x60-tie.png",
      },
      {
        id: "32",
        label: "55 × 60 cm - Without Tie",
        size: "55 × 60 cm",
        withTie: false,
        image: "/assets/images/Products/Tinda/trash-55x60-no-tie.png",
      },
      {
        id: "33",
        label: "75 × 90 cm - With Tie",
        size: "75 × 90 cm",
        withTie: true,
        image: "/assets/images/Products/Tinda/trash-75x90-tie.png",
      },
      {
        id: "34",
        label: "75 × 90 cm - Without Tie",
        size: "75 × 90 cm",
        withTie: false,
        image: "/assets/images/Products/Tinda/trash-75x90-no-tie.png",
      },
    ],
  },

  // ===================================================
  // LILUM
  // FRESHENERS
  // LAUNDRY FRESHENER
  // ===================================================

  {
    id: "35",
    name: "Laundry Freshener",
    brandId: "Lilum",
    categoryId: "fresheners",

    description:
      "A long-lasting laundry freshener designed to leave fabrics with a pleasant and refreshing scent.",

    variants: [
      {
        id: "36",
        label: "Lavender",
        scent: "Lavender",
        image: "/assets/images/Products/XL/اوريجانو.png",
      },
      {
        id: "37",
        label: "Rose",
        scent: "Rose",
        image:
          "/assets/images/Products/Packages/WhatsApp Image 2026-09-15 at 16.15.04.jpeg",
      },
      {
        id: "38",
        label: "Ocean",
        scent: "Ocean",
        image: "/assets/images/Products/Lilum/laundry-ocean.png",
      },
    ],
  },

  // ===================================================
  // LILUM
  // FRESHENERS
  // FLOOR FRESHENER
  // ===================================================

  {
    id: "39",
    name: "Floor Freshener",
    brandId: "Lilum",
    categoryId: "fresheners",

    description:
      "An effective floor freshener that leaves floors clean and pleasantly scented.",

    variants: [
      {
        id: "40",
        label: "Lavender",
        scent: "Lavender",
        image: "/assets/images/Products/Lilum/floor-lavender.png",
      },
      {
        id: "41",
        label: "Lemon",
        scent: "Lemon",
        image: "/assets/images/Products/Lilum/floor-lemon.png",
      },
      {
        id: "42",
        label: "Floral",
        scent: "Floral",
        image: "/assets/images/Products/Lilum/floor-floral.png",
      },
    ],
  },

  // ===================================================
  // LILUM
  // LAUNDRY BEADS
  // ===================================================

  {
    id: "43",
    name: "Laundry Beads",
    brandId: "Lilum",
    categoryId: "fresheners",

    description:
      "Scented laundry beads designed to provide long-lasting freshness to fabrics.",

    variants: [
      {
        id: "44",
        label: "Scent 1",
        scent: "Scent 1",
        image: "/assets/images/Products/Lilum/beads-1.png",
      },
      {
        id: "45",
        label: "Scent 2",
        scent: "Scent 2",
        image: "/assets/images/Products/Lilum/beads-2.png",
      },
      {
        id: "46",
        label: "Scent 3",
        scent: "Scent 3",
        image: "/assets/images/Products/Lilum/beads-3.png",
      },
    ],
  },

  // ===================================================
  // LILUM
  // CLEANING SOLUTIONS
  // BLEACH
  // ===================================================

  {
    id: "47",
    name: "Bleach",
    brandId: "Lilum",
    categoryId: "cleaning-solutions",

    description:
      "Powerful cleaning bleach designed for effective everyday household cleaning.",

    variants: [
      {
        id: "48",
        label: "Scent 1",
        scent: "Scent 1",
        image: "/assets/images/Products/Lilum/bleach-1.png",
      },
      {
        id: "49",
        label: "Scent 2",
        scent: "Scent 2",
        image: "/assets/images/Products/Lilum/bleach-2.png",
      },
      {
        id: "50",
        label: "Scent 3",
        scent: "Scent 3",
        image: "/assets/images/Products/Lilum/bleach-3.png",
      },
    ],
  },

  // ===================================================
  // LILUM
  // CLEANING SOLUTIONS
  // GLASS CLEANER
  //
  // One product - no scent/size
  // ===================================================

  {
    id: "00000",
    name: "Glass Cleaner",
    brandId: "Lilum",
    categoryId: "cleaning-solutions",

    description:
      "Effective glass cleaner designed to provide a clean and streak-free finish.",

    variants: [
      {
        id: "0945809",
        label: "Glass Cleaner",
        image: "/assets/images/Products/Lilum/glass-cleaner.png",
      },
    ],
  },

  // ===================================================
  // LILUM
  // CLEANING SOLUTIONS
  // DISHWASHING LIQUID
  // ===================================================

  {
    id: "405960",
    name: "Dishwashing Liquid",
    brandId: "Lilum",
    categoryId: "cleaning-solutions",

    description:
      "Effective dishwashing liquid designed to remove grease and leave dishes clean.",

    variants: [
      {
        id: "4509809486",
        label: "Dishwashing Liquid",
        image: "/assets/images/Products/Lilum/dishwashing-liquid.png",
      },
    ],
  },

  // ===================================================
  // LILUM
  // CLEANING SOLUTIONS
  // LAUNDRY GEL
  // ===================================================

  {
    id: "6950066666666",
    name: "Laundry Gel",
    brandId: "Lilum",
    categoryId: "cleaning-solutions",

    description:
      "Effective laundry gel designed for reliable everyday fabric cleaning.",

    variants: [
      {
        id: "999898989",
        label: "Laundry Gel",
        image: "/assets/images/Products/Lilum/laundry-gel.png",
      },
    ],
  },
];
