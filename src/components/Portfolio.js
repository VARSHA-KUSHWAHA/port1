import React, { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const portfolioItems = [
    {
      id: 1,
      category: 'mern',
      image: '/images/imge4.png',
      title: 'JIntern Portal',
      description: 'An internship portal built with MERN stack (MongoDB, Express.js, React.js, Node.js).',
      githubLink: 'https://github.com/VARSHA-KUSHWAHA/jportal',
      liveLink: null
    },
    {
      id: 2,
      category: 'mern',
      image: '/images/imge2.png',
      title: 'Real Estate E-commerce',
      description: 'A full-stack real estate platform with property listings and search functionality.',
      liveLink: 'https://realstate-project.vercel.app/'
    },
    {
      id: 3,
      category: 'javascript',
      image: '/images/imge3.png',
      title: 'LMS Learning',
      description: 'A learning management system frontend built with React.js.',
      liveLink: 'https://lms-learing.vercel.app/'
    },
    {
  id: 4,
  category: 'react',
  image: '/images/imge1.png', // Project ka relevant, high-quality screenshot
  title: 'Plant E-Commerce Platform',
  description: 'A visually appealing, mobile-friendly plant shopping platform built with React.js and Next.js — featuring smooth navigation, responsive design, and fast Vercel deployment.',
  liveLink: 'https://plant-projects.vercel.app/'
 }

  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
        </div>
        <div className="portfolio-filter">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`filter-btn ${filter === 'react' ? 'active' : ''}`} onClick={() => setFilter('react')}>React</button>
          <button className={`filter-btn ${filter === 'mern' ? 'active' : ''}`} onClick={() => setFilter('mern')}>MERN</button>
          <button className={`filter-btn ${filter === 'javascript' ? 'active' : ''}`} onClick={() => setFilter('javascript')}>JavaScript</button>
        </div>
        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div className="portfolio-item" data-category={item.category} key={item.id}>
              <img src={item.image} alt={item.title} className="portfolio-img" />
              <div className="portfolio-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="portfolio-links">
                  {item.githubLink && (
                    <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {item.liveLink && (
                    <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-eye"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
