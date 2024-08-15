import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Research from './components/Research';
import Projects from './components/Project';
import Photography from './components/Photography';

// import './App.css';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;