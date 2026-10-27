import { useState } from "react";
import { brands } from "../../../data/brands";
import { products } from "../../../data/products";
import type { Product } from "../../../data/products";
import ProductFilters, {
  type FilterOption,
} from "./ProductFilters/ProductFilters";
import ProductsResults from "./ProductsResults/ProductsResults";
import styles from "./styles.module.css";

const TYPE_LABELS: Record<string, string> = {
  food: "Food",
  "non-food": "Non-food",
};
const getBrandId = (p: Product) => p.brandId;

const brandById = new Map(brands.map((b) => [b.id, b]));
const getType = (p: Product) => brandById.get(getBrandId(p))?.productType;

// بس البراندات اللي إلها منتجات (Fastora خدمات، فما بتظهر)
const productBrands = brands.filter((b) => b.type === "products");

function Body() {
  // =====================================================
  // STATE
  // =====================================================

  const [query, setQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Type: خيار واحد بس (إذا ضغطتي على المختار بينشال)
  const toggleType = (value: string) =>
    setSelectedTypes((list) => (list.includes(value) ? [] : [value]));

  // Brand: أكتر من خيار
  const toggleBrand = (value: string) =>
    setSelectedBrands((list) =>
      list.includes(value) ? list.filter((v) => v !== value) : [...list, value],
    );

  const clearAll = () => {
    setSelectedTypes([]);
    setSelectedBrands([]);
    setQuery("");
  };

  // =====================================================
  // FILTERING
  // =====================================================

  // لو ما في شي مختار، الفلتر مش شغال
  const matchesType = (p: Product) =>
    selectedTypes.length === 0 || selectedTypes.includes(getType(p) ?? "");

  const matchesBrand = (p: Product) =>
    selectedBrands.length === 0 || selectedBrands.includes(getBrandId(p));

  const matchesSearch = (p: Product) =>
    p.name.toLowerCase().includes(query.trim().toLowerCase());

  const filtered = products.filter(
    (p) => matchesType(p) && matchesBrand(p) && matchesSearch(p),
  );

  // =====================================================
  // FILTER OPTIONS (الأعداد جنب كل خيار)
  // =====================================================

  // عدد الـ Type بيعتمد على البراند المختار والبحث
  const typeOptions: FilterOption[] = Object.entries(TYPE_LABELS).map(
    ([value, label]) => ({
      value,
      label,
      count: products.filter(
        (p) => getType(p) === value && matchesBrand(p) && matchesSearch(p),
      ).length,
    }),
  );

  // عدد البراند بيعتمد على الـ Type المختار والبحث
  const brandOptions: FilterOption[] = productBrands.map((b) => ({
    value: b.id,
    label: b.name,
    count: products.filter(
      (p) => getBrandId(p) === b.id && matchesType(p) && matchesSearch(p),
    ).length,
  }));

  // =====================================================
  // ACTIVE CHIPS (الفلاتر المفعّلة اللي عليها X)
  // =====================================================

  const activeChips = [
    ...selectedTypes.map((v) => ({
      key: `type-${v}`,
      label: TYPE_LABELS[v],
      onRemove: () => setSelectedTypes([]),
    })),
    ...selectedBrands.map((id) => ({
      key: `brand-${id}`,
      label: brandById.get(id)?.name ?? id,
      onRemove: () => toggleBrand(id),
    })),
  ];

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section className={styles.body}>
      {/* اليسار: الفلتر */}
      <ProductFilters
        query={query}
        onQueryChange={setQuery}
        types={typeOptions}
        brands={brandOptions}
        selectedTypes={selectedTypes}
        selectedBrands={selectedBrands}
        onToggleType={toggleType}
        onToggleBrand={toggleBrand}
        onClear={clearAll}
      />

      {/* اليمين: النتائج */}
      <ProductsResults products={filtered} chips={activeChips} />
    </section>
  );
}

export default Body;
