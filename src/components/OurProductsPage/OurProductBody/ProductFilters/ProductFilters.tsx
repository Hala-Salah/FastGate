import { useState } from "react";
import styles from "./styles.module.css";

export type FilterOption = { value: string; label: string; count: number };

type GroupProps = {
  title: string;
  options: FilterOption[];
  selected: string[];
  onToggle: (value: string) => void;
};

function FilterGroup({ title, options, selected, onToggle }: GroupProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.group}>
      <button
        type="button"
        className={styles.groupHeader}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className={`${styles.arrow} ${open ? styles.arrowOpen : ""}`} />
      </button>

      {open && (
        <ul className={styles.list}>
          {options.map((o) => (
            <li key={o.value}>
              <label className={styles.option}>
                <input
                  type="checkbox"
                  checked={selected.includes(o.value)}
                  onChange={() => onToggle(o.value)}
                />
                <span className={styles.box} />
                <span className={styles.label}>{o.label}</span>
                <span className={styles.count}>{o.count}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

type Props = {
  query: string;
  onQueryChange: (value: string) => void;
  types: FilterOption[];
  brands: FilterOption[];
  selectedTypes: string[];
  selectedBrands: string[];
  onToggleType: (v: string) => void;
  onToggleBrand: (v: string) => void;
  onClear: () => void;
};

function ProductFilters(props: Props) {
  const hasActive =
    props.selectedTypes.length +
      props.selectedBrands.length +
      (props.query.trim() ? 1 : 0) >
    0;

  return (
    <aside className={styles.sidebar}>
      {/* البحث */}
      <div className={styles.search}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <input
          type="search"
          placeholder="Search products"
          aria-label="Search products"
          value={props.query}
          onChange={(e) => props.onQueryChange(e.target.value)}
        />
      </div>

      {/* العنوان وزر المسح */}
      <div className={styles.top}>
        <h3 className={styles.heading}>Filters</h3>
        {hasActive && (
          <button
            type="button"
            className={styles.clear}
            onClick={props.onClear}
          >
            Clear all
          </button>
        )}
      </div>

      <FilterGroup
        title="Type"
        options={props.types}
        selected={props.selectedTypes}
        onToggle={props.onToggleType}
      />
      <FilterGroup
        title="Brand"
        options={props.brands}
        selected={props.selectedBrands}
        onToggle={props.onToggleBrand}
      />
    </aside>
  );
}

export default ProductFilters;
