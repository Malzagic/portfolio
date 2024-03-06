import React from "react";
import Section from "../../shared/components/UI/section/Section";
import Row from "../../shared/components/UI/containers/Row";
import AboutMe from "../about/AboutMe";
import Tiles from "../../shared/components/UI/tilesbox/Tiles";

import AOS from "aos";
import "aos/dist/aos.css";
import SkillsGrid from "../about/SkillsGrid";
AOS.init();

const About = () => {
  return (
    <>
      <Section title="About">
        <Row aos="fade-right">
          <AboutMe />
        </Row>
      </Section>
      <Section title="Services">
        <Row aos="fade-right">
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
        <SkillsGrid />
      </Section>
    </>
  );
};

export default About;
