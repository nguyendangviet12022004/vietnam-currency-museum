# Vietnam Currency Museum - Deployment Guide

## 🚀 Deploy to Vercel

### Quick Deploy

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Manual Configuration

If needed, use these settings:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Environment Variables

No environment variables required for basic deployment.

## 📁 Project Structure

```
vietnam-currency-museum/
├── public/
│   └── images/          # 51 currency images
├── src/
│   ├── components/      # React components
│   ├── data/           # Currency data
│   └── types/          # TypeScript types
├── dist/               # Build output (auto-generated)
├── vercel.json         # Vercel configuration
└── vite.config.ts      # Vite configuration
```

## ✅ Pre-deployment Checklist

- [x] Images in `/public/images/` (51 files)
- [x] Image paths use `/images/...` format
- [x] Vite config has correct base path
- [x] vercel.json for SPA routing
- [x] Build succeeds locally
- [x] No TypeScript errors
- [x] 0 npm vulnerabilities

## 🔧 Build Information

- **Build time**: ~2s
- **Bundle sizes**:
  - react-vendor: 12.32 kB (gzipped)
  - animation: 121.22 kB (gzipped)
  - timeline: 8.50 kB (gzipped)
  - main: 244.95 kB (gzipped)
- **Total images**: 51 files (auto-copied to dist/)

## 🌐 After Deployment

Your site will be available at: `https://your-project.vercel.app`

All images will be accessible at: `https://your-project.vercel.app/images/[filename]`

## 🐛 Troubleshooting

If images don't load:

1. Check browser console for 404 errors
2. Verify images exist in `/public/images/`
3. Ensure paths in `sampleData.ts` match actual filenames
4. Clear Vercel cache and redeploy

## 📝 Notes

- Images are served from `/public/images/` → deployed to `/images/`
- SPA routing handled by `vercel.json` rewrites
- Cache headers set for optimal performance
- All modern browsers supported
