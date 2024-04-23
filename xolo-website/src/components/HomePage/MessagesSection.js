import React from 'react'
import { NavLink as Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./MessagesSection.css";
import Logo from "../imgs/xoloblack.png";
import { FaUser } from "react-icons/fa";
import { BsEmojiSmileUpsideDownFill } from "react-icons/bs";
import { BsFillEmojiGrinFill } from "react-icons/bs";
import { BsEmojiGrin } from "react-icons/bs";
import { IoSend } from "react-icons/io5";

function MessagesSection() {
  return (
    <div className="Container" id="messages-section-container">
      <motion.div
        className="xolo-message-container"
        initial={{
          opacity: 0,
          x: -100,
          scale: 0.1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <div className="xolo-message-icon">
          <img className="xoloLogo-message" src={Logo} />
        </div>
        <div className="received-message-wrapper">
          <div className="received-message">
            <p className="received-message-p">Hello! Welcome to Xolo!</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="user-message-container"
        initial={{
          opacity: 0,
          x: 100,
          scale: 0.1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <div className="sent-message">Hello!</div>
        <div className="user-message-icon">
          <FaUser className="userLogo-message" />
        </div>
      </motion.div>

      <motion.div
        className="xolo-message-container"
        initial={{
          opacity: 0,
          x: -100,
          scale: 0.1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <div className="xolo-message-icon">
          <img className="xoloLogo-message" src={Logo} />
        </div>
        <div className="received-message">
          <p className="received-message-p">
            I will be showing you around and introducing you to Dory!
          </p>
        </div>
      </motion.div>

      <motion.div
        className="user-message-container"
        initial={{
          opacity: 0,
          x: 100,
          scale: 0.1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <div className="sent-message">
          <p className="received-message-p">But... who are you??</p>
        </div>
        <div className="user-message-icon">
          <FaUser className="userLogo-message" />
        </div>
      </motion.div>

      <motion.div
        className="xolo-message-container"
        initial={{
          opacity: 0,
          x: -100,
          scale: 0.1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <div className="xolo-message-icon">
          <img className="xoloLogo-message" src={Logo} />
        </div>
        <div className="received-message">
          <p className="received-message-p">
            I'm Xolo, a company that develops different interesing projects.
            Meanwhile, Dory is our main product! I can tell you more about it.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="user-message-container"
        initial={{
          opacity: 0,
          x: 100,
          scale: 0.1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <div className="sent-message">
          <p className="received-message-p">
            Sure thing, <br />
            please tell me!
          </p>
        </div>
        <div className="user-message-icon">
          <FaUser className="userLogo-message" />
        </div>
      </motion.div>

      <motion.div
        className="xolo-message-container"
        initial={{
          opacity: 0,
          x: -100,
          scale: 0.1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <div className="xolo-message-icon">
          <img className="xoloLogo-message" src={Logo} />
        </div>
        <div className="received-message-wrapper">
          <div className="received-message">
            <p className="received-message-p">
              Xolo was born out of inevitability, it is a meeting point between
              technology and the tools we use as humans.
            </p>
          </div>
          <div className="received-message">
            <p className="received-message-p">
              We are focused on developing the most innovative technology in the
              most natural and simple way. Hence, Dory was created!
            </p>
          </div>
          <div className="received-message">
            <p className="received-message-p">
              Dory can be that companion everyone needs. It has the capacity to
              learn from you, and most surely you will learn from it.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="user-message-container"
        initial={{
          opacity: 0,
          x: 100,
          scale: 0.1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <div className="sent-message">
          <p className="received-message-p">
            WOW! But... what exactly is Dory?
          </p>
        </div>
        <div className="user-message-icon">
          <FaUser className="userLogo-message" />
        </div>
      </motion.div>

      <motion.div
        className="xolo-message-container"
        initial={{
          opacity: 0,
          x: -100,
          scale: 0.1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <div className="xolo-message-icon">
          <img className="xoloLogo-message" src={Logo} />
        </div>
        <div className="received-message-wrapper">
          <div className="received-message">
            <p className="received-message-p">
              Dory is an AI Companion developed around different technologies,
              capable of having full fledge conversations. You will be able to
              chat with her about any topic!
            </p>
          </div>
          {/* <div className="received-message">
            <p className="received-message-p">
              She will remember every important event you might tell her, as she
              has <br />
              memory!
            </p>
          </div> */}
          <div className="received-message">
            <p className="received-message-p">
              Of course, there will be lots more things we have to teach it, so
              you might need to be patient with her before sending memes to her.
              <span>
                {" "}
                <BsEmojiGrin />
              </span>
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="user-message-container"
        initial={{
          opacity: 0,
          x: 100,
          scale: 0.1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <div className="sent-message">
          <p className="received-message-p">
            Sounds very cool! How can I be a part of it?
          </p>
        </div>
        <div className="user-message-icon">
          <FaUser className="userLogo-message" />
        </div>
      </motion.div>

      <motion.div
        className="xolo-message-container"
        initial={{
          opacity: 0,
          x: -100,
          scale: 0.1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <div className="xolo-message-icon">
          <img className="xoloLogo-message" src={Logo} />
        </div>
        <div className="received-message">
          <p className="received-message-p">
            You'll need to subscribe by clicking below. Make sure to browse our
            website for any other questions, or feel free to contact us!
          </p>
        </div>
      </motion.div>

      <div className="messages-section-button-container">
        <Link
          className="messages-section-button1-textenter"
          to="https://buy.stripe.com/14k3eV1WV0eQ99K6op"
        >
          Start your subscription!
        </Link>
        <Link
          className="messages-section-button2-textenter"
          to="https://buy.stripe.com/14k3eV1WV0eQ99K6op"
        >
          <IoSend className="messages-section-button2-icon" />
        </Link>
      </div>
    </div>
  );
}

export default MessagesSection