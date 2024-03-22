import React from 'react';
import Img from '../imgs/white01.jpg';
import "../HomePage/Section1.css";
import "./Section8.css";
import { motion } from "framer-motion";

function Section8() {
  return (
    <motion.div
      className="Container"
      id="section8-container"
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
      <div className="section1-title-container">
        <div className="section1-shortbar" />
        <h2 className="section1-title-text">WHO ARE WE?</h2>
        <div className="section1-shortbar" />
      </div>
      <div className="section1-info-container">
        <div className="section8-info-img-container">
          <svg viewbox="0 0 50vmin 50vmin" width="50vmin" height="50vmin">
            <defs>
              <mask id="mask" x="0" y="0" width="100vmin" height="49vmin">
                <rect
                  x="2vmin"
                  y="2vmin"
                  width="46vmin"
                  height="46vmin"
                  fill="#FFF"
                />
                <text x="8vmin" text-anchor="middle" y="48.1vmin" dy="0">
                  X
                </text>
                <text x="20vmin" text-anchor="middle" y="48.1vmin" dy="0">
                  O
                </text>
                <text x="31vmin" text-anchor="middle" y="48.1vmin" dy="0">
                  L
                </text>
                <text x="42vmin" text-anchor="middle" y="48.1vmin" dy="0">
                  O
                </text>
              </mask>
            </defs>
            <rect
              x="2vmin"
              y="2vmin"
              width="49vmin"
              height="49vmin"
              mask="url(#mask)"
              fill-opacity="1"
              fill="var(--color-body)"
            />
          </svg>
        </div>
        <div className="section8-info-desc-container">
          <h2 className="section1-info-desc-title">XOLO</h2>
          <p className="section1-info-desc-p">
            XOLO is the brand.
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
      </div>
    </motion.div>
  );
}

export default Section8