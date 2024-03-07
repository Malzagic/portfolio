import React, { useState } from "react";

import styles from "./Col.module.css";

const Col = (props) => {
  const [isActive, setIsActive] = useState(false);

  const hoverEffectAdd = () => {
    setIsActive(true);
  };

  const hoverEffectRemove = () => {
    setIsActive(false);
  };

  return (
    <div
      className={styles.col}
      onMouseEnter={hoverEffectAdd}
      onMouseLeave={hoverEffectRemove}
    >
      <div className={`${styles.colRounded} ${isActive && styles.active}`}>
        <h5 className={`${isActive ? styles.active : styles.title}`}>{props.title}</h5>
        {props.children}
      </div>
    </div>
  );
};

export default Col;
