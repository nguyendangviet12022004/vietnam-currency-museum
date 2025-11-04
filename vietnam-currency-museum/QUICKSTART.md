# 🚀 Quick Start Guide - Hướng dẫn nhanh# 🚀 Quick Start Guide - Hướng dẫn nhanh

## Bước 1: Cài đặt Dependencies## Bước 1: Cài đặt Dependencies

`bash`bash

npm install --legacy-peer-depsnpm install

````



## Bước 2: Chạy Development ServerNếu gặp lỗi với `prop-types`, chạy thêm:



```bash```bash

npm run devnpm install prop-types

````

Ứng dụng sẽ chạy tại: `http://localhost:5173`## Bước 2: Chạy Development Server

## Bước 3: Sử dụng ứng dụng```bash

npm run dev

### 3.1. Xem timeline```

- Ứng dụng có sẵn 13 giai đoạn lịch sử tiền tệ Việt Nam

- Cuộn xuống để xem timeline đầy đủỨng dụng sẽ chạy tại: `http://localhost:5173`

        ### 3.2. Tìm kiếm và Lọc## Bước 3: Sử dụng ứng dụng

- **Tìm kiếm**: Nhập từ khóa (tên thời kỳ, mô tả...)

- **Lọc theo năm**: Nhập năm bắt đầu và/hoặc năm kết thúc### 3.1. Xem dữ liệu mẫu

- **Xóa bộ lọc**: Click nút "Xóa bộ lọc"

- Ứng dụng đã có sẵn 13 giai đoạn lịch sử tiền tệ Việt Nam

### 3.3. Xem chi tiết- Cuộn xuống để xem timeline

- Click vào bất kỳ card nào trên timeline

- Modal sẽ hiện lên với:### 3.2. Upload file Excel của bạn

  - Ảnh lớn hơn

  - Mô tả đầy đủ1. Click nút **"Tải file Excel"**

  - Thống kê (năm bắt đầu, năm kết thúc, thời gian)2. Chọn file Excel theo format:

### 3.4. Chuyển đổi ngôn ngữ| Thời kỳ | Thời gian | STT | Ảnh(link) | Mô tả |

- Click nút **Languages** / **Tiếng Việt** ở góc trên phải| ------- | --------- | --- | --------- | ----- |

- Chuyển giữa Tiếng Việt ↔ English| ... | ... | ... | ... | ... |

## 🎨 Demo Features3. Dữ liệu sẽ được load tự động

### Timeline Card### 3.3. Tìm kiếm và Lọc

Mỗi card hiển thị:

- 📅 Thời gian (ở bên trái)- **Tìm kiếm**: Nhập từ khóa (tên thời kỳ, mô tả...)

- 🎯 Biểu tượng Calendar- **Lọc theo năm**: Nhập năm bắt đầu và/hoặc năm kết thúc

- 🏛️ Tên thời kỳ- **Xóa bộ lọc**: Click nút "Xóa bộ lọc"

- 🖼️ Ảnh minh họa

- 📝 Mô tả (3 dòng)### 3.4. Xem chi tiết

- 🔍 Nút "Xem chi tiết"

- Click vào bất kỳ card nào trên timeline

### Hiệu ứng- Modal sẽ hiện lên với:

- ✨ Fade in khi scroll - Ảnh lớn hơn

- 🎭 Hover để phóng to ảnh - Mô tả đầy đủ

- 🌟 Click để mở modal - Thống kê (năm bắt đầu, năm kết thúc, thời gian)

- 🎨 Smooth transitions

### 3.5. Chuyển đổi ngôn ngữ

## 📊 Thêm dữ liệu mới

- Click nút **Languages** / **Tiếng Việt** ở góc trên phải

### Cách 1: Chỉnh sửa file sampleData.ts- Chuyển giữa Tiếng Việt ↔ English

Mở file `src/data/sampleData.ts`:## 🎨 Demo Features

````typescript### Timeline Card

export const sampleCurrencyData: CurrencyPeriod[] = [

  {Mỗi card hiển thị:

    stt: 14,

    period: 'Tên giai đoạn mới',- 📅 Thời gian (ở bên trái)

    timeRange: '2025 - nay',- 🎯 Biểu tượng Calendar

    startYear: 2025,- 🏛️ Tên thời kỳ

    endYear: 2025,- 🖼️ Ảnh minh họa

    image: 'https://images.unsplash.com/photo-xxx',- 📝 Mô tả (3 dòng)

    description: 'Mô tả bằng tiếng Việt',- 🔍 Nút "Xem chi tiết"

    descriptionEn: 'Description in English',

  },### Hiệu ứng

  // ... existing data

];- ✨ Fade in khi scroll

```- 🎭 Hover để phóng to ảnh

- 🌟 Click để mở modal

### Cách 2: Tạo file JSON riêng- 🎨 Smooth transitions



Tạo file `src/data/customData.json`:## 📊 Tạo file Excel mẫu



```json### Cách 1: Sử dụng Google Sheets

[

  {1. Tạo sheet mới

    "stt": 1,2. Thêm header: `Thời kỳ | Thời gian | STT | Ảnh(link) | Mô tả`

    "period": "Giai đoạn 1",3. Điền dữ liệu

    "timeRange": "1000 - 1200",4. Download as Excel (.xlsx)

    "startYear": 1000,

    "endYear": 1200,### Cách 2: Sử dụng Microsoft Excel

    "image": "https://example.com/image.jpg",

    "description": "Mô tả",1. Tạo workbook mới

    "descriptionEn": "Description"2. Tạo bảng theo format

  }3. Save as .xlsx

]

```### Ví dụ dữ liệu:



Import và sử dụng:```

```typescriptThời kỳ                  | Thời gian      | STT | Ảnh(link)                                          | Mô tả

import customData from './data/customData.json';Thời kỳ Bắc thuộc        | 111 TCN - 938  | 1   | https://images.unsplash.com/photo-1580674285054   | Dưới thời Bắc thuộc, Việt Nam sử dụng tiền tệ của Trung Quốc...

const { filteredData } = useCurrencyData(customData);Thời Đinh - Tiền Lê      | 968 - 1009     | 2   | https://images.unsplash.com/photo-1621504450181   | Sau khi giành độc lập, các triều đại Đinh và Tiền Lê...

````

## 🎯 Tips & Tricks## 🎯 Tips & Tricks

### 1. Ảnh đẹp miễn phí### 1. Ảnh đẹp miễn phí

- Unsplash: https://unsplash.com

- Pexels: https://pexels.com- Unsplash: https://unsplash.com

- Pixabay: https://pixabay.com- Pexels: https://pexels.com

- Pixabay: https://pixabay.com

### 2. Format thời gian linh hoạt

- "111 TCN - 938"### 2. Format thời gian linh hoạt

- "1009 - 1225"

- "1985 - nay"- "111 TCN - 938"

- "2000 - present"- "1009 - 1225"

- "1985 - nay"

### 3. Tối ưu mô tả- "2000 - present"

- Nên dài 2-3 câu cho preview

- Mô tả đầy đủ trong modal sẽ hiển thị tất cả### 3. Tối ưu mô tả

- Hỗ trợ Unicode (tiếng Việt có dấu)

- Nên dài 2-3 câu cho preview

### 4. Sắp xếp dữ liệu- Mô tả đầy đủ trong modal sẽ hiển thị tất cả

- STT quyết định thứ tự hiển thị- Hỗ trợ Unicode (tiếng Việt có dấu)

- Dữ liệu được tự động sắp xếp theo STT

### 4. Sắp xếp dữ liệu

## 🐛 Troubleshooting

- STT quyết định thứ tự hiển thị

### Lỗi: "Multiple React versions"- Không cần sắp xếp thứ tự trong Excel

````bash- Ứng dụng tự động sắp xếp theo STT

rm -rf node_modules package-lock.json

npm install --legacy-peer-deps## 🐛 Troubleshooting

npm run dev

```### Lỗi: "Cannot find module 'prop-types'"



### Lỗi: Ảnh không hiển thị```bash

- Kiểm tra URL ảnh có đúng khôngnpm install prop-types

- Thử mở URL trực tiếp trong browser```

- Ảnh sẽ fallback về ảnh mặc định nếu lỗi

### Lỗi: File Excel không đọc được

### Lỗi: Năm không filter đúng

- Đảm bảo format "Thời gian" có chứa năm- Kiểm tra format file (.xlsx hoặc .xls)

- VD: "1009 - 1225" sẽ tự động extract năm- Đảm bảo có đủ 5 cột

- Nếu không có năm, filter sẽ bỏ qua- Dòng đầu tiên phải là header



## 📱 Responsive### Lỗi: Ảnh không hiển thị



- **Desktop (>1200px)**: Timeline đầy đủ tính năng- Kiểm tra URL ảnh có đúng không

- **Tablet (768-1200px)**: Tối ưu cho iPad- Thử mở URL trực tiếp trong browser

- **Mobile (<768px)**: Layout dọc, touch-friendly- Ảnh sẽ fallback về ảnh mặc định nếu lỗi



## 🔧 Customization### Lỗi: Năm không filter đúng



### Thay đổi màu chủ đạo- Đảm bảo format "Thời gian" có chứa năm

File: `src/index.css`- VD: "1009 - 1225" sẽ tự động extract năm

```css- Nếu không có năm, filter sẽ bỏ qua

:root {

  --color-primary: #DAA520;  /* Vàng gold */## 📱 Responsive

  --color-secondary: #8B4513; /* Nâu saddle */

}- **Desktop (>1200px)**: Timeline đầy đủ tính năng

```- **Tablet (768-1200px)**: Tối ưu cho iPad

- **Mobile (<768px)**: Layout dọc, touch-friendly

### Thay đổi số dòng mô tả preview

File: `src/components/Timeline.css`## 🔧 Customization

```css

.timeline-description {### Thay đổi màu chủ đạo

  -webkit-line-clamp: 3;  /* Đổi thành 2, 4, 5... */

}File: `src/index.css`

````

````css

### Thêm dữ liệu mẫu:root {

File: `src/data/sampleData.ts`  --color-primary: #daa520; /* Vàng gold */

```typescript  --color-secondary: #8b4513; /* Nâu saddle */

export const sampleCurrencyData: CurrencyPeriod[] = [}

  // Thêm object mới vào đây```

];

```### Thay đổi số dòng mô tả preview



## 🎓 Học thêmFile: `src/components/Timeline.css`



### React Concepts được sử dụng```css

- ✅ Hooks (useState, useCallback).timeline-description {

- ✅ Custom Hooks  -webkit-line-clamp: 3; /* Đổi thành 2, 4, 5... */

- ✅ Component composition}

- ✅ Props và TypeScript```

- ✅ Event handling

- ✅ Conditional rendering### Thêm dữ liệu mẫu

- ✅ List rendering với map

File: `src/data/sampleData.ts`

### Libraries chính

- **Framer Motion**: Animations```typescript

- **react-vertical-timeline**: Timeline UIexport const sampleCurrencyData: CurrencyPeriod[] = [

- **Lucide React**: Icons  // Thêm object mới vào đây

];

## 📞 Hỗ trợ```



Nếu gặp vấn đề, hãy:## 🎓 Học thêm

1. Check console trong DevTools (F12)

2. Đọc error message### React Concepts được sử dụng

3. Check TROUBLESHOOTING.md

4. Check README.md- ✅ Hooks (useState, useCallback, useRef)

- ✅ Custom Hooks

---- ✅ Component composition

- ✅ Props và TypeScript

🎉 **Chúc bạn sử dụng thành công!**- ✅ Event handling

- ✅ Conditional rendering

Made with ❤️ using React + TypeScript + Vite- ✅ List rendering với map


### Libraries chính

- **Framer Motion**: Animations
- **react-vertical-timeline**: Timeline UI
- **XLSX**: Excel parser
- **Lucide React**: Icons

## 📞 Hỗ trợ

Nếu gặp vấn đề, hãy:

1. Check console trong DevTools (F12)
2. Đọc error message
3. Check file EXCEL_FORMAT_GUIDE.md
4. Check README.md

---

🎉 **Chúc bạn sử dụng thành công!**

Made with ❤️ using React + TypeScript + Vite
````
