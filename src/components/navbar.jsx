// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink,useLocation, useNavigate } from 'react-router-dom';

import { useTheme } from '../context/ThemeContext.jsx';
import logoLight from '../img/logo.png';
import logoDark from '../img/logo2.png';
import mahelogo from '../img/sponsor_pics/mahe.png';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  useEffect(() => {
  if (!isMobile) {
    setNavCollapsed(true); // reset when moving to desktop
  }
}, [isMobile]);

  // NEW: track collapse state
  const [navCollapsed, setNavCollapsed] = useState(true);

  // Handle scroll for navbar style and logo swap
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Choose logo based on theme and scroll
  const logo = darkMode
    ? logoLight
    : scrolled
      ? logoDark
      : navCollapsed?logoDark:logoDark;//Removing the light logo when scroll is on top 

  // Scroll to top handler
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  
  // Toggle collapse on hamburger click
  const toggleNavbar = () => setNavCollapsed(prev => !prev);

  // Close navbar when a link is clicked
  const closeNavbar = () => setNavCollapsed(true);
  

  return (
    <nav
      className={`navbar navbar-b  navbar-expand-md fixed-top ${
        scrolled ? 'navbar-reduce' : navCollapsed?'navbar-reduce':'navbar-reduce'
      }`} //Removing the transparent nav functionality
      id="mainNav"
    >


      <div className="container">
        {/* Logo and Home Link */}
        <button
         onClick={() => {
          scrollToTop();
          closeNavbar();
          }}
         className="navbar-brand btn p-0 border-0 bg-transparent"
          aria-label="Home"
        >
          <img src={logo} alt="Logo" style={{ maxWidth: '150px' }} />
        </button>
        

        {/* Mobile menu toggle */}
        <button
          className={`navbar-toggler ${navCollapsed ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded= {!navCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Navigation Links */}
        <div className={`navbar-collapse justify-content-center collapse ${!isMobile? 'show' : !navCollapsed?'show':''}`} id="navbarDefault">
          
          <ul className="navbar-nav">
            {/* Dark Mode Toggle Button */}
            <li className="nav-item">
              <button
                 onClick={() => { toggleDarkMode(); closeNavbar(); }}
                className="nav-link"
                style={{
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  padding: '8px 15px',
                  borderRadius: '5px',
                  color: darkMode ? '#fff' : '#000',
                  backgroundColor: darkMode ? '#333' : '#ddd'
                }}
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>

            {/* Section Links */}
            {['home', 'about', 'team', 'sponsors', 'contact'].map((section) => (
              <li key={section} className="nav-item">
                <button
                  className="nav-link btn bg-transparent border-0"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    closeNavbar();
                    if (location.pathname === '/') {
                      
                      const target = document.getElementById(section);
                      if (target) {
                        const offset = document.querySelector("nav")?.offsetHeight || 80;
                        window.scrollTo({ top: target.offsetTop - offset + 5, behavior: "smooth" });
                      }
                    } else {
                      navigate('/', { state: { scrollTo: section } });
                    }
                  }}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
            {/* Achievements */}
            <li className="nav-item">  <RouterLink to="/achievements" className="nav-link">Achievements</RouterLink>
</li>
          </ul>
        </div>

        {/* Sponsor Logo */}
        <button
          onClick={scrollToTop}
          className="navbar-brand btn p-0 border-0 bg-transparent"
          aria-label="Top"
        >
          <img src={mahelogo} alt="Sponsor Logo" style={{ maxWidth: '100px' }} />
        </button>
      </div>
    </nav>
  );
}
