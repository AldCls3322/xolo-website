import React from 'react';
import {NavLink as Link} from 'react-router-dom';
import { MdHelp } from 'react-icons/md';
import "./Navbar2.css";

const Navbar = ({isOpen}) => {
    //console.log(visibility)
    return ( 
        <div className='Container' id="NavContainer" isOpen={isOpen} style={{transition: "all .2s", visibility: !isOpen ? "hidden" : "visible"}}>
            <div className='NavMenu'>
                <Link className="navOption" to="/">home</Link>
                <Link className="navOption" to="/about">about</Link>
                <Link className="navOption" to="/contact">contact</Link>
            </div>
        </div>
    )
}

export default Navbar