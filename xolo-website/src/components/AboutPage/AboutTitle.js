import React from "react";
import TitleImg from "../imgs/black02.jpg";
import './AboutTitle.css';

function AboutTitle() {
  return (
    <div className="Container" id="about-section-title-container">
      <img className="about-section-title-img" src={TitleImg} />
      <div className="about-section-title-text">ABOUT US</div>
    </div>
  );
}

export default AboutTitle;
