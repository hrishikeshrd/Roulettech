import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      {/* <h1>Let's Connect!</h1> */}
      <p style={{fontSize: '20px'}}>We'd love to hear from you! Please reach out with any questions, comments, or feedback.</p>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Our Address</h3>
          <p>5151 Windorf drive, Westerville, Columbus, OH 43081</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <h3>Call Us</h3>
          <p>(614) 607-9235</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <h3>Email Us</h3>
          <p>hrishikeshrajeshdeshmukh@gmail.com</p>
        </div>
      </div>
      <div className="disclaimer">
      <h3>Disclaimer</h3>
        <p>We have used this logo for educational and demonstration purposes only as part of our project. We do not intend to infringe on any copyrights or trademarks. All rights to the logo and related assets belong to their respective owners.</p>
      </div>
    
    </div>
  );
};

export default ContactUs;
