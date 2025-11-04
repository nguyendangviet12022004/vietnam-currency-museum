import { useState, useCallback } from 'react';
import type { Period, FilterOptions } from '../types';

/**
 * Custom hook để quản lý dữ liệu và filter
 */
export const useCurrencyData = (initialData: Period[]) => {
  const [data] = useState<Period[]>(initialData);
  const [filteredData, setFilteredData] = useState<Period[]>(initialData);
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: '',
  });

  // Áp dụng filter - tìm kiếm qua tất cả các cấp: Period -> Timeline -> Item
  const applyFilters = useCallback((newFilters: FilterOptions) => {
    setFilters(newFilters);
    
    let result = [...data];

    // Filter theo search term
    if (newFilters.searchTerm) {
      const term = newFilters.searchTerm.toLowerCase();
      result = result.map(period => {
        // Tìm kiếm trong timelines
        const matchingTimelines = period.timelines.filter(timeline => {
          // Tìm trong tên timeline
          const timelineMatches = 
            timeline.name.toLowerCase().includes(term) ||
            timeline.nameEn.toLowerCase().includes(term) ||
            timeline.timeRange.toLowerCase().includes(term);

          // Tìm trong items
          const hasMatchingItems = timeline.items.some(item =>
            item.description.toLowerCase().includes(term) ||
            item.descriptionEn.toLowerCase().includes(term)
          );

          return timelineMatches || hasMatchingItems;
        });

        // Kiểm tra xem period có khớp không
        const periodMatches = 
          period.name.toLowerCase().includes(term) ||
          period.nameEn.toLowerCase().includes(term) ||
          period.description.toLowerCase().includes(term) ||
          period.descriptionEn.toLowerCase().includes(term);

        // Nếu period khớp hoặc có timeline khớp, giữ lại period
        if (periodMatches || matchingTimelines.length > 0) {
          return {
            ...period,
            timelines: periodMatches ? period.timelines : matchingTimelines
          };
        }

        return null;
      }).filter((period): period is Period => period !== null);
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
