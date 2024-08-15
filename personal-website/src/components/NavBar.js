import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar.css'; // Assuming you create a dedicated CSS file for the navbar

const NavBar = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img 
            src={`${process.env.PUBLIC_URL}/ins_icon.jpeg`} 
            alt="Home"
            className="logo-image"
          />
          <span className="company-name">Zehua Cheng</span>
        </Link>
      </div>
      <nav className="nav">
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/research" className="nav-link">Research</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/photography" className="nav-link">Photography</Link>
      </nav>
    </header>
  );
};

export default NavBar;
