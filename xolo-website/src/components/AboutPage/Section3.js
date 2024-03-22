import React, { useState } from "react";
import coverImg from '../imgs/black03.jpg';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import '../HomePage/Section1.css';
import './Section3.css';

function Section3() {

  const [isInView, setIsInView] = useState(false);

  return (
    <div className="Container" id="section3-container">
      <div className="section1-title-container">
        <div className="section1-shortbar" />
        <h2 className="section1-title-text">OUR PRODUCT</h2>
        <div className="section1-shortbar" />
      </div>
      <div class="overcoming-img-wrapper">
        <motion.img
          src={coverImg}
          loading="lazy"
          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 94vw, 43vw"
          alt="img"
          class="section3-centered-img"
          initial={false}
          animate={
            isInView
              ? {
                  WebkitMaskImage: `conic-gradient(black 0%, black 100%, transparent 100%, transparent 100%)`,
                  maskImage: `conic-gradient(black 0%, black 100%, transparent 100%, transparent 100%)`,
                }
              : {
                  WebkitMaskImage: `conic-gradient(black 0%, black 0%, transparent 0%, transparent 100%)`,
                  maskImage: `conic-gradient(black 0%, black 0%, transparent 0%, transparent 100%)`,
                }
          }
          transition={{ duration: 2, delay: 1.5 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        />
      </div>
      <div className="section3-info-container">
        <div
          className="section1-info-desc-container"
          id="section3-info-desc-centered-container"
        >
          <h2
            className="section1-info-desc-title"
            id="section3-info-desc-title"
          >
            Introducing DORY
          </h2>
          <div className="section3-info-titlebar" />
          <p className="section1-info-desc-p" id="section3-info-desc-p">
            DORY is a chatting AI. Message her in Whatsapp.
            <br />
            <br />
            She can make even make jokes. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed convallis eros eu dui faucibus
            faucibus sed sit amet sapien. Duis imperdiet quis metus sit amet
            fermentum. Nunc sit amet ultricies nisi. Maecenas ac enim arcu. Ut
            eu quam porta, convallis orci ac, gravida enim. Nunc egestas felis
            et orci cursus faucibus. Nunc ultricies vitae sem lacinia blandit.
            Nunc eget lectus eget nibh fringilla rutrum in sed mauris. Nulla
            blandit efficitur velit nec interdum. Mauris scelerisque enim id dui
            luctus auctor. Maecenas sed arcu odio.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            convallis eros eu dui faucibus faucibus sed sit amet sapien. Duis
            imperdiet quis metus sit amet fermentum. Nunc sit amet ultricies
            nisi. Maecenas ac enim arcu. Ut eu quam porta, convallis orci ac,
            gravida enim. Nunc egestas felis et orci cursus faucibus. Nunc
            ultricies vitae sem lacinia blandit. Nunc eget lectus eget nibh
            fringilla rutrum in sed mauris. Nulla blandit efficitur velit nec
            interdum. Mauris scelerisque enim id dui luctus auctor. Maecenas sed
            arcu odio.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            convallis eros eu dui faucibus faucibus sed sit amet sapien.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section3