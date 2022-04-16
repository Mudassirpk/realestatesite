import {useState} from 'react'

import { FaArrowsAltH } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {GiHamburgerMenu} from 'react-icons/gi'

import "./../../css/Header/NavBar.css";
const NavBar = () => {
  const [expanded,setExpanded] = useState(false)
  const [height,setHeight] = useState(window.innerWidth < 476 ? 0 : "auto")
  function openMenu(){
    setExpanded(!expanded)
  }

  return (
    <nav className="navbar__section">
      <h1 className="text__lg logo text__semibold">HomListli</h1>
      <ul className="links__list" style={{
        height:expanded?"18rem":null,
        padding:expanded?"2rem 0":null
      }} >
        <li className="text__normal">Home</li>
        <li className="text__normal">About</li>
        <li className="text__normal">Property</li>
        <li className="text__normal">Pages</li>
        <li className="text__normal">Contact</li>
      </ul>
      <div className="options" style={{
        height:expanded?"18rem":height,
        paddingTop:expanded?".5rem":0,
        paddingBottom:expanded?".5rem":0
      }}>
        <div className="icon__nav">
          <FaArrowsAltH />
        </div>
        <div className="icon__nav">
          <FaRegHeart />
        </div>
        <div className="icon__nav">
          <BsFillChatDotsFill className="icon__nav" />
        </div>
        <button className="action" >
          <div className="icon__wrapper">
            <AiOutlinePlusCircle />
          </div>
          <span>Add Property</span>
        </button>
      </div>
      <div className="hamburger">
        <GiHamburgerMenu onClick={openMenu} />
      </div>
    </nav>
  );
};

export default NavBar;
