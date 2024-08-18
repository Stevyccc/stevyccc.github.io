import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import FrontAnimation from './FrontAnimation';
import NavBar from './NavBar';
import Footer from './Footer';
import '../Home.css'; 

const Home = () => {
  return (
    <div className="portfolio-container">
      <NavBar /> 
      <main className="main-content">
        <div className="text-content">
          <h1 className="name surfing-capital-font">Zehua Cheng</h1>
          <p className="subtitle">(Or, Steve)</p>
          <p className="description">I'm a mathematical finance student based in NYC, US.</p>
          <div className="social-icons">
            <a href="https://github.com/Stevyccc" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <Github size={24} />
            </a>
            <a href="https://instagram.com/stevy_c_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="https://linkedin.com/in/zehuacheng" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:zc2694@columbia.edu" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <FrontAnimation />
      </main>
      <Footer /> 
    </div>
  );
};

export default Home;
