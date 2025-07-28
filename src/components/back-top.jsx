// src/components/BackToTop.jsx
import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
//import './BackToTop.css'; // Import your fadeIn/fadeOut animations here

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 100);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top
  const onClick = () => {
    scroll.scrollToTop({ duration: 1500, smooth: 'easeInOutQuart' });
  };

  return (
    <button
      className={`back-to-top animated ${visible ? 'fadeIn' : 'fadeOut'}`}
      style={{ display: visible ? 'block' : 'none' }}
      onClick={onClick}
      aria-label="Back to top"
    >
      <i className="fa fa-chevron-up " />
    </button>
  );
}
