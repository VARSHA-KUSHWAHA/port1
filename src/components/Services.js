import React from 'react';

const Services = () => {
  return (
    <section className="section services">
      <div className="container">
        <div className="section-title">
          <h2>What I Do</h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Frontend Development</h3>
            <p>Building responsive and interactive user interfaces using React.js, HTML5, CSS3, and modern JavaScript frameworks.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Responsive Design</h3>
            <p>Creating websites that work perfectly on all devices, from desktop to mobile, with a mobile-first approach.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3>UI/UX Implementation</h3>
            <p>Translating design mockups into functional, pixel-perfect web applications with attention to detail.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;