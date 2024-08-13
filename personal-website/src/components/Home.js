import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import '../Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="portfolio-container">
      <div className="fullscreen-page">
        <div className="fullscreen-background">
          {/* You can add your video background here later */}
        </div>
        <header className="header">
          <div className="logo-container">
            <button onClick={handleLogoClick} className="logo-button">
              <img 
                src={`${process.env.PUBLIC_URL}/ins_icon.jpeg`} 
                alt="Zehua Cheng" 
                className="logo-image" 
              />
            </button>
            <span className="company-name">Zehua Cheng</span>
          </div>
          <nav className="nav">
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/research" className="nav-link">Research</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/photography" className="nav-link">Photography</Link>
          </nav>
        </header>
        <main className="main-content">
          <div className="text-content">
            <h1 className="name surfing-capital-font">Zehua Cheng</h1>
            <p className="subtitle">(Or, Steve)</p>
            <p className="description">I'm a mathematical finance student based in NYC, US.</p>
            <div className="social-icons">
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
        </main>
      </div>
      <section className="projects-showcase">
        <h2>Latest Projects & Research</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>High level ideas: description of project 1</p>
          </div>
          <div className="project-card">
            <h3>Research Paper</h3>
            <p>High level ideas: brief overview of my recent research</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <nav className="footer-nav">
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/research" className="nav-link">Research</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/photography" className="nav-link">Photography</Link>
          </nav>
          <div className="copyright">
            © {new Date().getFullYear()} Zehua Cheng. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;