import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../Research.css'; // Specific styles for the research page

const Research = () => {
  const completedResearch = [
    {
      date: 'July 15, 2023',
      title: 'The Intricacies of Quantum Computing Explained',
      description: 'Quantum computing is a revolutionary technology that leverages the principles of quantum mechanics to process information in fundamentally new ways...',
      link: '/research/quantum-computing',
      image: '/c4.JPG' // Placeholder image path
    },
    // Additional placeholder articles
    {
      date: 'June 10, 2023',
      title: 'Artificial Intelligence in Modern Healthcare',
      description: 'AI is transforming healthcare by enabling more accurate diagnoses, personalized treatment plans, and advanced medical research...',
      link: '/research/ai-healthcare',
      image: '/c4.JPG'
    },
    {
      date: 'May 20, 2023',
      title: 'Blockchain Beyond Cryptocurrencies',
      description: 'The potential of blockchain extends far beyond just cryptocurrencies, impacting industries like finance, supply chain management, and healthcare...',
      link: '/research/blockchain-impacts',
      image: '/c4.JPG'
    }
  ];

  const researchIdeas = [
    {
      date: 'August 20, 2024',
      title: 'Exploring Neuro-Symbolic AI',
      description: 'A hybrid approach combining neural networks and symbolic reasoning could be the future of artificial intelligence...',
      image: '/c4.JPG'
    },
    {
      date: 'August 10, 2024',
      title: 'Applications of Edge Computing in Smart Cities',
      description: 'Analyzing how edge computing can enhance the efficiency and scalability of urban infrastructure...',
      image: '/c4.JPG'
    },
    {
      date: 'July 28, 2024',
      title: 'The Ethical Implications of AI in Warfare',
      description: 'Discussing the potential risks and moral dilemmas associated with AI-driven military technology...',
      image: '/c4.JPG'
    }
  ];

  return (
    <div className="research-page-container">
      <NavBar />
      <main className="research-content">
        <section className="left-column">
          <h1>My Research</h1>
          <div className="research-section">
            <h2>Completed</h2>
            <div className="articles-list">
              {completedResearch.map((article, index) => (
                <a href={article.link} key={index} className="article-card">
                  <img src={article.image} alt={article.title} className="article-image" />
                  <div className="article-details">
                    <p className="article-date">{article.date}</p>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-description">{article.description}</p>
                    <span className="read-more">Read article &gt;</span>
                  </div>
                </a>
              ))}
            </div>

          </div>
          <div className="research-section">
            <h2>Future Ideas</h2>
            <div className="articles-list">
              {researchIdeas.map((idea, index) => (
                <div key={index} className="article-card">
                  <img src={idea.image} alt={idea.title} className="article-image" />
                  <div className="article-details">
                    <p className="article-date">{idea.date}</p>
                    <h3 className="article-title">{idea.title}</h3>
                    <p className="article-description">{idea.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <aside className="right-column">
          <input
            type="text"
            placeholder="Search articles..."
            className="search-bar"
          />
          <div className="research-guide"> {/* Updated class name */}
            <h2>Navigator</h2> {/* Updated name */}
            <ul>
              {completedResearch.map((article, index) => (
                <li key={index}>
                  <a href={article.link}>{article.title}</a>
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

export default Research;
