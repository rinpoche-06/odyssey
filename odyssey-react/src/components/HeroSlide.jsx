import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import './HeroSlide.css';

function HeroSlide({ scrollToSection }) {
  return (
    <div className="slide hero-slide" id="hero">
      <ParticleBackground />
      <div className="grid-bg" />
      
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          className="season-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="pulse-dot" />
          Open Source · Now Accepting Projects
        </motion.div>
        
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="word-gdg">GDG</span><br />
          <span className="word-season">Season</span>
          <span className="word-of"> of </span>
          <span className="word-code">Code</span>
        </motion.h1>
        
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Build. Contribute. <em>Ship.</em><br />
          Your first open source contribution starts here.
        </motion.p>
        
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.a
            href="#about"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore the Event
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
          <motion.a
            href="#"
            className="btn-outline"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="scroll-hint"
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.5, duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <span>scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M8 2v12M4 10l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </div>
  );
}

export default HeroSlide;
