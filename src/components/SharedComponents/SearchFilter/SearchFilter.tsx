import styles from "./styles.module.css";

interface FilterOption {
  label: string;
  value: string;
}

interface SharedSearchFilterProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  filterOptions?: FilterOption[];
  filterValue?: string;
  onFilterChange?: (value: string) => void;
}

function SharedSearchFilter({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search...",
  filterOptions,
  filterValue,
  onFilterChange,
}: SharedSearchFilterProps) {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={searchPlaceholder}
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {filterOptions && filterOptions.length > 0 && (
        <select
          className={styles.filterSelect}
          value={filterValue}
          onChange={(e) => onFilterChange?.(e.target.value)}
        >
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default SharedSearchFilter;
