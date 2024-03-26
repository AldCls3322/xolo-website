import {NavLink as Link} from 'react-router-dom';
import React from 'react';
import { AnimatedText } from '../AnimatedText.tsx';
import { motion, useInView, useAnimation, Variant, delay } from "framer-motion";
import './Section1.css';

function Section1() {
  return (
    <div className="Container" id="section1-container">
      <div className="section1-title-container">
        <div className="section1-shortbar" />
        <motion.h2
          className="section1-title-text"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          OUR TEAM
        </motion.h2>
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
          <AnimatedText
            once
            text="Our Story"
            el="h2"
            className="section1-info-desc-title"
            settingDelay={3}
          />
          {/* <p>
            Dory was idealized by our soon-to-be engineer Alejandro. As we
            stride forward using AI tools, he didn't want to loose the gap of
            creating a relationship betweeen person and AI. Hence, he wanted to
            give much more accessible the powers of technology.
            <br />
            <br />
            "It was concerning noticing how much we start to feel isolated from
            the world"
            <br />
          </p> */}
          <AnimatedText
            once
            text="Xolo's team consists of us three. We are computer engineers with the goal of continuously challenging ourselves while we enjoy it. We met in our first year of college, and since then we have worked together on each project we idealized. We are not only happy to launch Xolo, but we are proud of what we made with Dory."
            el="p"
            className="section1-info-desc-p"
            settingDelay={3.5}
          />
          <AnimatedText
            once
            text="Dory was idealized by our soon-to-be engineer Alejandro. As we stride forward using AI tools, he didn't want to loose the gap of creating a relationship between person and AI. Hence, he wanted to give much more accessible the powers of technology."
            el="p"
            className="section1-info-desc-p"
            settingDelay={16.5}
          />
          {/* <div className="section1-info-desc-span">- Alejandro Armida</div> */}
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