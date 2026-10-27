import type { Product } from "../../../../data/products";
import ProductsGrid from "../../../ProductsPage/ProductsGrid/ProductsGrid";
import styles from "./styles.module.css";

export type ActiveChip = {
  key: string;
  label: string;
  onRemove: () => void;
};

type Props = {
  products: Product[];
  chips: ActiveChip[];
};

function ProductsResults({ products, chips }: Props) {
  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.chips}>
          {chips.map((chip) => (
            <span key={chip.key} className={styles.chip}>
              {chip.label}
              <button
                type="button"
                aria-label={`Remove ${chip.label}`}
                onClick={chip.onRemove}
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <p className={styles.count}>{products.length} products</p>
      </div>

      {products.length > 0 ? (
        <ProductsGrid products={products} />
      ) : (
        <p>No products match your filters.</p>
      )}
    </div>
  );
}

export default ProductsResults;
