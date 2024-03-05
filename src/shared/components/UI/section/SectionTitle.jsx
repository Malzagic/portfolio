import React from "react";

import styles from "./SectionTitle.module.css";

const SectionTitle = ({ title, style }) => {
  return (
    <div
      className={
        style ? `${styles.titleContainer} ${style}` : styles.titleContainer
      }
    >
      <h2 className={styles.titleTheme}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
