import React from 'react';
import { NavLink as Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaGooglePlus } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import './Footer.css';

function Footer({ backToTop }) {
  return (
    <div className="Container" id="footer-container">
      <div className="footer-links-container">
        <div className="footer-links-icons-wrapper">
          <Link
            className="footer-socialmedia-icon-wrapper"
            to="https://www.facebook.com/share/SpQRZAnuP7Af6ZYS/?mibextid=LQQJ4d"
          >
            <FaFacebook className="footer-socialmedia-icon" />
          </Link>
          <Link
            className="footer-socialmedia-icon-wrapper"
            to="https://www.instagram.com/xolo_digital?igsh=emMxdjVoM2lkdWoz"
          >
            <FaInstagram className="footer-socialmedia-icon" />
          </Link>
          <Link
            className="footer-socialmedia-icon-wrapper"
            to="/contact"
            onClick={backToTop}
          >
            <ImMail4 className="footer-socialmedia-icon" />
          </Link>
        </div>
        <div className="footer-links-desc-wrapper">
          <Link className="footer-link" to="/" onClick={backToTop}>
            Home
          </Link>
          <Link className="footer-link" to="/about" onClick={backToTop}>
            About
          </Link>
          <Link className="footer-link" to="/contact" onClick={backToTop}>
            Contact
          </Link>
        </div>
      </div>
      <div className="footer-info-container">
        <p className="footer-info-desc">
          Copyright ©2024; Designed by <span>XOLO TEAM</span>
        </p>
      </div>
    </div>
  );
}

export default Footer