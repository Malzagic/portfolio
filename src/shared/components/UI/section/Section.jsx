import React from "react";

import Container from "../containers/Container";

import styles from "./Section.module.css";
import SectionTitle from "./SectionTitle";

export default function Section({ title, style, children }) {
  return (
    <section className={style ? `${styles.section} ${style}` : styles.section}>
      <Container>
        <SectionTitle title={title}/>
        {children}
      </Container>
    </section>
  );
}
