import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import my_picture from "../../../assets/Kwadrat.jpg";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const date = new Date();
  const year = date.getFullYear();

  const [isActive, setIsActive] = useState(false);
  const [useTextMenu, setUseTextMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleBurgerMenu = () => {
    setIsActive(!isActive);
    setUseTextMenu(!useTextMenu);
  };

  let mainMenuToggler = isActive
    ? `${styles.mainNav} ${styles.menuActive}`
    : styles.mainNav;
  let burgerMenuToggler = isActive
    ? `${styles.burgerMenu} ${styles.toggler}`
    : styles.burgerMenu;
  let navToggler = isActive ? `${styles.navActive}` : styles.nav;

  useEffect(() => {
    const handlerWindowResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handlerWindowResize);

    return () => {
      window.removeEventListener("resize", handlerWindowResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 756) {
      setIsActive(false);
    }
  }, [screenWidth]);

  return (
    <>
      <nav className={mainMenuToggler}>
        <div className={burgerMenuToggler} onClick={toggleBurgerMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={navToggler}>
          <div className={styles.navImage}>
            <picture className={styles.navLogo}>
              <Link to="/">
                <img
                  className={styles.logo}
                  src={my_picture}
                  alt="Myself portret"
                />
              </Link>
            </picture>
          </div>
          <div className={styles.navMenu}>
            <Link
              className={styles.navLink}
              to="/"
              onClick={useTextMenu && toggleBurgerMenu}
            >
              Home
            </Link>
            <Link
              className={styles.navLink}
              to="/about"
              onClick={useTextMenu && toggleBurgerMenu}
            >
              About
            </Link>
            <Link
              className={styles.navLink}
              to="/resume"
              onClick={useTextMenu && toggleBurgerMenu}
            >
              Resume
            </Link>
            <Link
              className={styles.navLink}
              to="/portfolio"
              onClick={useTextMenu && toggleBurgerMenu}
            >
              Portfolio
            </Link>
            <Link
              className={styles.navLink}
              to="/contact"
              onClick={useTextMenu && toggleBurgerMenu}
            >
              Contact
            </Link>
          </div>
          <div className={styles.navCopyrights}>
            <p className={styles.title}>
              &copy; {year} <b>Przemysław Młoczkowski</b>
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
