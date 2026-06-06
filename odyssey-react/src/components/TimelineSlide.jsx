import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import './TimelineSlide.css';

function TimelineSlide() {
  const timelineData = [
    {
      date: 'June 15, 2025',
      color: 'blue',
      title: 'Registrations Open',
      desc: 'Registration opens for contributors and maintainers. Sign up to be part of the open source journey.'
    },
    {
      date: 'Coming Soon',
      color: 'red',
      title: 'Coming Soon',
      desc: 'Stay tuned for more exciting announcements and event milestones.'
    },
    {
      date: 'Coming Soon',
      color: 'yellow',
      title: 'Coming Soon',
      desc: 'More details will be revealed as we get closer to the event kickoff.'
    },
    {
      date: 'Coming Soon',
      color: 'green',
      title: 'Coming Soon',
      desc: 'The journey continues. Keep watching this space for updates.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div className="slide timeline-slide" id="timeline">
      <ParticleBackground />
      <div className="grid-bg" />
      <motion.div
        className="timeline-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="timeline-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Programme Schedule</div>
          <h2 className="section-title">Event <span style={{color: 'var(--g-green)'}}>Timeline</span></h2>
        </motion.div>

        <div className="timeline-track">
          <div className="timeline-line" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="timeline-dot-wrap">
                  <motion.div
                    className={`timeline-dot dot-${item.color}`}
                    whileHover={{ scale: 1.6 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  />
                </div>
                <div className="timeline-body">
                  <div className={`t-date c-${item.color}`}>{item.date}</div>
                  <div className="t-title">{item.title}</div>
                  <div className="t-desc">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default TimelineSlide;
