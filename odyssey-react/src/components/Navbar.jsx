import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar({ scrollToSection }) {
  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="navbar"
    >
      <div className="nav-logo">
        <div className="gdg-dots">
          <motion.span
            className="d1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          />
          <motion.span
            className="d2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
          />
          <motion.span
            className="d3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
          />
          <motion.span
            className="d4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          />
        </div>
        <span>GDG on Campus CEC</span>
      </div>
      
      <ul className="nav-links">
        <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
        <li><a href="#timeline" onClick={(e) => { e.preventDefault(); scrollToSection('timeline'); }}>Timeline</a></li>
        <li><a href="#resources" onClick={(e) => { e.preventDefault(); scrollToSection('resources'); }}>Resources</a></li>
        <li><a href="#faqs" onClick={(e) => { e.preventDefault(); scrollToSection('faqs'); }}>FAQs</a></li>
      </ul>
      
      <div className="nav-pill">
        <motion.button
          className="pill-btn pill-solid"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register
        </motion.button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
