import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import './AboutSlide.css';

function AboutSlide() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  return (
    <div className="slide about-slide" id="about">
      <ParticleBackground />
      <div className="grid-bg" />
      <motion.div
        className="about-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="about-text">
          <motion.div className="section-label" variants={itemVariants}>
            About the Event
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants}>
            Discover Open Source, One Issue at a <span style={{color: 'var(--g-blue)'}}>Time</span>
          </motion.h2>
          <motion.p className="section-body" variants={itemVariants}>
            GDG Season of Code is a <strong>community-run open source program</strong> by GDG on Campus CEC, designed to break down the barrier between writing code and contributing to real-world projects.<br /><br />
            Beginner or experienced — you'll find a project that fits. Maintainers guide you, the community supports you, and your pull requests <strong>actually matter</strong>.
          </motion.p>
        </div>

        <div className="about-visual">
          <div className="about-card-stack">
            <motion.div
              className="info-card card-c1"
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="card-icon icon-blue">🚀</div>
              <div className="card-label">Training Session</div>
              <div className="card-sub">A dedicated session on Git, GitHub, PRs, and best practices before contributions begin.</div>
            </motion.div>

            <motion.div
              className="info-card card-c2"
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="card-icon icon-red">🔥</div>
              <div className="card-label">Contribution Period</div>
              <div className="card-sub">Pick an issue, work with maintainers, and ship real code to real projects.</div>
            </motion.div>

            <motion.div
              className="info-card card-c3"
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="card-icon icon-green">🏆</div>
              <div className="card-label">Leaderboard & Recognition</div>
              <div className="card-sub">Top contributors get recognized. PRs get merged. Profiles get stronger.</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutSlide;
