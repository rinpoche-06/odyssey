import { motion } from 'framer-motion';
import './SlideNav.css';

function SlideNav({ currentSlide, goToSlide, totalSlides }) {
  return (
    <motion.div
      className="slide-nav"
      initial={{ x: 32, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {[...Array(totalSlides)].map((_, i) => (
        <motion.button
          key={i}
          className={`dot-nav ${currentSlide === i ? 'active' : ''}`}
          onClick={() => goToSlide(i)}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: currentSlide === i ? 1.4 : 1,
            opacity: currentSlide === i ? 1 : 0.5
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      ))}
    </motion.div>
  );
}

export default SlideNav;
