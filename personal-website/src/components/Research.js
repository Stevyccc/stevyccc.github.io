import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../Research.css'; // Specific styles for the research page

const Research = () => {
  const articles = [
    {
      date: 'July 15, 2023',
      title: 'The Intricacies of Quantum Computing Explained',
      description: 'Quantum computing is a revolutionary technology that leverages the principles of quantum mechanics to process information in fundamentally new ways...',
      link: '/research/quantum-computing',
    },
    {
      date: 'June 10, 2023',
      title: 'Artificial Intelligence in Modern Healthcare',
      description: 'AI is transforming healthcare by enabling more accurate diagnoses, personalized treatment plans, and advanced medical research...',
      link: '/research/ai-healthcare',
    },
    {
      date: 'May 25, 2023',
      title: 'Exploring the Depths of the Ocean: A Scientific Perspective',
      description: 'The ocean is the least explored part of our planet, holding secrets and mysteries that continue to fascinate scientists...',
      link: '/research/ocean-exploration',
    },
    {
      date: 'April 12, 2023',
      title: 'The Future of Renewable Energy',
      description: 'Renewable energy sources like solar and wind power are key to reducing carbon emissions and combating climate change...',
      link: '/research/renewable-energy',
    },
    {
      date: 'March 8, 2023',
      title: 'Understanding Blockchain Beyond Cryptocurrencies',
      description: 'Blockchain technology is often associated with cryptocurrencies, but its potential applications extend far beyond finance...',
      link: '/research/blockchain-applications',
    },
  ];
  

  return (
    <div className="research-page-container">
      <NavBar /> {/* Reusable NavBar component */}
      <main className="research-content">
        <h1>My Researches</h1>
        
        <div className="articles-list">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <p className="article-date">{article.date}</p>
              <h2 className="article-title">{article.title}</h2>
              <p className="article-description">{article.description}</p>
              <a href={article.link} className="read-more">Read article &gt;</a>
            </div>
          ))}
        </div>
      </main>
      <Footer /> {/* Reusable Footer component */}
    </div>
  );
};

export default Research;
