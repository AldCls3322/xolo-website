import React, {useEffect, useState} from 'react';
import { NavLink as Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { TfiMenu, TfiClose } from "react-icons/tfi";
import { MdDensityMedium, MdClose } from "react-icons/md";
import './Header.css';
import Logo from './imgs/xolowhite.png';

function Header({isOpen}) {
    const { scrollYProgress } = useScroll();
    const background = useTransform(
      scrollYProgress,
      [0, 0.1],
      ["var(--color-body80)", "var(--color-body98)"]
    );
    useEffect(() => {
      console.log(isOpen);
      console.log(scrollYProgress);
    }, []);
  return (
    <motion.div
      className="Container"
      id="header-container"
      style={{ background }}
    >
      <Link className="logoContainer" to="/">
        <img className="xoloLogo" src={Logo} />
        <h3 className="xoloHeaderTitle">XOLO</h3>
      </Link>
    </motion.div>
  );
}

export default Header
