import React from 'react';
import "./LoadingScreen.css";
import { motion } from "framer-motion";

const dotTransition = {
  repeat: Infinity,
  repeatType: "mirror",
  duration: 0.9,
};

function LoadingScreen() {
  return (
    <div className="loading-screen-container">
        <motion.div
            className="dot"
            animate={{ scale: [0.75, 1] }}
            transition={{
            ...dotTransition,
            delay: -0.9,
            }}
        />
        <motion.div
            className="dot"
            animate={{ scale: [0.75, 1] }}
            transition={{
            ...dotTransition,
            delay: -0.6,
            }}
        />
        <motion.div
            className="dot"
            animate={{ scale: [0.75, 1] }}
            transition={{
            ...dotTransition,
            delay: -0.3,
            }}
        />
    </div>
  );
}

export default LoadingScreen