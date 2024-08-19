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

      {/* New Section for Top Research and Projects */}
      <section className="additional-content">
        <div className="left-column">
          <div className="featured-section">
            <h2>Top Research</h2>
            <div className="articles-list">
              <a href="#" className="article-card">
                <img src="/c4.JPG" alt="Quantum Computing Explained" className="article-image" />
                <div className="article-details">
                  <h3 className="article-title">The Intricacies of Quantum Computing Explained</h3>
                  <p className="article-description">Quantum computing is a revolutionary technology that leverages the principles of quantum mechanics...</p>
                  <span className="read-more">Read more &gt;</span>
                </div>
              </a>
              <a href="#" className="article-card">
                <img src="/c4.JPG" alt="AI in Healthcare" className="article-image" />
                <div className="article-details">
                  <h3 className="article-title">Artificial Intelligence in Modern Healthcare</h3>
                  <p className="article-description">AI is transforming healthcare by enabling more accurate diagnoses, personalized treatment plans...</p>
                  <span className="read-more">Read more &gt;</span>
                </div>
              </a>
              <a href="#" className="article-card">
                <img src="/c4.JPG" alt="Blockchain Beyond Cryptocurrencies" className="article-image" />
                <div className="article-details">
                  <h3 className="article-title">Blockchain Beyond Cryptocurrencies</h3>
                  <p className="article-description">The potential of blockchain extends far beyond just cryptocurrencies...</p>
                  <span className="read-more">Read more &gt;</span>
                </div>
              </a>
            </div>
          </div>
          <div className="featured-section">
            <h2>Top Projects</h2>
            <div className="articles-list">
              <a href="#" className="article-card">
                <img src="/c4.JPG" alt="Quantum Computing Simulations" className="article-image" />
                <div className="article-details">
                  <h3 className="article-title">Quantum Computing Simulations</h3>
                  <p className="article-description">A deep dive into the world of quantum computing, creating simulations to visualize quantum states...</p>
                  <span className="read-more">Learn more &gt;</span>
                </div>
              </a>
              <a href="#" className="article-card">
                <img src="/c4.JPG" alt="AI-Powered Financial Analysis" className="article-image" />
                <div className="article-details">
                  <h3 className="article-title">AI-Powered Financial Analysis</h3>
                  <p className="article-description">Developed a machine learning model that predicts stock market trends...</p>
                  <span className="read-more">Learn more &gt;</span>
                </div>
              </a>
              <a href="#" className="article-card">
                <img src="/c4.JPG" alt="Blockchain-Based Voting System" className="article-image" />
                <div className="article-details">
                  <h3 className="article-title">Blockchain-Based Voting System</h3>
                  <p className="article-description">A secure and transparent voting system built on blockchain technology...</p>
                  <span className="read-more">Learn more &gt;</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <aside className="right-column">
          <div className="placeholder-table">
            <h2>Basic Info</h2>
            <table>
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>Zehua Cheng</td>
                </tr>
                <tr>
                  <td>Location:</td>
                  <td>NYC, US</td>
                </tr>
                <tr>
                  <td>Education:</td>
                  <td>MA in Mathematical Finance</td>
                </tr>
                <tr>
                  <td>Interests:</td>
                  <td>Quantitative Finance, AI, Photography</td>
                </tr>
              </tbody>
            </table>
          </div>
        </aside>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
