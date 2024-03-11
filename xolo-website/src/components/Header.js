import React, {useEffect, useState} from 'react'
import { TfiMenu } from "react-icons/tfi";
import { CgClose } from "react-icons/cg";
import './Header.css';
import Logo from './imgs/xolowhite.png';

function Header({navToggle, isOpen}) {
    useEffect(() => {
        console.log(isOpen)
    }, []);
  return (
    isOpen ? 
    <div className='Container' id="headerContainer">
        <CgClose className='iconClose' onClick={navToggle} style={{opacity: !isOpen ? "0" : "1", transition: "all .2s", visibility: !isOpen ? "hidden" : "visible"}}/>
    </div>
    :
    <div className='Container' id="headerContainer">
        <div className='logoContainer'>
            <img className='xoloLogo' src={Logo} style={{opacity: !isOpen ? "1" : "0", transition: "all .2s", visibility: !isOpen ? "visible" : "hidden"}}/>
            <h3 className='xoloHeaderTitle'>XOLO</h3>
        </div>
        <TfiMenu className='iconMenu' onClick={navToggle}/>
    </div>
  )
}

export default Header
