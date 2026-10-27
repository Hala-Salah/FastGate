import { useState } from "react";
import type { Product } from "../../../data/products";
import styles from "./styles.module.css";

interface ProductModalProps {
  product: Product;
  initialSize: string;
  onClose: () => void;
}

function ProductModal({ product, initialSize, onClose }: ProductModalProps) {
  const initialIndex = Math.max(
    product.variants.findIndex(
      (v) => v.size === initialSize || v.label === initialSize,
    ),
    0,
  );

  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const selectedVariant = product.variants[selectedIndex];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <div className={styles.imageWrapper}>
          <img
            src={selectedVariant.image}
            alt={product.name}
            className={styles.image}
          />
        </div>

        <h2 className={styles.title}>{product.name}</h2>

        {selectedVariant.weight && (
          <p className={styles.weight}>{selectedVariant.weight}</p>
        )}

        <div className={styles.sizeButtons}>
          {product.variants.map((variant, index) => (
            <button
              key={variant.id}
              className={`${styles.sizeButton} ${
                index === selectedIndex ? styles.sizeButtonActive : ""
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {variant.label || variant.size}
            </button>
          ))}
        </div>

        {product.description && (
          <p className={styles.description}>{product.description}</p>
        )}
      </div>
    </div>
  );
}

export default ProductModal;
