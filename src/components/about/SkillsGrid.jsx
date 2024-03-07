import React from "react";
import Grid from "../../shared/components/UI/containers/Grid";
import Col from "../../shared/components/UI/containers/Col";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaBootstrap,
  FaPython,
  FaLinux,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiJquery,
  SiTypescript,
  SiMongodb,
  SiSqlite,
  SiTailwindcss,
  SiFirebase,
  SiNginx,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";

import styles from "./SkillGrid.module.css"

export default function SkillsGrid() {
  return (
    <Grid aos="fade-right">
      <Col title={"HTML"}>
        <FaHtml5 className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
      <Col title={"CSS"}>
        <FaCss3Alt className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
      <Col title={"JavaScript"}>
        <SiJavascript className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
      <Col title={"ReactJS"}>
        <FaReact className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
      <Col title={"NextJS"}>
        <SiNextdotjs className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
      <Col title={"NodeJS"}>
        <FaNode className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
      <Col title={"REST API"}>
        <VscJson className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
      <Col title={"JQuery"}>
        <SiJquery className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
      <Col title={"TypeScript"}>
        <SiTypescript className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
      <Col title={"MongoDB"}>
        <SiMongodb className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
      <Col title={"SQLite"}>
        <SiSqlite className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
      <Col title={"Bootstrap"}>
        <FaBootstrap className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
      <Col title={"TailwindCSS"}>
        <SiTailwindcss className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
      <Col title={"Firebase"}>
        <SiFirebase className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
      <Col title={"Python"}>
        <FaPython className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
      <Col title={"Linux"}>
        <FaLinux className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
      <Col title={"Nginx"}>
        <SiNginx className={`${styles.fs3} ${styles.mt2}`} />
      </Col>
    </Grid>
  );
}
