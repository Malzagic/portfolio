import React from "react";

import styles from './AboutList.module.css'

export default function AboutList() {
  const age = Math.floor(new Date().getFullYear() - 1991)

  return (
    <ul className={styles.contentList}>
      <li className={styles.listItem}>
        <b>Full Name</b>
        Przemysław Młoczkowski
      </li>
      <li className={styles.listItem}>
        <b>Age</b>
        {age}
      </li>
      <li className={styles.listItem}>
        <b>Nationality</b>
        Poland
      </li>
      <li className={styles.listItem}>
        <b>Languages</b>
        Polish - Native, English - B2
      </li>
      <li className={styles.listItem}>
        <b>Freelance</b>
        Available
      </li>
    </ul>
  );
}
