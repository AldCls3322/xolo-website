import React, { useState } from "react";
import coverImg from '../imgs/artificial-intelligence-svgrepo-com.svg';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import '../HomePage/Section1.css';
import './Section3.css';
import { AnimatedText } from "../AnimatedText.tsx";

function Section3() {

  const [isInView, setIsInView] = useState(false);

  return (
    <div className="Container" id="section3-container">
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
          OUR PRODUCT
        </motion.h2>
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
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        />
      </div>
      <div className="section3-info-container">
        <div
          className="section1-info-desc-container"
          id="section3-info-desc-centered-container"
        >
          <AnimatedText
            once
            text="Introducing DORY"
            el="h2"
            className="section3-info-desc-title section1-info-desc-title"
          />
          {/* <h2 className="section3-info-desc-title section1-info-desc-title">
            Introducing DORY
          </h2> */}
          <div className="section3-info-titlebar" />
          <AnimatedText
            once
            text="DORY is a chatting AI. Message her in Whatsapp."
            el="p"
            className="section3-info-desc-p section1-info-desc-p"
            settingDelay={1}
          />
          <AnimatedText
            once
            text="She can even make jokes. As we developped Dory, quickly she became one of the proudest projects we developed. Dory is more than just an AI, it's a friend waiting to meet you through the simplicity of Whatsapp. This AI Companion breaks through the barriers of technology, making every chat not just interactive but genuinely meaningful. She embodies Xolo's dream of blending advanced technology with the effortless charm of human connection, ensuring that every conversation feels like a step closer to a future where technology truly understands and complements the nuances of your life. It’s not just about the words exchanged; it’s about forming a bond that enriches your daily experiences, making Dory not just an innovative product but a personal journey towards a more connected world."
            el="p"
            className="section3-info-desc-p section1-info-desc-p"
            settingDelay={2.5}
          />
          <div className="section3-info-textbar" />
          {/* <p className="section1-info-desc-p" id="">
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
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Section3