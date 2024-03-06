import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.css";

export default function Button({ href, target, button, children }) {
  return (
    <Link
      className={button ? styles.button : styles.btn}
      to={href}
      target={target && "_blank"}
    >
      {children}
    </Link>
  );
}
