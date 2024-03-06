import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

import styles from "./SocialMediaBars.module.css";

const SocialMediaBars = () => {
  return (
    <ul className={styles.socialmediaBar}>
      <li className={styles.socialmediaLink}>
        <Link
          to={"https://www.facebook.com/przemek.mloczkowski/"}
          target="_blank"
        >
          <FaFacebookF />
        </Link>
      </li>
      <li className={styles.socialmediaLink}>
        <Link to={"https://github.com/Malzagic"} target="_blank">
          <FaGithub />
        </Link>
      </li>
      <li className={styles.socialmediaLink}>
        <Link
          to={
            "https://www.linkedin.com/in/przemys%C5%82aw-m%C5%82oczkowski-840543242/"
          }
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMediaBars;
