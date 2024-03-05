import React from "react";
import Section from "../../shared/components/UI/section/Section";
import Row from "../../shared/components/UI/containers/Row";
import Grid from "../../shared/components/UI/containers/Grid";
import Col from "../../shared/components/UI/containers/Col";
import AboutMe from "../about/AboutMe";
import Tiles from "../../shared/components/UI/tilesbox/Tiles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faSass,
  faGit,
  faNodeJs,
  faBootstrap,
  faMdb,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

import "./About.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <>
      <Section title="About">
        <Row>
          <AboutMe />
        </Row>
      </Section>
      <Section title="Services">
        <Row>
          <Tiles
            title={"Web development"}
            text={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
            ś
          />
          <Tiles
            title={"Web development"}
            text={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
          />
          <Tiles
            title={"Web development"}
            text={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
          />
        </Row>
      </Section>
      <Section title="Skills">
        <Grid>
          <Col title={"React"}>
            <FontAwesomeIcon icon={faReact} className="mt2 fs-3" />
          </Col>
          <Col title={"HTML"}>
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
          </Col>
        </Grid>
      </Section>
    </>
  );
};

export default About;
