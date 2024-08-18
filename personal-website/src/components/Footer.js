import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer.css'; // Ensure this path is correct

const Footer = () => {
  return (
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
  );
};

export default Footer;
