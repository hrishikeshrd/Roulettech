import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Let's Connect!</h1>
      <p style={{fontSize: '20px'}}>We'd love to hear from you! Please reach out with any questions, comments, or feedback.</p>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Our Address</h3>
          <p>5151 windorf drive, westerville ohio, Columbus, OH 43081</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <h3>Call Us</h3>
          <p>(614) 607-9235</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <h3>Email Us</h3>
          <p>contact@kangacook.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
