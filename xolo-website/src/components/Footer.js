import React from 'react';
import { NavLink as Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaGooglePlus } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <div className="Container" id="footer-container">
      <div className="footer-links-container">
        <div className="footer-links-icons-wrapper">
          <Link className="footer-socialmedia-icon-wrapper">
            <FaFacebook className="footer-socialmedia-icon" />
          </Link>
          <Link className="footer-socialmedia-icon-wrapper" to='https://www.instagram.com/xolo_digital?igsh=emMxdjVoM2lkdWoz'>
            <FaInstagram className="footer-socialmedia-icon" />
          </Link>
          <Link className="footer-socialmedia-icon-wrapper">
            <FaGooglePlus className="footer-socialmedia-icon" />
          </Link>
        </div>
        <div className="footer-links-desc-wrapper">
          <Link className="footer-link" to="/">
            Home
          </Link>
          <Link className="footer-link" to="/about">
            About
          </Link>
          <Link className="footer-link" to="/contact">
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