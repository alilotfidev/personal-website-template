import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="Contact section-wrapper">
      <h2 className="contact-title title">Contact</h2>
      <h4 className="contact-subtitle subtitle">
        Viverra tristique placerat massa estionos consectetur quisque nu fames
        lorem ipsum
      </h4>
      <div className="contact-info-wrapper">
        <div className="contact-info">
          <span>Full Name:</span> Anna Edmunds
        </div>
        <div className="contact-info">
          <span>Phone:</span> <a href="tel:+989331138371">(+98) 933 113 8371</a>
        </div>
        <div className="contact-info">
          <span>Birthday:</span> 24. 11. 1998.
        </div>
        <div className="contact-info">
          <span>Email:</span>{" "}
          <a href="mailto:anna@example.com">anna@example.com</a>
        </div>
        <div className="contact-info">
          <span>Address:</span> Some Street 668, Amsterdam, Netherlands
        </div>
        <div className="contact-info">
          <span>Website:</span> example.com
        </div>
      </div>
      <form className="contact-form">
          <input type="text" placeholder="NAME" name="name" />
          <input type="email" placeholder="EMAIL" name="email" />
          <input type="text" placeholder="SUBJECT" name="subject" />
          <textarea type="text" placeholder="Message" name="message" />
          <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
