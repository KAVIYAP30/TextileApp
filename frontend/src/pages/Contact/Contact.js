import React, { useState } from 'react';
import './Contact.css'; // CSS file for styling


const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    window.location.reload();
  };

  return (
    <div className="contact-page">
      <div className="contact-form">
        <h2>Get in touch with us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
        {submitted && <p>Thank you for your suggestions!</p>}
      </div>

      <div className="company-info">
        <h2>Shop Information</h2>
    
        <p>No: 21,Krishnan Pudhur ,AMMAPET ,SALEM </p>
        <p>Phone:9443391460  </p>
        <p>Email: niranjantextiles69@gmail.com</p>
      </div>

      <div className="customer-support-hours">
        <h2>Customer Support Hours</h2>
        <p>Monday - Saturday: 9:00 AM to 9:00 PM</p>
        <p>Sunday: Closed</p>
      </div>

      
      

      {/* <div className="map-directions"> */}
        {/* <h2>Map & Directions</h2> */}
         {/* <ContactMap/> */}

        {/* <p>PHOENIX GIFTS CUDDALORE-607 002</p> */}
      </div>
    // </div>
  );
};

export default Contact;