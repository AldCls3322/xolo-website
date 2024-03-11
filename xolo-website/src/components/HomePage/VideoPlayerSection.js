import React from "react";
import video from "../imgs/walking-sun.mp4";
import './VideoPlayerSection.css';

const VideoPlayerSection = () => {
  return (
    <div className="Container" id="videoplayer-section-container">
      <div className="videoplayer-section-blackbox" />
      <video className="videoplayer-section-videoplayer" src={video} autoPlay loop muted />
      <div className="videoplayer-section-text-container">
        <div className="videoplayer-section-text-title-container">Try the beyond boundaries of AI</div>
        <div className="videoplayer-section-text-p-container">
          Dory will be the friend that will always be for you.
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerSection;