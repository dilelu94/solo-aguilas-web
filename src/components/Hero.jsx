import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <img 
          src="logo-solo-aguilas.png" 
          alt="Solo Águilas Logo" 
          className="hero-logo"
        />
        <h1>Solo Águilas</h1>
        <p>Tattoo Studio</p>
        <a 
          href="https://www.instagram.com/solo.aguilas/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="instagram-link"
        >
          @solo.aguilas
        </a>
      </div>
    </header>
  );
};

export default Hero;
