# Thay đổi Cấu trúc Dữ liệu / Data Structure Changes

## Tổng quan / Overview

Đã thay đổi cấu trúc dữ liệu từ mô hình phẳng sang mô hình phân cấp 3 tầng với hỗ trợ đa ngôn ngữ và nhiều hình ảnh.

Changed data structure from flat model to 3-level hierarchical model with multilingual support and multiple images.

## Cấu trúc mới / New Structure

```
Period (Thời kỳ)
├── id: string
├── name: string (Vietnamese)
├── nameEn: string (English)
├── description: string (Vietnamese)
├── descriptionEn: string (English)
└── timelines: Timeline[]
    ├── id: string
    ├── name: string (Vietnamese)
    ├── nameEn: string (English)
    ├── timeRange: string
    ├── startYear: number
    ├── endYear: number
    └── items: CurrencyItem[]
        ├── id: string
        ├── images: string[] (multiple images)
        ├── description: string (Vietnamese)
        └── descriptionEn: string (English)
```

## Các file đã thay đổi / Changed Files

### 1. `src/types/index.ts`

- Xóa interface `CurrencyPeriod` cũ
- Thêm interface `CurrencyItem` mới
- Thêm interface `Timeline` mới
- Thêm interface `Period` mới
- Đơn giản hóa `FilterOptions` (chỉ còn `searchTerm`)

### 2. `src/data/sampleData.ts`

- Tái cấu trúc hoàn toàn dữ liệu từ 13 periods phẳng
- Nhóm thành 5 periods lớn với multiple timelines
- Mỗi timeline có nhiều items
- Thêm bilingual content cho tất cả các cấp
- Một số items có nhiều hình ảnh

### 3. `src/hooks/useCurrencyData.ts`

- Thay đổi type từ `CurrencyPeriod[]` sang `Period[]`
- Cập nhật logic tìm kiếm để tìm qua tất cả 3 cấp:
  - Tìm trong period names/descriptions
  - Tìm trong timeline names/timeRange
  - Tìm trong item descriptions
- Filter thông minh: giữ lại periods và timelines có kết quả khớp

### 4. `src/components/Timeline.tsx`

- Lặp qua 3 cấp: Period → Timeline → Item
- Hiển thị period label ở đầu mỗi timeline element
- Hiển thị hình ảnh đầu tiên của item
- Thêm badge đếm số lượng hình ảnh nếu > 1
- Truyền cả 3 objects (period, timeline, item) vào modal

### 5. `src/components/PeriodModal.tsx`

- Nhận props: `period`, `timeline`, `item` thay vì chỉ `period`
- Thêm image gallery với navigation (prev/next)
- Thêm image indicators (dots)
- Hiển thị period label
- Hiển thị timeline title
- Hiển thị item description
- Thêm section "Về thời kỳ này" với period description
- Stats dựa trên timeline years

### 6. `src/components/Timeline.css`

- Thêm style cho `.timeline-period-label`
- Thêm style cho `.image-count` badge
- Cải thiện responsive design

### 7. `src/components/PeriodModal.css`

- Thêm style cho `.modal-period-label`
- Thêm style cho `.modal-image-gallery`
- Thêm style cho `.image-nav` (prev/next buttons)
- Thêm style cho `.image-indicators`
- Thêm style cho `.modal-description.period-desc`

## Tính năng mới / New Features

### 1. Multilingual at all levels

- Period names (Vietnamese + English)
- Timeline names (Vietnamese + English)
- Item descriptions (Vietnamese + English)

### 2. Image Gallery

- Multiple images per item
- Image navigation (previous/next)
- Image indicators (dots)
- Image counter badge on timeline

### 3. Hierarchical Display

- Period label badge
- Timeline as main title
- Item description as content
- Context-aware information

### 4. Smart Search

- Search across all 3 levels
- Filter by period, timeline, or item
- Maintains hierarchy in results

## Dữ liệu mẫu / Sample Data

### 5 Periods (Thời kỳ):

1. **Thời kỳ Bắc thuộc và Độc lập sơ khai** (2 timelines)

   - Thời Bắc thuộc (111 TCN - 938)
   - Nhà Đinh - Tiền Lê (968 - 1009)

2. **Thời kỳ Phong kiến phát triển** (2 timelines)

   - Nhà Lý (1009 - 1225)
   - Nhà Trần (1225 - 1400)

3. **Thời kỳ Trung đại** (2 timelines)

   - Nhà Lê Sơ (1428 - 1527)
   - Triều Nguyễn (1802 - 1945)

4. **Thời kỳ Thuộc địa và Kháng chiến** (2 timelines)

   - Thời Pháp thuộc (1858 - 1945)
   - Kháng chiến chống Pháp (1945 - 1954)

5. **Thời kỳ Hiện đại** (4 timelines)
   - Miền Bắc (1954-1975)
   - Miền Nam (1954-1975)
   - Sau Thống nhất (1975 - 1985)
   - Đổi mới và Hội nhập (1985 - nay)

## Testing

✅ No compilation errors
✅ Dev server running successfully
✅ Type checking passed
✅ All components updated
✅ CSS styles added

## Cách sử dụng / How to Use

```bash
# Install dependencies (if needed)
npm install

# Start dev server
npm run dev

# Open browser
http://localhost:5173
```

## Ghi chú / Notes

- Tất cả images sử dụng Unsplash placeholders
- Có thể thay thế bằng hình ảnh thực tế
- Dữ liệu có thể được mở rộng dễ dàng
- Cấu trúc hỗ trợ scale tốt cho nhiều dữ liệu
