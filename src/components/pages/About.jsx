import React from "react";
import Section from "../../shared/components/UI/section/Section";
import Row from "../../shared/components/UI/containers/Row";
import Grid from "../../shared/components/UI/containers/Grid";
import Col from "../../shared/components/UI/containers/Col";
import LinkButton from "../../shared/components/UI/buttons/LinkButton";
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

import my_picture from "../../assets/Instagram-1.jpg";
import cv from "../../assets/cv/Frontend Developer -CVENG.pdf";
import "./About.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  const date = new Date();
  const year = date.getFullYear();
  const myAge = Math.floor(year - 1991);

  return (
    <>
      <Section title="About">
        <Row>
          <div className="about-image">
            <div className="image-box">
              <img src={my_picture} alt="myself portrait" />
            </div>
          </div>
          <div className="about-content">
            <h3 className="content-title">
              I am
              <span className="content-title-theme">
                {" "}
                Przemysław Młoczkowski
              </span>
            </h3>
            <p className="content-text">
              Hi, I am a self-taught, passionate programmer who started in 2018
              and is still learning. My main focus is web development,
              especially in the MERN stack. I've already accumulated a lot of
              knowledge on the frontend, and now I'm supplementing that by
              learning the backend. I never stop, so what you see now on my site
              may change in the future. Best regards and feel free to take a
              look at my work.
            </p>
            <ul className="content-list">
              <li className="content-list-item">
                <b>Full Name</b>
                Przemysław Młoczkowski
              </li>
              <li className="content-list-item">
                <b>Age</b>
                {myAge}
              </li>
              <li className="content-list-item">
                <b>Nationality</b>
                Poland
              </li>
              <li className="content-list-item">
                <b>Languages</b>
                Polish "Native", English "B2"
              </li>
              <li className="content-list-item">
                <b>Freelance</b>
                Available
              </li>
            </ul>
            <LinkButton link={cv} text={"Download CV"} get={true} />
          </div>
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
