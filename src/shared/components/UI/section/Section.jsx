import React from "react";

import Container from "../containers/Container";

import styles from "./Section.module.css";

export default function Section({ style, children }) {
  return (
    <section className={style ? `${styles.section} ${style}` : styles.section}>
      <Container>{children}</Container>
    </section>
  );
}
