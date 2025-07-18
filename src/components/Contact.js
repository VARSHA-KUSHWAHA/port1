import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="section contact" id="contact">
      <style>{`
        .section.contact {
          padding: 60px 20px;
        }

        .contact-content {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }

        .contact-info {
          flex: 1;
          min-width: 300px;
        }

        .contact-form {
          flex: 1;
          min-width: 300px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .contact-icon {
          font-size: 20px;
          color: #007BFF; /* Change this to your primary color */
          margin-right: 10px;
        }

        .contact-text h4 {
          margin: 0 0 5px;
        }

        .social-links a {
          margin-right: 15px;
          font-size: 18px;
          color: #333;
        }

        .social-links a:hover {
          color: #007BFF;
        }

        .form-group {
          position: relative;
          margin-bottom: 20px;
        }

        .form-group.with-icon input,
        .form-group.with-icon textarea {
          width: 100%;
          padding: 10px 10px 10px 40px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .form-group .icon {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          color: #007BFF;
          pointer-events: none;
          font-size: 16px;
        }

        textarea {
          resize: vertical;
          min-height: 100px;
        }

        .btn {
          padding: 10px 20px;
          background-color: #007BFF;
          border: none;
          color: #fff;
          font-weight: bold;
          border-radius: 4px;
          cursor: pointer;
        }

        .btn:hover {
          background-color: #333;
        }
      `}</style>

      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
        </div>

        <div className="contact-content">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:kushwahavarsha15@email.com">
                    kushwahavarsha15@email.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <a href="tel:7024947273">+91 7024947273</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://linkedin.com/in/varsha-kushwaha-a7071326b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/VARSHA-KUSHWAHA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group with-icon">
                <i className="fas fa-user icon"></i>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group with-icon">
                <i className="fas fa-envelope icon"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group with-icon">
                <i className="fas fa-tag icon"></i>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group with-icon">
                <i className="fas fa-comment icon"></i>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
