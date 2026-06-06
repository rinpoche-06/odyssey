import { motion } from 'framer-motion';
import './ContributionGuidelines.css';

function ContributionGuidelines({ isOpen, onClose }) {
  if (!isOpen) return null;

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

  return (
    <motion.div
      className="guidelines-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="guidelines-modal"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="guidelines-header">
          <h2>How Contributions Work</h2>
          <button className="close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="guidelines-content">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="guideline-step"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ContributionGuidelines;
