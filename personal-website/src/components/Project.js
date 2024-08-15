import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../Project.css'; // Specific styles for the projects page

const Projects = () => {
  const projects = [
    {
      title: 'Quantum Computing Simulations',
      description: 'A deep dive into the world of quantum computing, creating simulations to visualize quantum states and operations using Python and Qiskit.',
      link: '/projects/quantum-computing',
    },
    {
      title: 'AI-Powered Financial Analysis',
      description: 'Developed a machine learning model that predicts stock market trends by analyzing historical data and real-time news feeds.',
      link: '/projects/ai-financial-analysis',
    },
    {
      title: 'Blockchain-Based Voting System',
      description: 'A secure and transparent voting system built on blockchain technology, ensuring integrity and anonymity for voters.',
      link: '/projects/blockchain-voting',
    },
    {
      title: 'Portfolio Optimization Tool',
      description: 'Created a tool that optimizes investment portfolios based on risk tolerance and market conditions, using advanced statistical methods.',
      link: '/projects/portfolio-optimization',
    },
    {
      title: 'Autonomous Drone Navigation',
      description: 'Designed and implemented an autonomous navigation system for drones using computer vision and machine learning techniques.',
      link: '/projects/autonomous-drone',
    },
  ];

  return (
    <div className="projects-page-container">
      <NavBar /> {/* Reusable NavBar component */}
      <main className="projects-content">
        <h1>My Projects</h1>
        <p className="intro">
          Here are some of the projects I've worked on, spanning across various fields from quantum computing to AI and blockchain technology. Each project represents a journey of exploration and learning.
        </p>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="read-more">Learn more &gt;</a>
            </div>
          ))}
        </div>
      </main>
      <Footer /> {/* Reusable Footer component */}
    </div>
  );
};

export default Projects;
