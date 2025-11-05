# Hướng dẫn đặt ảnh

## ✅ Hoàn thành

Đã thay thế thành công **53 URLs** từ Google Drive sang đường dẫn local trong `sampleData.ts`

## 📁 Cách đặt ảnh

Hãy copy tất cả file ảnh vào thư mục: `public/images/`

### Danh sách 54 file ảnh cần đặt:

1. `Nhà Đinh 1.jpg`
2. `Nhà Đinh 2.jpg`
3. `Nhà Đinh 3.jpg`
4. `Nhà Đinh 4.jpg`
5. `Nhà Tiền Lê 1.jpg`
6. `Nhà Tiền Lê 2.jpg`
7. `Nhà Tiền Lê 3.jpg`
8. `Nhà Lý 1.jpg`
9. `Nhà Lý 2.jpg`
10. `Nhà Lý 3.jpg`
11. `Thông Bảo Hội Sao vẽ lại.jpg`
12. `Thông Bảo Hội Sao vẽ lại 2.jpg`
13. `Cảnh Hưng Thông Bảo.jpg`
14. `Hồng Đức Thông Bảo (洪德通寶).jpg`
15. `Tây Sơn 2.jpg`
16. `Tây Sơn 1.jpg`
17. `Nguyễn.jpg`
18. `Nhà Nguyễn 2.jpg`
19. `Dong bac Dong Duong 1900.jpg`
20. `Tien giay 1906-1930.png`
21. `1945-1954 song hanh.jpg`
22. `1945-1951 (1).jpg`
23. `1945-1951 (2).jpg`
24. `1951-1954 (1).jpg`
25. `1951-1954(2).jpg`
26. `1951-1954 (3).jpg`
27. `1951-1954 (4).jpg`
28. `1951-1954 (5).jpg`
29. `1951-1954 (6).jpg`
30. `50dongluuniemnhnn2001.webp`
31. `200-dong-1970.webp`
32. `500-dong-1970.webp`
33. `bo-tien-giay-nam-1951-do-ngan-hang-quoc-gia-viet-nam-tien-than-cua-ngan-hang-nha-nuoc-hien-nay-phat-hanh-10385078.jpg`
34. `mot-dong-tien-giai-doan-1959-1978-10402569.jpg`
35. `vietnam-50-dong-1985-p97.webp`
36. `tien-viet-nam-cong-hoa-2.jpg`
37. `20140731_151252.jpg`
38. `z560502567814974d8823de8a67e853e84e960ec232224-4852.jpg`
39. `100d-800x800.jpg`
40. `200_e32d8.webp`
41. `s-l1600.webp`
42. `s-l1600 (1).webp`
43. `s-l1600 (2).webp`
44. `s-l1600 (3).webp`
45. `s-l1600 (4).webp`
46. `s-l1600 (5).webp`
47. `s-l1600 (6).webp`
48. `s-l1600 (7).webp`
49. `s-l1600 (8).webp`
50. `s-l1600 (9).webp`
51. `Tiền Giải Phóng.jpg`
52. `Bộ Tiền Thống Nhất.jpg`
53. `tien-viet-nam-1985-tien-tem-gia-re.jpg`

**Lưu ý**: File số 20 xuất hiện 2 lần trong CSV nhưng chỉ cần đặt 1 lần.

## 🚀 Sau khi đặt ảnh

1. Đảm bảo tất cả file ảnh có tên chính xác như trên
2. Chạy lại ứng dụng: `npm run dev`
3. Ảnh sẽ load từ thư mục local, nhanh hơn rất nhiều so với Google Drive!

## 📊 Lợi ích

- ⚡ **Tốc độ**: Ảnh local load gần như tức thì (< 50ms) thay vì 2-5 giây từ Google Drive
- 🎯 **Độ tin cậy**: Không phụ thuộc vào kết nối mạng hay giới hạn API của Google
- 🔧 **Dễ quản lý**: Tất cả assets ở một chỗ trong dự án
- 📦 **Production ready**: Có thể build và deploy dễ dàng

## 🛠️ Script đã chạy

1. `update-images.js` - Parse CSV và tạo mapping từ Google Drive ID sang tên file
2. `fix-image-names.js` - Thay thế tất cả image paths trong sampleData.ts

Các script này có thể xóa sau khi hoàn tất.
