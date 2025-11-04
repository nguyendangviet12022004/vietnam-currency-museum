import { Search, X } from 'lucide-react';
import type { FilterOptions } from '../types';
import './SearchFilter.css';

interface SearchFilterProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onReset: () => void;
  language: 'vi' | 'en';
}

export const SearchFilter = ({
  filters,
  onFilterChange,
  onReset,
  language,
}: SearchFilterProps) => {
  const handleSearchChange = (value: string) => {
    onFilterChange({ searchTerm: value });
  };

  const hasActiveFilters = filters.searchTerm;

  return (
    <div className="search-filter-container">
      <div className="filter-row">
        <div className="search-box">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder={
              language === 'vi'
                ? 'Tìm kiếm theo tên thời kỳ, mô tả...'
                : 'Search by period name, description...'
            }
            value={filters.searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="search-input"
          />
        </div>

        {hasActiveFilters && (
          <button className="reset-button" onClick={onReset}>
            <X size={18} />
            {language === 'vi' ? 'Xóa tìm kiếm' : 'Clear search'}
          </button>
        )}
      </div>
    </div>
  );
};
