// Định nghĩa các types cho project

// Item - Vật phẩm tiền tệ (có thể có nhiều ảnh)
export interface CurrencyItem {
  id: string;
  images: string[]; // Mảng URL ảnh
  description: string; // Mô tả tiếng Việt
  descriptionEn: string; // Mô tả tiếng Anh
}

// Timeline - Mốc thời gian trong một thời kỳ
export interface Timeline {
  id: string;
  name: string; // Tên mốc thời gian (VD: "Nhà Lý")
  nameEn: string; // Tên tiếng Anh
  timeRange: string; // Khoảng thời gian (VD: "1009 - 1225")
  startYear: number;
  endYear: number;
  items: CurrencyItem[]; // Các vật phẩm trong mốc thời gian này
}

// Period - Thời kỳ lớn
export interface Period {
  id: string;
  name: string; // Tên thời kỳ (VD: "Thời phong kiến")
  nameEn: string; // Tên tiếng Anh
  description: string; // Mô tả tổng quan
  descriptionEn: string; // Mô tả tổng quan tiếng Anh
  timelines: Timeline[]; // Các mốc thời gian trong thời kỳ
}

export type Language = 'vi' | 'en';

export interface FilterOptions {
  searchTerm: string;
}
