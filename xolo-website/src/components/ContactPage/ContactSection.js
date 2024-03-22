import React, { useState, useEffect, forwardRef } from "react";
import { MdPhone, MdLocationPin, MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
// import Map from './Map';
// import credentials from './credential';
import './ContactSection.css'

function ContactSection() {
  return (
    <div className="Container" id="contact-section-container">
      <motion.div
        className="contact-section-cardwhite"
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2,
          },
        }}
        viewport={{ once: true }}
      >
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
      </motion.div>
      <motion.div
        className="contact-section-cardleft"
        initial={{
          opacity: 0,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2,
          },
        }}
        viewport={{ once: true }}
      >
        admin@xolo.com
      </motion.div>
    </div>
  );
}

export default ContactSection;
