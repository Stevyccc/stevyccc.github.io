import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import '../Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [isFooterExpanded, setIsFooterExpanded] = useState(false);
  const footerRef = useRef(null);

  const handleLogoClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      setIsFooterExpanded(documentHeight - (scrollTop + windowHeight) < 10); // 10px threshold
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      <div className="original-content">
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
              <Instagram size={24} />
              <Linkedin size={24} />
              <Mail size={24} />
            </div>
          </div>
          <div className="image-container">
            <div className="profile-image-outer">
              <div className="profile-image-inner"></div>
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
          {/* Add more project cards as needed */}
        </div>
      </section>
      <footer ref={footerRef} className={`footer ${isFooterExpanded ? 'expanded' : ''}`}>
        <div className="footer-content">
            <nav className={`footer-nav ${isFooterExpanded ? 'visible' : ''}`}>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/research" className="nav-link">Research</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/photography" className="nav-link">Photography</Link>
            </nav>
            <div className="language-buttons">
            <button className="language-button active">EN</button>
            <button className="language-button inactive">中</button>
            </div>
        </div>
    </footer>
    </div>
  );
};

export default Home;