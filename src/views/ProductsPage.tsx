import { useState } from "react";
import { useParams } from "react-router-dom";

import { brands } from "../data/brands";
import { products } from "../data/products";

import ProductsHeader from "../components/ProductsPage/ProductsHeader/ProductsHeader";
import ProductsGrid from "../components/ProductsPage/ProductsGrid/ProductsGrid";

function ProductsPage() {
  const { brandId, categorySlug } = useParams();

  const brand = brands.find((b) => b.id === brandId);
  const category = brand?.categories.find((c) => c.id === categorySlug);

  const filteredProducts = products.filter(
    (product) =>
      product.brandId === brandId && product.categoryId === categorySlug,
  );

  const availableSizes = Array.from(
    new Set(
      filteredProducts.flatMap((product) =>
        product.variants
          .map((variant) => variant.size)
          .filter((size): size is string => Boolean(size)),
      ),
    ),
  );

  const [selectedSize, setSelectedSize] = useState<string>(
    availableSizes[0] ?? "",
  );

  if (!brand || !category) {
    return <p>Category not found.</p>;
  }

  return (
    <>
      <ProductsHeader
        brandId={brand.id}
        brandName={brand.name}
        categoryName={category.name}
        productsCount={filteredProducts.length}
        selectedSize={selectedSize}
        onSizeChange={setSelectedSize}
        availableSizes={availableSizes}
      />

      <ProductsGrid products={filteredProducts} selectedSize={selectedSize} />
    </>
  );
}

export default ProductsPage;
