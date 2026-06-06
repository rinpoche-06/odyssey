# 📋 Quick Reference Card

## 🚀 Commands

```bash
# Development
cd odyssey-react
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build

# Other
npm install              # Install dependencies
npm update               # Update packages
```

## 🌐 URLs

- **Dev Server:** http://localhost:5173
- **Preview:** http://localhost:4173 (after `npm run preview`)

## 📁 File Structure

```
src/
├── App.jsx              # Main app, slide system
├── App.css              # Global styles, CSS variables
├── index.css            # Base styles
├── main.jsx             # React entry point
└── components/
    ├── Navbar.jsx       # Top navigation (Home, About, etc.)
    ├── SlideNav.jsx     # Right side dots (1, 2, 3)
    ├── HeroSlide.jsx    # Slide 1: Hero + particles
    ├── AboutSlide.jsx   # Slide 2: Event details + cards
    ├── TimelineSlide.jsx # Slide 3: Timeline
    ├── ComingSoonBar.jsx # Bottom announcement bar
    └── CustomCursor.jsx  # Custom cursor component
```

## 🎨 Quick Edits

### Change Colors
**File:** `src/App.css`
```css
:root {
  --g-red: #EA4335;      /* Your red */
  --g-blue: #4285F4;     /* Your blue */
  --g-green: #34A853;    /* Your green */
  --g-yellow: #FBBC04;   /* Your yellow */
}
```

### Change Text
**Hero:** `src/components/HeroSlide.jsx`
**About:** `src/components/AboutSlide.jsx`
**Timeline:** `src/components/TimelineSlide.jsx`

### Adjust Animation Speed
Find `transition={{ duration: X }}` and change `X`
- Faster: 0.4-0.6
- Current: 0.85
- Slower: 1.0-1.5

### Change Particles
**File:** `src/components/HeroSlide.jsx`
```javascript
for (let i = 0; i < 140; i++) // Change number
```

## 🎯 Common Animations

### Fade In
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
```

### Slide Up
```jsx
<motion.div
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
>
```

### Hover Scale
```jsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

### Stagger Children
```jsx
<motion.div
  variants={{
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  }}
>
```

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port in use | `npm run dev -- --port 3000` |
| Animations laggy | Enable hardware acceleration |
| Module not found | `npm install` |
| Changes not showing | Check browser console, restart dev server |
| Build errors | `rm -rf node_modules && npm install` |

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "framer-motion": "^11.x",
  "vite": "^5.x"
}
```

## ⌨️ Keyboard Shortcuts

**In Browser:**
- `↑` / `↓` - Navigate slides
- `F12` - Open DevTools
- `Ctrl+Shift+R` - Hard reload

**In VS Code:**
- `Ctrl+P` - Quick file open
- `Ctrl+Shift+F` - Search in files
- `F2` - Rename symbol

## 🎨 CSS Variables

```css
--g-red      /* #EA4335 - Red accent */
--g-blue     /* #4285F4 - Primary */
--g-green    /* #34A853 - Success */
--g-yellow   /* #FBBC04 - Highlight */
--bg         /* #0a0a0a - Background */
--surface    /* #111111 - Cards */
--surface2   /* #1a1a1a - Elevated */
--text       /* #ffffff - Text */
--text-muted /* #888888 - Secondary text */
--border     /* rgba(255,255,255,0.08) */
```

## 🎭 Component Props

### App.jsx
- `currentSlide` - Active slide index (0, 1, 2)
- `goToSlide(n)` - Navigate to slide n

### Each Slide
- `goToSlide` - Function to navigate

### SlideNav
- `currentSlide` - Current slide
- `goToSlide` - Navigate function
- `totalSlides` - Number of slides

## 📊 Performance Targets

- **FPS:** 60 consistently
- **Load Time:** <2s (Fast 3G)
- **First Paint:** <1s
- **Bundle Size:** ~50KB gzipped

## 🔗 Useful Links

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Framer Motion](https://framer.com/motion)
- [MDN Web Docs](https://developer.mozilla.org)

## 💡 Tips

1. Keep dev server running while coding
2. Use `console.log()` for debugging
3. Check browser console for errors
4. Install React DevTools extension
5. Use `viewport={{ once: true }}` for scroll animations
6. Hardware acceleration: `will-change: transform`

## 🚀 Deploy Checklist

- [ ] Run `npm run build`
- [ ] Test the `dist/` folder locally
- [ ] Check all links work
- [ ] Test on mobile
- [ ] Verify animations are smooth
- [ ] Check console for errors
- [ ] Upload to hosting

## 🎯 Quick Test

After changes, test these:
1. ✓ Scroll between all 3 slides
2. ✓ Hover all buttons
3. ✓ Move mouse in hero (particles)
4. ✓ Click navigation dots
5. ✓ Keyboard navigation (↑↓)
6. ✓ Check mobile view

---

**Need more details?** Check the other documentation files!
