import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link }  from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import AnimatedBox from './components/AnimatedBox';
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

// const App = () => {
//   return (
//     <div 
//     style={{fontFamily: 'Arial, sans-serif',
//             padding: '20px'}}>
//     <h1>Zehua Cheng's Personal Website</h1>
//     <TabsWithAnimation />
//     </div>
//   )
// }

export default App;