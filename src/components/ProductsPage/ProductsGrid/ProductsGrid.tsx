import { useState } from "react";
import type { Product, ProductVariant } from "../../../data/products";

import SharedCard from "../../SharedComponents/SharedCard/SharedCard";
import SharedGrid from "../../SharedComponents/SharedGrid/SharedGrid";
import ProductModal from "../ProductModal/ProductModal";

interface ProductsGridProps {
  products: Product[];
  selectedSize?: string;
}

function ProductsGrid({ products, selectedSize = "" }: ProductsGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // =====================================================
  // GET DISPLAY VARIANT
  // =====================================================

  const getDisplayVariant = (product: Product): ProductVariant | undefined => {
    // إذا في Size مختار والمنتج عنده هذا الحجم
    if (selectedSize) {
      const sizeVariant = product.variants.find(
        (variant) => variant.size === selectedSize,
      );

      if (sizeVariant) {
        return sizeVariant;
      }
    }

    // المنتجات التي ليس لديها Size
    // مثل:
    // Tomato Paste → weight
    // Lilum → scent
    // Tinda → options
    // نعرض أول Variant بشكل افتراضي
    return product.variants[0];
  };

  // =====================================================
  // VISIBLE PRODUCTS
  // =====================================================

  const visibleProducts = products.filter((product) => {
    if (product.variants.length === 0) {
      return false;
    }

    // إذا ما في Size مختار
    // اعرض جميع المنتجات
    if (!selectedSize) {
      return true;
    }

    // هل المنتج يستخدم نظام Size؟
    const hasSizes = product.variants.some((variant) => Boolean(variant.size));

    // المنتج لا يستخدم Sizes أصلاً
    // مثل Tomato Paste أو Lilum
    if (!hasSizes) {
      return true;
    }

    // المنتج يستخدم Sizes
    // اعرضه فقط إذا الحجم المختار موجود
    return product.variants.some((variant) => variant.size === selectedSize);
  });

  // =====================================================
  // GET SUBTITLE
  // =====================================================

  const getVariantSubtitle = (variant: ProductVariant): string => {
    if (variant.weight) {
      return variant.weight;
    }

    if (variant.scent) {
      return variant.scent;
    }

    if (variant.size) {
      return variant.size;
    }

    return variant.label;
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <>
      <SharedGrid minColumnWidth="180px">
        {visibleProducts.map((product) => {
          const variant = getDisplayVariant(product);

          if (!variant) {
            return null;
          }

          return (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              style={{ cursor: "pointer" }}
            >
              <SharedCard
                title={product.name}
                subtitle={getVariantSubtitle(variant)}
                image={variant.image}
                imageHeight={140}
              />
            </div>
          );
        })}
      </SharedGrid>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          initialSize={selectedSize}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default ProductsGrid;
