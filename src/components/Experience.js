import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'left',
      title: 'MERN Stack Intern',
      company: 'Ypsilon IT Solutions Pvt. Ltd.',
      duration: 'Duration: 6 Months',
      description: [
        'Integrated frontend components with backend RESTful APIs developed in Node.js and Express.js',
        'Implemented MongoDB for efficient storage and retrieval of data',
        'Developed reusable React components to streamline development'
      ]
    },
    {
      id: 2,
      type: 'right',
      title: 'Education',
      company: 'B.Tech Computer Science',
      duration: 'Jawaharlal Nehru College of Technology, Rewa (8.36 CGPA)',
      period: '2020 - 2024'
    },
    {
      id: 3,
      type: 'left',
      title: 'Certifications',
      company: 'MERN Stack Development',
      duration: 'Algosoft Apps Technologies Pvt. Ltd. (June-July 2023)',
      period: 'Universal Informatics (React.js, Node.js, MongoDB)'
    }
  ];

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-title">
          <h2>My Experience</h2>
        </div>
        <div className="timeline">
          {experiences.map(exp => (
            <div className={`timeline-item ${exp.type}`} key={exp.id}>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.duration}</p>
                {exp.period && <p>{exp.period}</p>}
                {exp.description && (
                  <ul>
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;