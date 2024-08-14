import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import FrontAnimation from './FrontAnimation';
import '../Home.css';

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleLogoClick = () => {
    navigate('/');
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slows down the video to 75% speed
    }
  }, []);

  return (
    <div className="portfolio-container">
      <div className="fullscreen-page">
        {/* <div className="fullscreen-background">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
          >
            <source src={`${process.env.PUBLIC_URL}/AdobeStock_807810113_Video_HD_Preview.mov`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
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
          <FrontAnimation></FrontAnimation>
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