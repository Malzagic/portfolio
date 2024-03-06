import React from "react";

import styles from "./Row.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Row({ aos, children }) {
  return <div data-aos={aos} className={styles.row}>{children}</div>;
}
