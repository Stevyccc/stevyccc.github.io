import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../Photography.css'; 

// Dynamic import for images and thumbnails
const images = require.context('../pictures/images', false, /\.(jpg|jpeg|png)$/);
const thumbnails = require.context('../pictures/thumbnails', false, /\.(jpg|jpeg|png)$/);

const Photography = () => {
  const photos = images.keys().map((key) => ({
    src: images(key),
    thumbnail: thumbnails(key),
    alt: `Photo ${key.replace('./', '').replace(/\.(jpg|jpeg|png)$/, '')}`,
  }));

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeModal = () => {
    setSelectedPhotoIndex(null);
  };

  const showNextPhoto = (e) => {
    e.stopPropagation(); // Prevent modal click from closing it
    setSelectedPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const showPreviousPhoto = (e) => {
    e.stopPropagation(); // Prevent modal click from closing it
    setSelectedPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const selectedPhoto = photos[selectedPhotoIndex];

  return (
    <div className="photography-page-container">
      <NavBar />
      <main className="photography-content">
        <h1>My Photography</h1>
        <p className="intro">
          Capturing moments from around the world, one frame at a time. Explore some of my favorite shots below.
        </p>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <div key={index} className="photo-item" onClick={() => handleImageClick(index)}>
              <div className="photo-hover-container">
                <img
                  src={photo.thumbnail}
                  alt={photo.alt}
                  className="photo-img"
                  loading="lazy" // Lazy loading
                />
              </div>
            </div>
          ))}
        </div>
        {selectedPhotoIndex !== null && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="prev-btn" onClick={showPreviousPhoto}>&#10094;</button>
              <img src={selectedPhoto.src} alt={selectedPhoto.alt} className="modal-img" />
              <button className="next-btn" onClick={showNextPhoto}>&#10095;</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Photography;
