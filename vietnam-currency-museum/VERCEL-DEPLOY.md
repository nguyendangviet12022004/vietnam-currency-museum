# 🚀 Deploy lên Vercel - Hướng dẫn nhanh

## Bước 1: Push code lên GitHub

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

## Bước 2: Deploy trên Vercel

### Cách 1: Import từ GitHub (Khuyến nghị ✅)

1. Vào https://vercel.com/new
2. Chọn "Import Git Repository"
3. Chọn repository `vietnam-currency-museum`
4. Click "Deploy" (không cần thay đổi gì!)

### Cách 2: Deploy từ CLI

```bash
# Cài Vercel CLI (chỉ cần 1 lần)
npm i -g vercel

# Deploy
vercel

# Deploy production
vercel --prod
```

## Bước 3: Kiểm tra

1. Mở URL được cung cấp (vd: `https://vietnam-currency-museum.vercel.app`)
2. Click vào các timeline items
3. Kiểm tra ảnh hiển thị đúng
4. Test các modal và animations

## ✅ Đã fix gì?

- ✅ **Đường dẫn ảnh**: `/images/...` - đúng format cho Vercel
- ✅ **51 ảnh**: Tự động copy từ `public/images/` → `dist/images/`
- ✅ **SPA Routing**: Tất cả routes đều hoạt động
- ✅ **Cache**: Ảnh và assets được cache 1 năm (tốc độ cao)
- ✅ **Build**: Optimize với code splitting
- ✅ **No errors**: 0 vulnerabilities, TypeScript clean

## 🎉 Xong!

Sau khi deploy, site của bạn sẽ online tại:

```
https://vietnam-currency-museum.vercel.app
```

Mọi thay đổi push lên GitHub sẽ tự động deploy! 🔄

---

📖 **Chi tiết hơn**: Xem file `DEPLOYMENT.md`
🐛 **Gặp vấn đề**: Xem file `VERCEL-FIX-SUMMARY.md`
