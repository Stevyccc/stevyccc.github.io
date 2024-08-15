import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../Photography.css'; // Specific styles for the photography page

const Photography = () => {
  const photos = [
    { src: `${process.env.PUBLIC_URL}/c1.jpg`, alt: 'Photo 1' },
    { src: `${process.env.PUBLIC_URL}/c2.jpg`, alt: 'Photo 2' },
    { src: `${process.env.PUBLIC_URL}/c3.jpg`, alt: 'Photo 3' },
    { src: `${process.env.PUBLIC_URL}/c4.jpg`, alt: 'Photo 4' },
    // Add more photos as needed
  ];

  return (
    <div className="photography-page-container">
      <NavBar /> {/* Reusable NavBar component */}
      <main className="photography-content">
        <h1>My Photography</h1>
        <p className="intro">
          Capturing moments from around the world, one frame at a time. Explore some of my favorite shots below.
        </p>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <div key={index} className="photo-item">
              <img src={photo.src} alt={photo.alt} className="photo-img" />
            </div>
          ))}
        </div>
      </main>
      <Footer /> {/* Reusable Footer component */}
    </div>
  );
};

export default Photography;
