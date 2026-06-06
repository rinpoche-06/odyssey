import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import './ResourcesSection.css';

function ResourcesSection() {
  const steps = [
    {
      number: '1',
      title: 'Browse open issues',
      desc: 'Explore the repository\'s issue list. Use labels like beginner, good first issue, and help wanted to find the right starting point.'
    },
    {
      number: '2',
      title: 'Request assignment required',
      desc: 'Comment on the issue to request it. Never start work before a maintainer has assigned the issue to you.'
    },
    {
      number: '3',
      title: 'Fork, clone, and branch',
      desc: 'Fork the repo, clone your fork locally, and create a new branch. Never commit directly to main. Use the format: type/short-description'
    },
    {
      number: '4',
      title: 'Work on the issue',
      desc: 'Make your changes. Keep them scoped to the issue only. Do not touch unrelated files or refactor code outside your task.'
    },
    {
      number: '5',
      title: 'Open a pull request',
      desc: 'Push your branch, open a PR, and link the issue using Closes #issue-number. Write a clear description of what you changed and why.'
    },
    {
      number: '6',
      title: 'Respond to review',
      desc: 'Address all reviewer comments. Push updates to the same branch. Reply to each comment once resolved. Do not open a new PR.'
    },
    {
      number: '7',
      title: 'PR merged',
      desc: 'Once approved, the maintainer will merge your PR. Your contribution counts!'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <div className="slide resources-section" id="resources">
      <ParticleBackground />
      <div className="grid-bg" />
      
      <motion.div
        className="resources-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="resources-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Contribution Guide</div>
          <h2 className="section-title">How <span style={{color: 'var(--g-blue)'}}>Contributions</span> Work</h2>
        </motion.div>

        <motion.div
          className="resources-steps"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="resource-step"
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="step-number-badge">{step.number}</div>
              <div className="step-body">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ResourcesSection;
