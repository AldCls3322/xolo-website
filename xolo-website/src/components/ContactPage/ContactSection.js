import React, { useState, useEffect, forwardRef } from "react";
import emailjs from '@emailjs/browser';
import { MdPhone, MdLocationPin, MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
// import Map from './Map';
// import credentials from './credential';
import './ContactSection.css'
// import { error } from "console";

function ContactSection() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_nq9h5eh";
    const templateId = "template_fgfseji";
    const publicKey = "-gj07iGaVgIAwDBYP";

    const templateParms ={
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParms, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.log('Error sending email', error);
      });
  }

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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-address"
                placeholder="Your Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                className="form-subject"
                placeholder="Subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                className="form-message"
                id=""
                rows="15"
                placeholder="Your Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
        Send us a mail
      </motion.div>
    </div>
  );
}

export default ContactSection;
