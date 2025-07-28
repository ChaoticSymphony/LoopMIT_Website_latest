// src/components/Preloader.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
//import './Preloader.css'; // CSS for fade-out animation

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  useEffect(() => {
    // Reset loader on every route change
    setLoaded(false);

    //I have set an artificial timer for 0.1 second, if the DOM takes more than 0.1 second to load then A "flash" of white space or A partially loaded page will be shown to the user
    // Set timeout to simulate loading (you can adjust duration)
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); // show loader for 0.1 second

    // Cleanup if component unmounts early
    return () => clearTimeout(timer);
  }, [location.pathname]); // Re-run on every route change
  if (loaded) {
    // Once loaded, remove preloader from render tree
    return null;
  }
  console.log(loaded)
  return (
    <div id="preloader" className={loaded ? 'fadeOut' : 'fadeIn'} />
  );
}
