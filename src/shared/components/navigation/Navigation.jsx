import React, { useState } from "react";
import {
  Link
} from "react-router-dom";

import my_picture from '../../../assets/Kwadrat.jpg'
import './Navigation.css';

const Navigation = () => {

  const date = new Date();
  const year = date.getFullYear();

  const [isActive, setIsActive] = useState(false);
  const [useTextMenu, setUseTextMenu] = useState(false);

  const toggleBurgerMenu = () => {
    setIsActive(!isActive);
    setUseTextMenu(!useTextMenu);
  }

  return (
    <>
      <nav className={!isActive ? 'main-nav' : 'main-nav menu-active'}>
        <div className={!isActive ? 'burger-menu' : 'burger-menu toggler'} onClick={toggleBurgerMenu}>
          <span></span><span></span><span></span>
        </div>
        <div className={!isActive ? 'nav' : 'nav nav-active'}>
          <div className="nav-image">
            <picture className="nav-logo">
              <Link to="/"><img className="logo" src={my_picture} alt="Myself portret" /></Link>
            </picture>
          </div>
          <div className="nav-menu">
            <Link className="nav-link" to="/" onClick={useTextMenu && toggleBurgerMenu}>Home</Link>
            <Link className="nav-link" to="/about" onClick={useTextMenu && toggleBurgerMenu}>About</Link>
            <Link className="nav-link" to="/resume" onClick={useTextMenu && toggleBurgerMenu}>Resume</Link>
            <Link className="nav-link" to="/portfolio" onClick={useTextMenu && toggleBurgerMenu}>Portfolio</Link>
            <Link className="nav-link" to="/contact" onClick={useTextMenu && toggleBurgerMenu}>Contact</Link>
          </div>
          <div className="nav-copyrights">
            <p className="copyright-title">&copy; {year} <b>Przemysław Młoczkowski</b></p>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation;