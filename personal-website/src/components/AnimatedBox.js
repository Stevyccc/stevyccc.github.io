import React, { useState, useEffect, useRef } from 'react';
import '../App.css'; // might induce error

function AnimatedBox({ src, alt }) {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setIsVisible(true);
        }},
        {threshold: 0.1});

      if (boxRef.current) {
        observer.observe(boxRef.current);
      }

      return () => {
        if (boxRef.current) {
          observer.unobserve(boxRef.current);
        }
      };
  }, []);

  return (
    <img
    className='inpage-img'
    ref={boxRef}
    src={isVisible? src : ''}
    alt={alt}
    style={{
      width: '300px',
      height: '200px',
      margin: '50px auto',
      backgroundColor: '#f0f0f0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px',
      opacity: isVisible ? 1 : 0,
      transform: `translateY(${isVisible ? 0 : '20px'})`,
      transition: 'opacity 0.5s, transform 0.5s',
      }}/>
  );
};

export default AnimatedBox;