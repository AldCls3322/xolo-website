import React from 'react';
import Img from '../imgs/white02.jpg';
import "../HomePage/Section1.css";
import "./Section6.css";
import { motion } from 'framer-motion';

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
      viewport={{ once: true }}>
      <div className="section6-info-container">
        <div className="section6-info-desc-container">
          <h2 className="section6-info-desc-title">DORY</h2>
          <p className="section6-info-desc-p">
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
          </p>
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