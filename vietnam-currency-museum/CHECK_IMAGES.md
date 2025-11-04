# 🖼️ Hướng dẫn kiểm tra và sửa lỗi ảnh không hiển thị

## ⚠️ Vấn đề hiện tại

Ảnh từ Google Drive không hiển thị được, thay vào đó hiển thị ảnh fallback từ Unsplash.

## 🔍 Nguyên nhân

Google Drive **YÊU CẦU** tất cả files phải được **share công khai** (Anyone with the link can view) để có thể hiển thị trên website.

## ✅ Giải pháp

### Bước 1: Kiểm tra files có được share công khai không

Mở một trong các link sau trong trình duyệt:

```
https://drive.google.com/file/d/1Zi0xWmop7qroAaf0ztGU1kJvXfK6xY9f/view
https://drive.google.com/file/d/1fElBR9_pKSmE5xqGFfhstnWFKcF9TEgy/view
```

- ✅ Nếu bạn thấy ảnh → File đã public
- ❌ Nếu bị yêu cầu đăng nhập hoặc request access → File chưa public

### Bước 2: Share tất cả files công khai

#### Cách 1: Share từng file (nếu ít files)

1. Mở Google Drive
2. Click chuột phải vào file ảnh
3. Chọn "Share" / "Chia sẻ"
4. Click "Change to anyone with the link" / "Thay đổi thành bất kỳ ai có link"
5. Đảm bảo chọn "Viewer" / "Người xem"
6. Click "Done" / "Xong"

#### Cách 2: Share cả folder (khuyên dùng)

1. Mở Google Drive
2. Tìm folder chứa TẤT CẢ ảnh của project
3. Click chuột phải vào folder
4. Chọn "Share" / "Chia sẻ"
5. Click "Change to anyone with the link" / "Thay đổi thành bất kỳ ai có link"
6. ✅ Check vào "Apply to all items inside" / "Áp dụng cho tất cả items bên trong"
7. Click "Done" / "Xong"

### Bước 3: Kiểm tra lại website

1. Mở http://localhost:5173/
2. Reload trang (Ctrl + F5 hoặc Cmd + Shift + R)
3. Kiểm tra xem ảnh đã hiển thị đúng chưa

## 🧪 Test một file cụ thể

Thử mở link này trong trình duyệt:

```
https://drive.google.com/thumbnail?id=1Zi0xWmop7qroAaf0ztGU1kJvXfK6xY9f&sz=w1000
```

- ✅ Nếu thấy ảnh → Google Drive đã public, vấn đề có thể là CORS
- ❌ Nếu không thấy gì hoặc lỗi → File chưa được share công khai

## 🔧 Nếu vẫn không được

### Option 1: Upload ảnh lên dịch vụ khác

- **Imgur**: https://imgur.com (free, unlimited)
- **ImgBB**: https://imgbb.com (free)
- **Cloudinary**: https://cloudinary.com (free tier)

### Option 2: Đưa ảnh vào project

```bash
# Tạo folder public/images
mkdir -p public/images

# Copy tất cả ảnh vào đó
# Sau đó update script để dùng local images
```

## 📝 Danh sách tất cả file IDs cần check

Chạy lệnh này để lấy tất cả IDs:

```bash
grep -o "id=[^&]*" src/data/sampleData.ts | cut -d= -f2 | sort -u
```

Có tổng cộng **53 ảnh** cần được share công khai.

## 🆘 Nếu cần hỗ trợ thêm

Hãy cho tôi biết:

1. Bạn đã share files công khai chưa?
2. Khi mở link thumbnail có thấy ảnh không?
3. Console trong browser có lỗi gì không? (F12 → Console tab)
