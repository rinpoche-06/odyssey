# Quick Start Guide

## 🚀 Get Started in 30 Seconds

```bash
cd odyssey-react
npm run dev
```

Then open **http://localhost:5173** in your browser!

## 📁 Project Structure

```
src/
├── components/          # All React components
│   ├── Navbar.jsx       # Top navigation
│   ├── SlideNav.jsx     # Right side dots
│   ├── HeroSlide.jsx    # First slide with particles
│   ├── AboutSlide.jsx   # Second slide
│   ├── TimelineSlide.jsx # Third slide
│   ├── ComingSoonBar.jsx # Bottom bar
│   └── CustomCursor.jsx  # Custom cursor
├── App.jsx              # Main app logic
└── App.css              # Global styles
```

## 🎨 Customization Guide

### Change Colors
Edit `src/App.css`:
```css
:root {
  --g-red: #EA4335;      /* Your red */
  --g-blue: #4285F4;     /* Your blue */
  --g-green: #34A853;    /* Your green */
  --g-yellow: #FBBC04;   /* Your yellow */
}
```

### Adjust Animation Speed
In any component, find the `transition` prop:
```jsx
transition={{ duration: 0.85 }} // Make it faster: 0.5
```

### Add More Particles
In `src/components/HeroSlide.jsx`:
```javascript
for (let i = 0; i < 140; i++) // Increase to 200+
```

### Add a New Slide
1. Create `NewSlide.jsx` in `components/`
2. Import it in `App.jsx`
3. Add it to the slides track:
```jsx
<HeroSlide goToSlide={goToSlide} />
<AboutSlide />
<TimelineSlide />
<NewSlide /> {/* Add here */}
```
4. Update `totalSlides` to 4

## 🎯 Common Tasks

### Update Timeline
Edit `src/components/TimelineSlide.jsx` - modify the `timelineData` array.

### Update Hero Text
Edit `src/components/HeroSlide.jsx` - find the hero-title section.

### Change Stats
Edit `src/components/AboutSlide.jsx` - modify the stat-row section.

### Add Navigation Links
Edit `src/components/Navbar.jsx` - add items to the nav-links list.

## 🛠️ Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder. Upload it to any static hosting service:
- Vercel
- Netlify  
- GitHub Pages
- AWS S3
- Any web server

## 💡 Tips

1. **Hot Reload**: Changes appear instantly while `npm run dev` is running
2. **Component Isolation**: Each component has its own CSS file
3. **Framer Motion Docs**: [framer.com/motion](https://www.framer.com/motion/)
4. **Console**: Check browser console for any errors

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Animations not smooth?**
- Check browser hardware acceleration is enabled
- Close other heavy applications
- Update your browser

**Can't install dependencies?**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learn More

- **React**: [react.dev](https://react.dev)
- **Vite**: [vitejs.dev](https://vitejs.dev)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion)

## 🎓 Animation Examples

**Fade In:**
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
/>
```

**Slide Up:**
```jsx
<motion.div
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
/>
```

**Hover Effect:**
```jsx
<motion.div
  whileHover={{ scale: 1.05 }}
/>
```

**Stagger Children:**
```jsx
<motion.div
  variants={{
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  {items.map(item => (
    <motion.div variants={itemVariant} />
  ))}
</motion.div>
```

## Need Help?

Check `IMPROVEMENTS.md` for detailed technical documentation!
