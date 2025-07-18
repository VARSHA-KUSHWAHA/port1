import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span>Varsha Kushwaha</span></h1>
            <p>A passionate Frontend Developer specializing in React.js, dedicated to creating beautiful, responsive, and user-friendly web applications.</p>
            <div className="hero-buttons">
              <a href="#portfolio" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
          <div className="hero-image-container">
            <img src="/images/imge5.jpg" alt="Varsha Kushwaha" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;