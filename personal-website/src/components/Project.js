import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../Research.css'; // Reusing the same Research.css for consistency

const Projects = () => {
  const projects = [
    {
      title: 'Quantum Computing Simulations',
      description: 'A deep dive into the world of quantum computing, creating simulations to visualize quantum states and operations using Python and Qiskit.',
      link: '/projects/quantum-computing',
      image: '/c4.JPG',
    },
    {
      title: 'AI-Powered Financial Analysis',
      description: 'Developed a machine learning model that predicts stock market trends by analyzing historical data and real-time news feeds.',
      link: '/projects/ai-financial-analysis',
      image: '/c4.JPG',
    },
    {
      title: 'Blockchain-Based Voting System',
      description: 'A secure and transparent voting system built on blockchain technology, ensuring integrity and anonymity for voters.',
      link: '/projects/blockchain-voting',
      image: '/c4.JPG',
    },
    {
      title: 'Portfolio Optimization Tool',
      description: 'Created a tool that optimizes investment portfolios based on risk tolerance and market conditions, using advanced statistical methods.',
      link: '/projects/portfolio-optimization',
      image: '/c4.JPG',
    },
    {
      title: 'Autonomous Drone Navigation',
      description: 'Designed and implemented an autonomous navigation system for drones using computer vision and machine learning techniques.',
      link: '/projects/autonomous-drone',
      image: '/c4.JPG',
    },
  ];

  return (
    <div className="research-page-container">
      <NavBar />
      <main className="research-content">
        <section className="left-column">
          <h1>My Projects</h1>
          <div className="research-section">
            <div className="articles-list">
              {projects.map((project, index) => (
                <a href={project.link} key={index} className="article-card">
                  <img src={project.image} alt={project.title} className="article-image" />
                  <div className="article-details">
                    <h3 className="article-title">{project.title}</h3>
                    <p className="article-description">{project.description}</p>
                    <span className="read-more">Learn more &gt;</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <aside className="right-column">
          <input
            type="text"
            placeholder="Search projects..."
            className="search-bar"
          />
          <div className="research-guide">
            <h2>Navigator</h2>
            <ul>
              {projects.map((project, index) => (
                <li key={index}>
                  <a href={project.link}>{project.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
