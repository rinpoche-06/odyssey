import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSlide from './components/HeroSlide';
import AboutSlide from './components/AboutSlide';
import TimelineSlide from './components/TimelineSlide';
import ComingSoonBar from './components/ComingSoonBar';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app" ref={containerRef}>
      <CustomCursor />
      <Navbar scrollToSection={scrollToSection} />
      
      <div className="content-wrapper">
        <HeroSlide scrollToSection={scrollToSection} />
        <AboutSlide />
        <TimelineSlide />
      </div>

      <ComingSoonBar />
    </div>
  );
}

export default App;
