import React from 'react';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-image-wrapper">
            <img src="/images/imge5.jpg" alt="About Me" className="about-circle-image" />
          </div>
          <div className="about-text">
            <h3>Frontend Developer </h3>
            <p>I am a Computer Science graduate with a passion for creating interactive and responsive web applications. With expertise in React.js and modern JavaScript, I build efficient and scalable frontend architectures.</p>
            <p>During my internship at Ypsilon IT Solutions, I gained hands-on experience with the MERN stack, working on real-world projects that enhanced my problem-solving skills and technical knowledge.</p>
            <div className="skills" id="skills">
              <div className="skill-item">
                <div className="skill-name">
                  <span>React.js</span>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">
                  <span>JavaScript</span>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">
                  <span>HTML5 & CSS3</span>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">
                  <span>Node.js</span>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;