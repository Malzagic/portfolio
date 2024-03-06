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

export default function SkillsGrid() {
  return (
    <Grid aos="fade-right">
      <Col title={"HTML"}>
        <FaHtml5 className="mt2 fs-3" />
      </Col>
      <Col title={"CSS"}>
        <FaCss3Alt className="mt2 fs-3" />
      </Col>
      <Col title={"JavaScript"}>
        <SiJavascript className="mt2 fs-3" />
      </Col>
      <Col title={"ReactJS"}>
        <FaReact className="mt2 fs-3" />
      </Col>
      <Col title={"NextJS"}>
        <SiNextdotjs className="mt2 fs-3" />
      </Col>
      <Col title={"NodeJS"}>
        <FaNode className="mt2 fs-3" />
      </Col>
      <Col title={"REST API"}>
        <VscJson className="mt2 fs-3" />
      </Col>
      <Col title={"JQuery"}>
        <SiJquery className="mt2 fs-3" />
      </Col>
      <Col title={"TypeScript"}>
        <SiTypescript className="mt2 fs-3" />
      </Col>
      <Col title={"MongoDB"}>
        <SiMongodb className="mt2 fs-3" />
      </Col>
      <Col title={"SQLite"}>
        <SiSqlite className="mt2 fs-3" />
      </Col>
      <Col title={"Bootstrap"}>
        <FaBootstrap className="mt2 fs-3" />
      </Col>
      <Col title={"TailwindCSS"}>
        <SiTailwindcss className="mt2 fs-3" />
      </Col>
      <Col title={"Firebase"}>
        <SiFirebase className="mt2 fs-3" />
      </Col>
      <Col title={"Python"}>
        <FaPython className="mt2 fs-3" />
      </Col>
      <Col title={"Linux"}>
        <FaLinux className="mt2 fs-3" />
      </Col>
      <Col title={"Nginx"}>
        <SiNginx className="mt2 fs-3" />
      </Col>
      {/* <Col title={"HTML"}>
        <FontAwesomeIcon icon={faHtml5} className="mt2 fs-3" />
      </Col>
      <Col title={"CSS"}>
        <FontAwesomeIcon icon={faCss3Alt} className="mt2 fs-3" />
      </Col>
      <Col title={"JavaScript"}>
        <FontAwesomeIcon icon={faJs} className="mt2 fs-3" />
      </Col>
      <Col title={"Scss"}>
        <FontAwesomeIcon icon={faSass} className="mt2 fs-3" />
      </Col>
      <Col title={"Styled Components"}>
        <FontAwesomeIcon icon={faReact} className="mt2 fs-3" />
      </Col>
      <Col title={"Github"}>
        <FontAwesomeIcon icon={faGit} className="mt2 fs-3" />
      </Col>
      <Col title={"NodeJS"}>
        <FontAwesomeIcon icon={faNodeJs} className="mt2 fs-3" />
      </Col>
      <Col title={"Bootstrap"}>
        <FontAwesomeIcon icon={faBootstrap} className="mt2 fs-3" />
      </Col>
      <Col title={"MongoDB"}>
        <FontAwesomeIcon icon={faMdb} className="mt2 fs-3" />
      </Col>
      <Col title={"Npm"}>
        <FontAwesomeIcon icon={faNpm} className="mt2 fs-3" />
      </Col> */}
    </Grid>
  );
}
