import React from "react";

import styles from "./Grid.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Grid({ aos, children }) {
  return <div data-aos={aos} className={styles.grid}>{children}</div>;
}
