// Định nghĩa các types cho project
export interface CurrencyPeriod {
  stt: number;
  period: string; // Thời kỳ
  timeRange: string; // Thời gian (VD: "1945-1954")
  startYear?: number;
  endYear?: number;
  image: string; // Link ảnh
  description: string; // Mô tả
  descriptionEn?: string; // Mô tả tiếng Anh
}

export type Language = 'vi' | 'en';

export interface FilterOptions {
  searchTerm: string;
}
