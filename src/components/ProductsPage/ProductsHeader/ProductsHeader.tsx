import { Link } from "react-router-dom";
import styles from "./styles.module.css";

interface ProductsHeaderProps {
  brandId: string;
  brandName: string;
  categoryName: string;
  productsCount: number;
  selectedSize: string;
  onSizeChange: (size: string) => void;
  availableSizes: string[];
}

function ProductsHeader({
  brandId,
  brandName,
  categoryName,
  productsCount,
  selectedSize,
  onSizeChange,
  availableSizes,
}: ProductsHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.breadcrumb}>
        <Link to="/">Brands</Link> /{" "}
        <Link to={`/brands/${brandId}`} className={styles.brandLink}>
          {brandName}
        </Link>{" "}
        / <span>{categoryName}</span>
      </div>

      <h1 className={styles.title}>{categoryName}</h1>
      <p className={styles.count}>{productsCount} products</p>

      <div className={styles.sizeFilter}>
        {availableSizes.map((size) => (
          <button
            key={size}
            className={`${styles.sizeButton} ${
              size === selectedSize ? styles.sizeButtonActive : ""
            }`}
            onClick={() => onSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductsHeader;
