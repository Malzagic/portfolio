import React from "react";
import Container from "../../shared/components/UX/containers/Container";
import Row from "../../shared/components/UX/containers/Row";
import Grid from "../../shared/components/UX/containers/Grid";
import Col from "../../shared/components/UX/containers/Col";
import LinkButton from "../../shared/components/UX/buttons/LinkButton";
import Tiles from "../../shared/components/UX/tilesbox/Tiles";
import SectionTitle from "../../shared/components/UX/sectionTitles/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3Alt, faJs, faSass, faGit, faNodeJs, faBootstrap, faMdb, faNpm } from "@fortawesome/free-brands-svg-icons";

import my_picture from '../../assets/Instagram-1.jpg';
import './About.css'


import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const About = () => {

  const date = new Date();
  const year = date.getFullYear();
  const myAge = Math.floor(year - 1991);

  return (
    <section className="about-me">
      <Container>
        <div className="about-area" data-aos="fade-right">
          <SectionTitle title='About' />
          <Row>
            <div className="about-image">
              <img src={my_picture} alt="myself portrait" />
            </div>
            <div className="about-content">
              <h3 className="content-title">
                I am
                <span className="content-title-theme"> Przemysław Młoczkowski</span>
              </h3>
              <p className="content-text">Hi, I am self-tought junior frontend developer programmer and a little bit of full stack MERN. I can create visible, usable and more interactive website with attractive animations. I can also create web and trying to start create a mobile applications. For now I am starting with flutter framework and dart language but I also working with react and javascript.</p>
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
              <LinkButton text={"Download CV"} />
            </div>
          </Row>
        </div>
      </Container>
      <Container>
        <div className="skills-area" data-aos="fade-right">
          <SectionTitle title='Services' />
          <Row>
            <Tiles
              title={'Web development'}
              text={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
              ś />
            <Tiles
              title={'Web development'}
              text={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
            />
            <Tiles
              title={'Web development'}
              text={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
            />
          </Row>
        </div>
      </Container>
      <Container>
        <div className="skills-area" data-aos="fade-right">
          <SectionTitle title='Skills' />
          <Grid>
            <Col title={"React"}><FontAwesomeIcon icon={faReact} className="mt2 fs-3" /></Col>
            <Col title={"HTML"}><FontAwesomeIcon icon={faHtml5} className="mt2 fs-3" /></Col>
            <Col title={"CSS"}><FontAwesomeIcon icon={faCss3Alt} className="mt2 fs-3" /></Col>
            <Col title={"JavaScript"}><FontAwesomeIcon icon={faJs} className="mt2 fs-3" /></Col>
            <Col title={"Scss"}><FontAwesomeIcon icon={faSass} className="mt2 fs-3" /></Col>
            <Col title={"Styled Components"}><FontAwesomeIcon icon={faReact} className="mt2 fs-3" /></Col>
            <Col title={"Github"}><FontAwesomeIcon icon={faGit} className="mt2 fs-3" /></Col>
            <Col title={"NodeJS"}><FontAwesomeIcon icon={faNodeJs} className="mt2 fs-3" /></Col>
            <Col title={"Bootstrap"}><FontAwesomeIcon icon={faBootstrap} className="mt2 fs-3" /></Col>
            <Col title={"MongoDB"}><FontAwesomeIcon icon={faMdb} className="mt2 fs-3" /></Col>
            <Col title={"Npm"}><FontAwesomeIcon icon={faNpm} className="mt2 fs-3" /></Col>
          </Grid>
        </div>
      </Container>
    </section>
  )
}


export default About;