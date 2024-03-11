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
        <div className="received-message">Hey!!</div>
      </div>

      <div className="user-message-container">
        <div className="sent-message">Hey...</div>
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
            Welcome to our webpage! I'm Xolo, and I'm here to show you what is
            Dory!! (:
          </p>
        </div>
      </div>

      <div className="user-message-container">
        <div className="sent-message">Sure thing, please tell me.</div>
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
              Xolo was born inevitably, it is a meeting point between technology
              and the tools <br />
              we use with our humanity.
            </p>
          </div>
          <div className="received-message">
            <p className="received-message-p">
              I'm focused on bringing you the latest tec in a the most natural
              and simple <br />
              way I can. Hence, Dory was created!
            </p>
          </div>
          <div className="received-message">
            <p className="received-message-p">
              Now with Dory... She can be that companion everyone needs. She has
              the <br />
              cappacity to learn from you, and most surely you will learn from
              her.
            </p>
          </div>
        </div>
      </div>

      <div className="user-message-container">
        <div className="sent-message">But... what exactly is Dory?</div>
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
              Dory is an AI cappable to have a full conversation with you. You
              will be able to <br />
              ask her any question, and chat with her about any topic!!
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
              Of course, there will be a lot more things we will need to teach
              her, so you
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
            Sounds interesting, how do I try her?
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
            You'll need to pay the subscription by clicking below. Make sure to
            browse our <br />
            website for any other question, or feel free to contact us (:
          </p>
        </div>
      </div>

      <div className="messages-section-button-container">
        <Link
          className="messages-section-button1-textenter"
          to="https://buy.stripe.com/4gw2aR7hfaTugCc6oo"
        >
          Subsribe by clicking here
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