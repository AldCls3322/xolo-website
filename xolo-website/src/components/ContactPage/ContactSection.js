import React, { useState, useEffect, forwardRef } from "react";
import { MdPhone, MdLocationPin, MdEmail } from "react-icons/md";
// import Map from './Map';
// import credentials from './credential';
import './ContactSection.css'

function ContactSection() {
  return (
    <div className="Container" id="contact-section-container">
      <div className="contact-section-cardwhite">
        <h1 className="contact-section-cardwhite-title-h1">CONTACT US:</h1>
        <div className="contact-section-cardwhite-bar" />
        <div className="contact-section-cardwhite-contents">
          <div className="contact-section-cardwhite-mailsender">
            <form>
              <input
                type="text"
                className="form-address"
                placeholder="Your Email Address"
                name="email"
              />
              <input
                type="text"
                className="form-subject"
                placeholder="Subject"
                name="subject"
              />
              <textarea
                className="form-message"
                id=""
                rows="15"
                placeholder="Your Message"
                name="message"
              />
              <input type="submit" className="btn-snd-email" value="SEND" />
            </form>
          </div>
        </div>
      </div>
      <div className="contact-section-cardleft">admin@xolo.com</div>
    </div>
  );
}

export default ContactSection;
