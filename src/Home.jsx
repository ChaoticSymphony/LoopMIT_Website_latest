import React from 'react'
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
//import components
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Sponsors from './components/sponsor.jsx';
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';
import Preloader from './components/preloader';


const Home = () => {
  const location = useLocation();
useEffect(() => {
  const scrollTo = location.state?.scrollTo;
  if (scrollTo) {
    const target = document.getElementById(scrollTo);
    if (target) {
      const offset = document.querySelector("nav")?.offsetHeight || 80;
      setTimeout(() => {
        window.scrollTo({ top: target.offsetTop - offset + 5, behavior: "smooth" });
      }, 1000);
    }
  }
  console.log(location.state)
}, [location]);

  return (
    <div>
      <Navbar />
        <Intro />
        <About />
        <Portfolio />
        <Sponsors/>
        <Contact />
        <BackToTop />
        <Preloader />
    </div>
  )
}

export default Home
