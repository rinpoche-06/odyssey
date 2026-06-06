import { motion } from 'framer-motion';
import { useState } from 'react';
import ParticleBackground from './ParticleBackground';
import './FAQsSection.css';

function FAQsSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: 'Do I need to be an experienced developer to participate?',
      answer: 'Not at all. This event is designed for beginners. There are plenty of beginner and easy labelled issues that require no prior open source experience — just basic familiarity with code and a willingness to learn.'
    },
    {
      question: 'What do I need before I can start contributing?',
      answer: 'You need three things: a GitHub account, Git installed on your machine, and a code editor. Once set up, fork the repository you want to contribute to, clone it locally, and follow the setup instructions in the README. Make sure the project runs on your machine before picking up any issue.'
    },
    {
      question: 'What is the difference between a fork and a clone?',
      answer: 'A fork creates your own copy of the repository on GitHub. A clone downloads that copy to your local machine. You fork first, then clone your fork. Always work on your fork — never push directly to the original repository.'
    },
    {
      question: 'Can I contribute to more than one project?',
      answer: 'Yes. You can contribute to as many participating projects as you like. Just make sure you are giving each contribution proper attention. Quality over quantity always.'
    },
    {
      question: 'What if I cannot set up the project locally?',
      answer: 'Read the README and CONTRIBUTING.md carefully — most setup issues are covered there. If you are still stuck, comment on the repository with the exact error you are seeing. Maintainers and other contributors are there to help.'
    },
    {
      question: 'Can I use AI tools like ChatGPT or GitHub Copilot?',
      answer: 'AI assistance may be permitted depending on the event policy — check with the organizers. If it is allowed, you are still fully responsible for the code you submit. Maintainers may ask you to explain your implementation. Blindly pasting generated code you do not understand is not acceptable.'
    },
    {
      question: 'Can I collaborate with a friend on an issue?',
      answer: 'Issues are typically assigned to one contributor at a time. If you want to collaborate, coordinate with the maintainer first. Two people working on the same issue without coordination often leads to conflicts and duplicate work.'
    },
    {
      question: 'I am completely new to open source. Where do I begin?',
      answer: 'Start with issues labelled beginner or good first issue. Read the repository\'s README and CONTRIBUTING.md before anything else. Make sure the project runs locally, pick a small well-defined issue, and follow the contribution workflow step by step. Everyone starts somewhere — the maintainers are here to guide you.'
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <div className="slide faqs-section" id="faqs">
      <ParticleBackground />
      <div className="grid-bg" />
      
      <motion.div
        className="faqs-content-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="faqs-header-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Getting Started</div>
          <h2 className="section-title">Frequently Asked <span style={{color: 'var(--g-red)'}}>Questions</span></h2>
        </motion.div>

        <motion.div
          className="faqs-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item-section ${expandedIndex === index ? 'expanded' : ''}`}
              variants={itemVariants}
            >
              <button className="faq-question-section" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className={`chevron-section ${expandedIndex === index ? 'rotated' : ''}`}
                >
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <motion.div
                className="faq-answer-section"
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
        </motion.div>
      </motion.div>
    </div>
  );
}

export default FAQsSection;
