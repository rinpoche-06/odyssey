import { motion } from 'framer-motion';
import { useState } from 'react';
import './FAQs.css';

function FAQs({ isOpen, onClose }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!isOpen) return null;

  const faqs = [
    {
      category: 'Getting Started',
      question: 'Do I need to be an experienced developer to participate?',
      answer: 'Not at all. This event is designed for beginners. There are plenty of beginner and easy labelled issues that require no prior open source experience — just basic familiarity with code and a willingness to learn.'
    },
    {
      category: 'Getting Started',
      question: 'What do I need before I can start contributing?',
      answer: 'You need three things: a GitHub account, Git installed on your machine, and a code editor. Once set up, fork the repository you want to contribute to, clone it locally, and follow the setup instructions in the README. Make sure the project runs on your machine before picking up any issue.'
    },
    {
      category: 'Getting Started',
      question: 'What is the difference between a fork and a clone?',
      answer: 'A fork creates your own copy of the repository on GitHub. A clone downloads that copy to your local machine. You fork first, then clone your fork. Always work on your fork — never push directly to the original repository.'
    },
    {
      category: 'Getting Started',
      question: 'Can I contribute to more than one project?',
      answer: 'Yes. You can contribute to as many participating projects as you like. Just make sure you are giving each contribution proper attention. Quality over quantity always.'
    },
    {
      category: 'Getting Started',
      question: 'What if I cannot set up the project locally?',
      answer: 'Read the README and CONTRIBUTING.md carefully — most setup issues are covered there. If you are still stuck, comment on the repository with the exact error you are seeing. Maintainers and other contributors are there to help.'
    },
    {
      category: 'Getting Started',
      question: 'Can I use AI tools like ChatGPT or GitHub Copilot?',
      answer: 'AI assistance may be permitted depending on the event policy — check with the organizers. If it is allowed, you are still fully responsible for the code you submit. Maintainers may ask you to explain your implementation. Blindly pasting generated code you do not understand is not acceptable.'
    },
    {
      category: 'Getting Started',
      question: 'Can I collaborate with a friend on an issue?',
      answer: 'Issues are typically assigned to one contributor at a time. If you want to collaborate, coordinate with the maintainer first. Two people working on the same issue without coordination often leads to conflicts and duplicate work.'
    },
    {
      category: 'Getting Started',
      question: 'I am completely new to open source. Where do I begin?',
      answer: 'Start with issues labelled beginner or good first issue. Read the repository\'s README and CONTRIBUTING.md before anything else. Make sure the project runs locally, pick a small well-defined issue, and follow the contribution workflow step by step. Everyone starts somewhere — the maintainers are here to guide you.'
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div
      className="faqs-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="faqs-modal"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="faqs-header">
          <h2>Frequently Asked Questions</h2>
          <button className="close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="faqs-content">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className={`chevron ${expandedIndex === index ? 'rotated' : ''}`}
                >
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <motion.div
                className="faq-answer"
                initial={false}
                animate={{
                  height: expandedIndex === index ? 'auto' : 0,
                  opacity: expandedIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default FAQs;
