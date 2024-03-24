import React from 'react'
import { NavLink as Link } from "react-router-dom";
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
      <div className="xolo-message-container">
        <div className="xolo-message-icon">
          <img className="xoloLogo-message" src={Logo} />
        </div>
        <div className="received-message">Hello! Welcome to Xolo!</div>
      </div>

      <div className="user-message-container">
        <div className="sent-message">Hello!</div>
        <div className="user-message-icon">
          <FaUser className="userLogo-message" />
        </div>
      </div>

      <div className="xolo-message-container">
        <div className="xolo-message-icon">
          <img className="xoloLogo-message" src={Logo} />
        </div>
        <div className="received-message">
          <p className="received-message-p">
            I will be showing you around and introduce you to Dory!
          </p>
        </div>
      </div>

      <div className="user-message-container">
        <div className="sent-message">Sure thing, please tell me!</div>
        <div className="user-message-icon">
          <FaUser className="userLogo-message" />
        </div>
      </div>

      <div className="xolo-message-container">
        <div className="xolo-message-icon">
          <img className="xoloLogo-message" src={Logo} />
        </div>
        <div className="received-message-wrapper">
          <div className="received-message">
            <p className="received-message-p">
              Xolo was born out of inevitablility, it is a meeting point between technology
              and the tools <br />
              we use as humans.
            </p>
          </div>
          <div className="received-message">
            <p className="received-message-p">
              We are focused on developing the most innovative technology in the most natural
              and simple <br />
              way. Hence, Dory was created!
            </p>
          </div>
          <div className="received-message">
            <p className="received-message-p">
              Dory can be that companion everyone needs. It has
              the <br />
              cappacity to learn from you, and most surely you will learn from
              it.
            </p>
          </div>
        </div>
      </div>

      <div className="user-message-container">
        <div className="sent-message">WOW! But... what exactly is Dory?</div>
        <div className="user-message-icon">
          <FaUser className="userLogo-message" />
        </div>
      </div>

      <div className="xolo-message-container">
        <div className="xolo-message-icon">
          <img className="xoloLogo-message" src={Logo} />
        </div>
        <div className="received-message-wrapper">
          <div className="received-message">
            <p className="received-message-p">
              Dory is a, AI Companion developed arround different technologies,<br />
              cappable of having full fledge conversations. You
              will be able to <br />
              ask her any question, and chat with her about any topic!
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
              Of course, there will be lots more things we have to teach
              it, so you
              <br />
              might need to be patient with her before sending memes to her.
              <span>
                {" "}
                <BsEmojiGrin />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="user-message-container">
        <div className="sent-message">
          <p className="received-message-p">
            Sounds very cool! How can I be a part of it?
          </p>
        </div>
        <div className="user-message-icon">
          <FaUser className="userLogo-message" />
        </div>
      </div>

      <div className="xolo-message-container">
        <div className="xolo-message-icon">
          <img className="xoloLogo-message" src={Logo} />
        </div>
        <div className="received-message">
          <p className="received-message-p">
            You'll need to subscribe by clicking below. Make sure to
            browse our <br />
            website for any other question, or feel free to contact us!
          </p>
        </div>
      </div>

      <div className="messages-section-button-container">
        <Link
          className="messages-section-button1-textenter"
          to="https://buy.stripe.com/4gw2aR7hfaTugCc6oo"
        >
          Start your subscription!
        </Link>
        <Link
          className="messages-section-button2-textenter"
          to="https://buy.stripe.com/4gw2aR7hfaTugCc6oo"
        >
          <IoSend className="messages-section-button2-icon" />
        </Link>
      </div>
    </div>
  );
}

export default MessagesSection