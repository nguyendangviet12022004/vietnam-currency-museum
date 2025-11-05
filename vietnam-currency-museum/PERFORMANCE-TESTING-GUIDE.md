# ⚡ Performance Testing Guide

## Quick Performance Check

### Chrome DevTools Method

1. **Open DevTools**

   - Press `F12` or `Ctrl+Shift+I` (Linux/Windows)
   - Or right-click → Inspect

2. **Open Performance Tab**

   - Click on "Performance" tab
   - Click the record button (circle icon)

3. **Interact with the Page**

   - Scroll through timeline cards
   - Hover over buttons and cards
   - Open and close modals
   - Switch between images
   - Use the search filter
   - Toggle language

4. **Stop Recording**

   - Click the stop button
   - Wait for analysis to complete

5. **Check Results**
   - **FPS Graph**: Should show steady green line at 60fps
   - **Main Thread**: Should not have long yellow/red bars (< 50ms tasks)
   - **Frames**: Look for dropped frames (should be minimal)

### What to Look For

#### ✅ Good Performance Indicators:

- FPS stays at 60 (green line at top)
- No long tasks (yellow/red bars > 50ms)
- Smooth scrolling
- No jank during animations
- Fast paint times (< 16ms per frame)

#### ⚠️ Warning Signs:

- FPS drops below 60
- Long tasks (> 50ms)
- Stuttering during scroll
- Delayed button feedback
- Heavy recalculate style operations

---

## Performance Metrics

### Target Metrics:

- **FPS**: 60fps (16.67ms per frame)
- **First Paint**: < 100ms
- **Time to Interactive**: < 500ms
- **Animation Frame Budget**: < 16ms
- **Scroll Response**: Instant (< 100ms)

---

## Animation Performance Checklist

### GPU-Accelerated Properties (✅ Using):

- ✅ `transform` (translate, scale, rotate)
- ✅ `opacity`
- ✅ `filter` (blur, brightness, contrast)

### CPU-Heavy Properties (❌ Avoiding):

- ❌ `width` / `height`
- ❌ `top` / `left` / `margin`
- ❌ `background-size` (using background-position instead)
- ❌ `box-shadow` on animation (set once on hover)

---

## Browser Testing

### Recommended Browsers:

1. **Chrome/Edge** (Chromium) - Primary
2. **Firefox** - Secondary
3. **Safari** - macOS/iOS testing

### Test Scenarios:

#### 1. Scroll Performance

```
Action: Scroll through entire timeline
Expected: Smooth 60fps, cards fade in smoothly
```

#### 2. Card Hover

```
Action: Hover over multiple cards quickly
Expected: Instant response, no lag, smooth 3D transform
```

#### 3. Button Interactions

```
Action: Click "Xem chi tiết" button
Expected: Immediate loading state, smooth modal entrance
```

#### 4. Modal Navigation

```
Action: Click next/prev arrows rapidly
Expected: Smooth image transitions, no lag
```

#### 5. Background Animation

```
Action: Let page idle for 30 seconds
Expected: Smooth gradient flow, no stuttering
```

---

## Performance Optimization Techniques Used

### 1. Transform & Opacity Only

All animations use GPU-accelerated properties:

```css
/* ✅ Good - GPU accelerated */
transform: translateY(-8px) scale(1.02) rotateX(2deg);
opacity: 1;
filter: blur(0);

/* ❌ Bad - Forces layout/paint */
margin-top: -8px;
width: 102%;
background-size: 100%;
```

### 2. Will-Change Hints

Implicitly set on frequently animated elements:

```css
.modal-image img {
  will-change: transform, opacity;
}
```

### 3. CSS Containment

Used for layout isolation:

```css
.timeline-content {
  contain: content;
}
```

### 4. RequestAnimationFrame

Used for smooth modal opening:

```javascript
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    setSelectedData({ period, timeline });
  });
});
```

### 5. Image Optimization

- Async decoding: `decoding="async"`
- High priority: `fetchPriority="high"`
- Intrinsic sizes: `width` and `height` attributes
- Preloading: Adjacent images loaded in advance

### 6. Removed Expensive Effects

- ❌ Removed `backdrop-filter: blur()` from modal overlay
- ✅ Using solid `rgba()` colors instead

---

## Manual Testing Steps

### 1. Visual Smoothness Test

1. Open http://localhost:5173/
2. Scroll slowly from top to bottom
3. Verify cards fade in smoothly as you scroll
4. No stuttering or jank

### 2. Hover Effects Test

1. Hover over each timeline card
2. Check for:
   - Smooth 3D tilt effect
   - Shine animation sweeps across
   - Image scales and rotates slightly
   - Shadows enhance smoothly

### 3. Button Feedback Test

1. Click "Xem chi tiết" button
2. Verify:
   - Spinner appears immediately
   - "Đang mở..." text shows
   - Modal opens smoothly after ~300ms

### 4. Modal Animation Test

1. Open modal (click card)
2. Verify entrance:
   - Scales up from 0.9 to 1
   - Rotates from 10deg to 0deg
   - Blur fades from 8px to 0
   - Translates from 30px below to 0
3. Close modal (X button)
4. Verify exit:
   - Scales down to 0.95
   - Rotates to -5deg
   - Blur to 4px
   - Translates up -20px

### 5. Image Gallery Test

1. Open modal with multiple images
2. Click next/prev arrows
3. Verify:
   - Smooth transitions
   - No loading delay (preloaded)
   - Zoom on hover works

### 6. Background Animation Test

1. Let page sit idle
2. Watch gradient flow animation
3. Watch floating particles
4. Verify smooth continuous motion

---

## Performance Tips

### If Performance Issues Occur:

1. **Reduce Animation Duration**

   - Lower `animation-duration` values
   - Simplify complex animations

2. **Add Will-Change Sparingly**

   ```css
   .heavy-element:hover {
     will-change: transform;
   }
   ```

3. **Reduce Blur Effects**

   - Lower blur radius values
   - Remove unnecessary blur filters

4. **Optimize Images**

   - Convert to WebP format
   - Compress image files
   - Use appropriate sizes

5. **Disable Heavy Effects on Mobile**
   ```css
   @media (max-width: 768px) {
     /* Disable complex animations */
   }
   ```

---

## Expected Results

### Desktop (High-End):

- ✅ All animations at solid 60fps
- ✅ No dropped frames
- ✅ Smooth scrolling
- ✅ Instant feedback

### Desktop (Mid-Range):

- ✅ Most animations at 60fps
- ✅ Occasional minor drops acceptable
- ✅ Generally smooth experience

### Mobile (Modern):

- ✅ 60fps for most interactions
- ✅ Smooth scrolling
- ⚠️ Some effects may be reduced

---

## Monitoring in Production

### Recommended Tools:

1. **Chrome Lighthouse** - Overall performance score
2. **WebPageTest** - Detailed metrics
3. **Google Analytics** - Real user metrics
4. **Sentry** - Error tracking

### Key Metrics to Track:

- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.8s

---

## Conclusion

All visual effects in this project are designed with performance as a top priority:

- ✅ GPU-accelerated animations
- ✅ No layout thrashing
- ✅ Optimized image loading
- ✅ Smooth 60fps target
- ✅ Instant user feedback

**Result**: High visual impact with high performance! 🚀

---

_Last Updated: 2025_
_Target FPS: 60_
_Status: ✅ Optimized_
