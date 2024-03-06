import React from "react";
import Grid from "../../shared/components/UI/containers/Grid";
import Col from "../../shared/components/UI/containers/Col";

import { FaReact, FaHtml5 } from "react-icons/fa";

export default function SkillsGrid() {
  return (
    <Grid aos="fade-right">
      <Col title={"React"}>
        <FaReact className="mt2 fs-3" />
      </Col>
      <Col>
        <FaHtml5 className="mt2 fs-3"/>
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
