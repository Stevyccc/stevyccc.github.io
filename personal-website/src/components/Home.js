import React from 'react';
import { Briefcase, Twitter, Linkedin, AtSign } from 'lucide-react';
import '../Home.css';

const Home = () => {
  return (
    <div className="portfolio-container">
      <header className="header">
        <div className="logo-container">
          <div className="logo"></div>
          <span className="company-name">Zehua Cheng</span>
        </div>
        <nav className="nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#research" className="nav-link">Research</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#photography" className="nav-link">Photography</a>
        </nav>
      </header>
      
      <main className="main-content">
        <div className="text-content">
          <h1 className="name">Zehua Cheng</h1>
          <p className="subtitle">(Or, Steve)</p>
          <p className="description">I'm a new grad, studied mathematical finance, and based in NYC.</p>
          <div className="social-icons">
            <Briefcase size={24} />
            <Twitter size={24} />
            <Linkedin size={24} />
            <AtSign size={24} />
          </div>
        </div>
        <div className="image-container">
          <div className="profile-image-outer">
            <div className="profile-image-inner"></div>
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <button className="language-button active">EN</button>
        <button className="language-button inactive">CN</button>
      </footer>
    </div>
  );
};

export default Home;