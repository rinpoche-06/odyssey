import { motion } from 'framer-motion';
import './ComingSoonBar.css';

function ComingSoonBar() {
  return (
    <motion.div
      className="coming-soon-bar"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
    >
      <span className="cs-text">Coming Soon</span>
    </motion.div>
  );
}

export default ComingSoonBar;
