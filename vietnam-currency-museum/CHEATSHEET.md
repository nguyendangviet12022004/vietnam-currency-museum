# 🔧 Developer Cheatsheet

## 📦 Project Commands

```bash
# Development
npm run dev              # Start dev server (localhost:5173)
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Run ESLint

# Installation
npm install             # Install all dependencies
npm install prop-types  # Fix timeline component dependency
```

## 📁 Project Structure Cheatsheet

```
src/
├── components/         # React components
│   ├── Header          # Top header with logo & language
│   ├── FileUpload      # Excel upload button
│   ├── SearchFilter    # Search & filter controls
│   ├── Timeline        # Main timeline component
│   └── PeriodModal     # Detail modal
├── hooks/              # Custom React hooks
│   ├── useLanguage     # Language state management
│   └── useCurrencyData # Data & filter management
├── types/              # TypeScript definitions
├── utils/              # Utility functions
│   └── excelReader     # Excel parsing logic
├── data/               # Static data
│   └── sampleData      # Default timeline data
└── assets/             # Images, icons, etc.
```

## 🎨 Key Components API

### Header

```tsx
<Header
  language="vi" | "en"
  onLanguageToggle={() => void}
/>
```

### FileUpload

```tsx
### SearchFilter
```

### SearchFilter

```tsx
<SearchFilter
  filters={FilterOptions}
  onFilterChange={(filters: FilterOptions) => void}
  onReset={() => void}
  language="vi" | "en"
/>
```

### Timeline

```tsx
<Timeline
  data={CurrencyPeriod[]}
  language="vi" | "en"
/>
```

### PeriodModal

```tsx
<PeriodModal
  period={CurrencyPeriod}
  language="vi" | "en"
  onClose={() => void}
/>
```

## 🪝 Custom Hooks Usage

### useLanguage

```typescript
const {
  language, // 'vi' | 'en'
  setLanguage, // (lang: Language) => void
  toggleLanguage, // () => void
  t, // (vi: string, en?: string) => string
} = useLanguage();

// Usage
const text = t("Xin chào", "Hello");
```

### useCurrencyData

```typescript
const {
  data, // Original data
  filteredData, // Filtered results
  filters, // Current filter state
  applyFilters, // (filters: FilterOptions) => void
  resetFilters, // () => void
} = useCurrencyData(initialData);
```

## 📊 Data Types

### CurrencyPeriod

```typescript
interface CurrencyPeriod {
  stt: number; // Order number
  period: string; // Period name
  timeRange: string; // Time range (e.g., "1009-1225")
  startYear?: number; // Start year
  endYear?: number; // End year
  image: string; // Image URL
  description: string; // Vietnamese description
  descriptionEn?: string; // English description
}
```

### FilterOptions

```typescript
interface FilterOptions {
  searchTerm: string; // Search keyword
  startYear?: number; // Filter from year
  endYear?: number; // Filter to year
}
```

### Language

```typescript
type Language = "vi" | "en";
```

## 🎨 CSS Variables

```css
:root {
  /* Primary Colors */
  --color-primary: #daa520; /* Gold */
  --color-primary-dark: #b8860b; /* Dark goldenrod */

  /* Secondary Colors */
  --color-secondary: #8b4513; /* Saddle brown */
  --color-secondary-dark: #654321; /* Dark brown */

  /* Background */
  --color-background: #fff8dc; /* Cornsilk */

  /* Text */
  --color-text: #333; /* Dark gray */
  --color-text-light: #666; /* Medium gray */
  --color-text-muted: #8b7355; /* Tan */
}
```

## 🔧 Utility Functions

### Excel Reader

## 🎯 Common Tasks

## 🎯 Common Tasks

### Add New Period to Sample Data

```typescript
// src/data/sampleData.ts
export const sampleCurrencyData: CurrencyPeriod[] = [
  {
    stt: 14,
    period: "New Period",
    timeRange: "2025 - 2030",
    startYear: 2025,
    endYear: 2030,
    image: "https://example.com/image.jpg",
    description: "Description in Vietnamese",
    descriptionEn: "Description in English",
  },
  // ... existing data
];
```

### Change Theme Colors

```css
/* src/index.css */
:root {
  --color-primary: #YOUR_COLOR;
  --color-secondary: #YOUR_COLOR;
}
```

### Add New Language

```typescript
// 1. Update type
type Language = "vi" | "en" | "fr"; // Add 'fr'

// 2. Update useLanguage hook
const languages = ["vi", "en", "fr"] as const;

// 3. Add translations
const text = t("Vietnamese", "English", "French");
```

## 🐛 Common Issues & Fixes

### Issue: "Cannot find module 'prop-types'"

```bash
npm install prop-types
```

### Issue: Images not loading

```typescript
// Add error handler
<img
  src={image}
  onError={(e) => {
    e.currentTarget.src = "fallback-image-url";
  }}
/>
```

### Issue: Excel file not parsing

- Check file extension (.xlsx or .xls)
- Verify column structure matches format
- Check for empty rows
- Ensure header row exists

### Issue: Filter not working

- Check if startYear/endYear exist in data
- Verify timeRange format contains years
- Check search term matches lowercase

## 📝 Code Snippets

### Create New Component

```typescript
import "./ComponentName.css";

interface ComponentProps {
  prop1: string;
  prop2: number;
}

export const ComponentName = ({ prop1, prop2 }: ComponentProps) => {
  return <div className="component-name">{/* Component JSX */}</div>;
};
```

### Add Animation

```typescript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  {/* Content */}
</motion.div>;
```

### Conditional Rendering

```typescript
{
  condition && <Component />;
}
{
  condition ? <ComponentA /> : <ComponentB />;
}
```

## 🚀 Performance Tips

```typescript
// 1. Memoize expensive computations
const filtered = useMemo(() =>
  data.filter(item => /* filter logic */),
  [data, filterDeps]
);

// 2. Prevent unnecessary re-renders
const Component = memo(({ prop }) => {
  // Component logic
});

// 3. Lazy load images
<img loading="lazy" src={image} />

// 4. Debounce search
const debouncedSearch = useDebounce(searchTerm, 300);
```

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 480px) {
}

/* Tablet */
@media (max-width: 768px) {
}

/* Desktop */
@media (max-width: 1200px) {
}
```

## 🔗 Important URLs

- Dev Server: http://localhost:5173
- Vite Docs: https://vitejs.dev
- React Docs: https://react.dev
- TypeScript: https://typescriptlang.org
- Framer Motion: https://framer.com/motion

## 🎓 Learning Resources

- React Hooks: https://react.dev/reference/react
- TypeScript Handbook: https://typescriptlang.org/docs
- CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid
- Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox

---

💡 **Pro Tip**: Bookmark this file for quick reference!
