import React, { useState, useEffect, useRef } from 'react';
import '../App.css'; // Make sure the necessary styles are in this file

function AnimatedProjectCard({ title, description }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      className="project-card"
      ref={cardRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : '20px'})`,
        transition: 'opacity 0.5s, transform 0.5s',
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default AnimatedProjectCard;
