import {NavLink as Link} from 'react-router-dom';
import Img from '../imgs/black.jpg';
import React from 'react';
import './Section1.css';

function Section1() {
  return (
    <div className="Container" id="section1-container">
      <div className="section1-title-container">
        <div className="section1-shortbar" />
        <h2 className="section1-title-text">OUR TEAM</h2>
        <div className="section1-shortbar" />
      </div>
      <div className="section1-info-container">
        <div className="section1-info-img-flexed">
          <h2
            className="section1-info-desc-title"
            id="section1-info-img-blank-title"
          >
            <br />
          </h2>
          <div className="section1-info-img-container">
            <h2 className="section1-info-img-title">
              MEET
              <br />
              OUR TEAM
            </h2>
            {/* <img src={Img}/> */}
          </div>
        </div>
        <div className="section1-info-desc-container">
          <h2 className="section1-info-desc-title">Our Story</h2>
          <p>
            Dory was idealized by our soon-to-be engineer Alejandro. As we
            stride forward using AI tools, he didn't want to loose the gap of
            creating a relationship betweeen person and AI. Hence, he wanted to
            give much more accessible the powers of technology.
            <br />
            <br />
            "It was concerning noticing how much we start to feel isolated from
            the world"
            <br />
          </p>
          <div className="section1-info-desc-span">- Alejandro Armida</div>
          <div className="section1-info-button-container">
            <Link className="section1-info-button" to="/contact">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1