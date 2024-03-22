import React from 'react';
import { NavLink as Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import './Navbar.css';

function Menu({ toggle, backToTop }) {
  const { scrollYProgress } = useScroll();
  const background = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["var(--color-body80)", "var(--color-body98)"]
  );
  return (
    <motion.nav className="menu-container" style={{ background }}>
      <ul className="menu-ul">
        <Link className="menu-option" onClick={(toggle, backToTop)} to="/">
          Home
        </Link>
        <Link className="menu-option" onClick={(toggle, backToTop)} to="/about">
          About
        </Link>
        <Link className="menu-option" onClick={(toggle, backToTop)} to="/contact">
          Contact
        </Link>
      </ul>
    </motion.nav>
  );
}

export default Menu