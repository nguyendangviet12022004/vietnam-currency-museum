# 🐛 Vercel Deployment Troubleshooting

## ❌ Error: "react-scripts: command not found"

### Vấn đề:
```
sh: line 1: react-scripts: command not found
Error: Command "react-scripts build" exited with 127
```

### Nguyên nhân:
Vercel tự động detect framework sai, nghĩ project dùng Create React App (`react-scripts`) thay vì Vite.

### ✅ Giải pháp:
**Fix `vercel.json`:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": null,  // ← Set null để Vercel không auto-detect
  "routes": [         // ← Dùng "routes" thay vì "rewrites"
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Thay đổi chính:
1. ✅ `"framework": null` - Tắt auto-detection
2. ✅ `"routes"` thay vì `"rewrites"` - Syntax đúng của Vercel
3. ✅ `"buildCommand": "npm run build"` - Chạy script từ package.json
4. ✅ Removed `"devCommand"` - Không cần thiết

---

## 🚀 Sau khi fix:

Vercel sẽ chạy:
```bash
npm install           # Cài dependencies
npm run build         # Chạy: tsc -b && vite build
# → Output vào dist/
```

## ✅ Verify Build Success:

Khi deploy thành công, bạn sẽ thấy:
```
✓ Building...
✓ Compiled successfully
✓ Deploying...
✓ Deployment Complete
```

---

## 📝 Notes:

- **Project này dùng Vite**, không phải Create React App
- **Build command**: `tsc -b && vite build` (từ package.json)
- **Output**: `dist/` directory
- **Framework detection**: Disabled để tránh conflict

## 🔗 Related:
- Vercel Config Docs: https://vercel.com/docs/projects/project-configuration
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html
