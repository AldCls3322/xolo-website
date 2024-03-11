import React from 'react';
import Img from '../imgs/white01.jpg';
import "../HomePage/Section1.css";
import "./Section7.css";

function Section7() {
  return (
    <div className="Container" id="Section7Container">
      <div className="section1-title-container">
        <div className="section1-shortbar" />
        <h2 className="section1-title-text">OUR TEAM</h2>
        <div className="section1-shortbar" />
      </div>
      <div className="section1-info-container">
        <div className="section7-info-img-container">
          <img className="section7-info-img" src={Img} />
        </div>
        <div className="section1-info-desc-container">
          <h2 className="section1-info-desc-title">Our Story</h2>
          <p className="section1-info-desc-p">
            We are in the search to remove any disadvantage our society might
            have.
            <br />
            <br />
            We can make a change by using technology to our advantage and help
            arradicate any injust treatment or any disadvantage people might
            face.
            <br />
            As we discover the ability to place high quality technology on small
            devices, we realize we can implement smar glasses to aid visually
            impaired citizens.
            <br />
            <br />
            Please feel free to contact us:
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section7