import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>Let's work together on your next project!</p>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <p className="copyright">&copy; 2024 Varsha Kushwaha. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;