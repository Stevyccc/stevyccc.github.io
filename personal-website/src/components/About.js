import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../About.css'; // Specific styles for the about page

const About = () => {
  return (
    <div className="about-page-container">
      <NavBar /> {/* Reusable NavBar component */}
      <main className="about-content">
        <h1>About Me</h1>
        <p>
          Hi there! I'm Zehua Cheng, but you can call me Steve. I’m a curious soul
          with a passion for all things finance and technology. Originally from China, I've 
          spent the last few years in the vibrant city of New York, soaking in the energy 
          and diversity that this incredible place has to offer.
        </p>
        <p>
          My journey has taken me through the intricate world of mathematics, the fast-paced
          finance industry, and the ever-evolving field of technology. I thrive on solving 
          complex problems, whether it's developing new financial models or tinkering with 
          code to create something amazing.
        </p>
        <p>
          Outside of the professional realm, I’m a huge fan of photography—there’s nothing
          quite like capturing a moment that tells a story. When I'm not behind the camera,
          you’ll likely find me exploring new travel destinations, volunteering for community
          service projects, or trying to learn a new language (Japanese is my latest challenge!).
        </p>
        <p>
          I believe in the power of continuous learning and am always on the lookout for the
          next big adventure, whether it’s a challenging project, a new hobby, or simply a 
          great book. Let’s connect and see where our journeys might intersect!
        </p>
      </main>
      <Footer /> {/* Reusable Footer component */}
    </div>
  );
};

export default About;
