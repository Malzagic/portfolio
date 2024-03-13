import React from "react";

import styles from "./Tiles.module.css";

export default function Tiles({ title, text }) {
  return (
    <div className={styles.box}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
