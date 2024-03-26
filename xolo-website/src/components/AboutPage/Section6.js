import React from 'react';
import Img from '../imgs/pexels-google-deepmind-18069693.jpg';
import "../HomePage/Section1.css";
import "./Section6.css";
import { motion } from 'framer-motion';
import { AnimatedText } from "../AnimatedText.tsx";

function Section6() {
  return (
    <motion.div
      className="Container"
      id="section6-container"
      initial={{
        opacity: 0,
        y: 300,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 2.5,
        },
      }}
      viewport={{ once: true }}
    >
      <div className="section6-info-container">
        <div className="section6-info-desc-container">
          <AnimatedText
            className="section6-info-desc-title"
            once
            text="DORY"
            el="h2"
            settingDelay={3}
          />
          <AnimatedText
            className="section6-info-desc-p"
            once
            text="Dory is our implementation to connect you with AI."
            el="p"
            settingDelay={4}
          />
          <AnimatedText
            className="section6-info-desc-p"
            once
            text="Capable of maintaining a conversation with you. Besides from telling you jokes, learning from you, and even sending you images, we advise you to try Dory. Test her limits and be amazed by how technology has become humane."
            el="p"
            settingDelay={6}
          />
          {/* <p className="">
            Dory is the product.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            convallis eros eu dui faucibus faucibus sed sit amet sapien.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            convallis eros eu dui faucibus faucibus sed sit amet sapien. Duis
            imperdiet quis metus sit amet fermentum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p> */}
        </div>
        <div className="section6-info-img-container">
          <img className="section6-info-img1" src={Img} />
          <img className="section6-info-img2" src={Img} />
          <img className="section6-info-img3" src={Img} />
          <img className="section6-info-img4" src={Img} />
        </div>
      </div>
    </motion.div>
  );
}

export default Section6