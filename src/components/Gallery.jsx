import React from 'react';
import '../styles/Gallery.css';

const Gallery = ({ tattoos }) => {
  return (
    <section className="gallery-section">
      <h2>Nuestros Tatuajes</h2>
      <div className="gallery-grid">
        {tattoos.map((tattoo, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={tattoo.imageUrl} 
              alt={tattoo.name} 
              className="tattoo-image"
            />
            <div className="tattoo-info">
              <h3>{tattoo.getDisplayName()}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
