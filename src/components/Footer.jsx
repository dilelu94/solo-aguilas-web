import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Solo Águilas - Tattoo Studio</p>
        <div className="social-links">
          <a 
            href="https://www.instagram.com/solo.aguilas/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
