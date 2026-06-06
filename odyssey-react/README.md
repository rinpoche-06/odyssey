# GDG Season of Code - React + Vite Landing Page

A modern, animated landing page built with React, Vite, and Framer Motion for the GDG Season of Code event.

## Features

✨ **Smooth Animations**
- Framer Motion for fluid page transitions and micro-interactions
- Custom particle system with anti-gravity effects
- Staggered animations for content reveal
- Spring physics for natural motion

🎨 **Modern Design**
- Google Design System inspired color palette
- Custom cursor with blend mode effects
- Responsive grid backgrounds
- Glassmorphism effects

🚀 **Performance**
- Built with Vite for lightning-fast development
- Optimized animations with `will-change` properties
- Efficient particle system using Canvas API
- Component-based architecture for better code splitting

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **CSS3** - Styling with custom properties

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd odyssey-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
odyssey-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with animated logo
│   │   ├── SlideNav.jsx        # Slide navigation dots
│   │   ├── HeroSlide.jsx       # Hero section with particle system
│   │   ├── AboutSlide.jsx      # About section with stats
│   │   ├── TimelineSlide.jsx   # Event timeline
│   │   ├── ComingSoonBar.jsx   # Bottom announcement bar
│   │   └── CustomCursor.jsx    # Custom cursor effect
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global styles
│   └── main.jsx                # Entry point
└── package.json
```

## Animation Highlights

### Page Transitions
- Smooth vertical sliding between sections
- Easing: `cubic-bezier(0.77, 0, 0.175, 1)`
- Duration: 850ms

### Particle System
- 140+ animated particles with Google colors
- Anti-gravity effect that repels particles from cursor
- Spring physics for natural return-to-origin behavior
- Dynamic line connections between nearby particles

### Component Animations
- **Navbar**: Slide down with staggered logo dots
- **Hero Content**: Fade in with upward motion
- **About Cards**: Scale and position animation with hover effects
- **Timeline Items**: Staggered reveal with hover interactions
- **Buttons**: Scale and lift on hover with spring physics

## Customization

### Colors
Edit the CSS variables in `src/App.css`:
```css
:root {
  --g-red: #EA4335;
  --g-blue: #4285F4;
  --g-green: #34A853;
  --g-yellow: #FBBC04;
}
```

### Animation Speed
Adjust transition durations in component files:
```jsx
transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
```

### Particle Count
Modify particle count in `HeroSlide.jsx`:
```javascript
for (let i = 0; i < 140; i++) particles.push(new Particle());
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance Tips

1. The particle system only runs on the hero slide
2. Animations use GPU acceleration via `will-change`
3. Components use `viewport={{ once: true }}` to animate only on first view
4. Spring animations are optimized with appropriate stiffness and damping values

## License

MIT License - feel free to use this for your own projects!

## Credits

Design inspired by Google Design System
Built for GDG on Campus CEC
