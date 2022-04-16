import "./../../css/Header/Header.css";

import NavBar from "./NavBar.jsx";
import Hero from './Hero'
import './../../css/Header/Hero.css'
import img from "./../../Images/room.jpg";

function Header() {
  return (
    <header className="header text__bold">
      <div className="hero__img">
        <img src={img} alt="room" />
      </div>
      <div className="header__top">
        <NavBar />
        <Hero />
      </div>
    </header>
  );
}

export default Header;
