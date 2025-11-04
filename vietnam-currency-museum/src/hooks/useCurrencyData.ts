import { useState, useCallback } from 'react';
import type { CurrencyPeriod, FilterOptions } from '../types';

/**
 * Custom hook để quản lý dữ liệu và filter
 */
export const useCurrencyData = (initialData: CurrencyPeriod[]) => {
  const [data] = useState<CurrencyPeriod[]>(initialData);
  const [filteredData, setFilteredData] = useState<CurrencyPeriod[]>(initialData);
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: '',
  });

  // Áp dụng filter
  const applyFilters = useCallback((newFilters: FilterOptions) => {
    setFilters(newFilters);
    
    let result = [...data];

    // Filter theo search term
    if (newFilters.searchTerm) {
      const term = newFilters.searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.period.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term) ||
          item.timeRange.toLowerCase().includes(term)
      );
    }

    setFilteredData(result);
  }, [data]);

  // Reset filters
  const resetFilters = useCallback(() => {
    setFilters({ searchTerm: '' });
    setFilteredData(data);
  }, [data]);

  return {
    data,
    filteredData,
    filters,
    applyFilters,
    resetFilters,
  };
};
