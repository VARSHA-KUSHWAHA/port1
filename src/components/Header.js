import React from 'react';
<link rel="icon" type="img" href="img/imge5.jpg"></link>
const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">Varsha<span>Kushwaha</span></div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Project</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;