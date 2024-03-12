import React, {useEffect, useState} from 'react';
import { NavLink as Link } from "react-router-dom";
import { TfiMenu, TfiClose } from "react-icons/tfi";
import { MdDensityMedium, MdClose } from "react-icons/md";
import './Header.css';
import Logo from './imgs/xolowhite.png';

function Header({navToggle, isOpen}) {
    useEffect(() => {
        console.log(isOpen)
    }, []);
  return (
    isOpen ? 
    <div className='Container' id="header-container">
        <Link className='logoContainer' to='/'>
            <img className='xoloLogo' src={Logo} />
            <h3 className='xoloHeaderTitle'>XOLO</h3>
        </Link>
        <MdClose className='iconClose' onClick={navToggle} style={{opacity: !isOpen ? "0" : "1", transition: "all .2s", visibility: !isOpen ? "hidden" : "visible"}}/>
    </div>
    :
    <div className='Container' id="header-container" >
        <Link className='logoContainer' to='/'>
            <img className='xoloLogo' src={Logo} />
            <h3 className='xoloHeaderTitle'>XOLO</h3>
        </Link>
        <TfiMenu className='iconMenu' onClick={navToggle}/>
    </div>
  )
}

export default Header
