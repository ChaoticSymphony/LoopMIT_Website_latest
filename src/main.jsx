import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// CSS imports (only once each)
// 1. Normalize, animate, etc.  
import 'normalize.css';
import './animate.css';

// 2. Bootstrap’s CSS  
import 'bootstrap/dist/css/bootstrap.min.css';

// 3. All your custom + Tailwind directives  
import './style.css';

// 4. Vendor icons, lightbox, etc.  
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css';

// 5. Bootstrap JS  
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import * as serviceWorker from './serviceWorker.js';

// App components
import Home from './Home.jsx';
import Achievements from './achievements.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider>
    <Router>
      <Routes>
        {/* React Router v6 syntax: element prop */}
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="*" element={<div>404 - Current path: {window.location.pathname}</div>} />  
      </Routes>
    </Router>
  </ThemeProvider>
);

serviceWorker.unregister();
