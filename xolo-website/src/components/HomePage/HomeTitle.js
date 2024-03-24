import React, { forwardRef, useState, useEffect } from 'react';
import {NavLink as Link} from 'react-router-dom';
import './HomeTitle.css';
import HomeTitleImage from '../imgs/black2.jpg';
import { TypeAnimation } from './TypeAnimation';

const HomeTitle = () => {
    return (
      <div className="Container" id="HomeContainer">
        {/* <img className='HomeTitleImg' src={HomeTitleImage}/> */}
        <div className="Item">
          {/* <Icon src={Logo}/> */}
          <div className="TextContainer">
            <h1>YOUR OWN</h1>
            <div>
              <TypeAnimation className="typeanimation" />
            </div>
            <h2>DORY</h2>
            <div className="home-title-button-container">
              <Link
                className="button-64"
                role="button"
                to="https://buy.stripe.com/4gw2aR7hfaTugCc6oo"
              >
                <span class="text">Get Started!</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-background-color">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="background-blob"
          >
            <defs>
              <linearGradient id="MyGradient">
                <stop offset="5%" stop-color="#F48C06" />
                <stop offset="95%" stop-color="#F8F0CB" />
              </linearGradient>
            </defs>
            <path
              d="M30.8,-44.2C41.7,-34.5,53.5,-27.9,59.4,-17.5C65.3,-7.1,65.3,7.1,56.2,13C47,18.9,28.7,16.6,17.8,15.4C7,14.2,3.5,14,-4.1,19.6C-11.7,25.2,-23.3,36.7,-31.7,37.1C-40.1,37.5,-45.2,26.9,-48,16.1C-50.8,5.3,-51.2,-5.7,-44.1,-10.2C-37,-14.7,-22.3,-12.6,-13.7,-23C-5.1,-33.4,-2.6,-56.2,3.7,-61.3C10,-66.4,20,-53.8,30.8,-44.2Z"
              transform="translate(140 50)"
            />
          </svg>
        </div>
        <div className="home-title-glass" />
      </div>
    );
}

// export default HomeTitle

//const forwardHomeTitle = forwardRef(HomeTitle)

export default HomeTitle