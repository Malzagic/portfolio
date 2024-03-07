import React from "react";

import Section from "../../shared/components/UI/section/Section";
import ResumeBox from "../resume/ResumeBox";

import { personalData } from "../../data/data";

import styles from "./Resume.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Resume = () => {
  return (
    <>
      <Section title="Experience">
        {personalData.map((data, index) => (
          <div
            key={index}
            className={styles.resumeWrapper}
            data-aos="fade-right"
          >
            {data.experienceData.map((experience, expIndex) => (
              <ResumeBox
                key={expIndex}
                date={experience.date}
                title={experience.position}
                url={experience.link}
                company={experience.organization}
                details={experience.description}
              />
            ))}
          </div>
        ))}
      </Section>
      <Section title="Education & Qualifications">
        {personalData.map((data, index) => (
          <div
            key={index}
            className={styles.resumeWrapper}
            data-aos="fade-right"
          >
            {data.educationData.map((experience, expIndex) => (
              <ResumeBox
                key={expIndex}
                date={experience.date}
                title={experience.institution}
                url={experience.link}
                company={experience.organization}
                details={experience.description}
              />
            ))}
          </div>
        ))}
      </Section>
      <Section title="Courses">
        {personalData.map((data, index) => (
          <div
            key={index}
            className={styles.resumeWrapper}
            data-aos="fade-right"
          >
            {data.courseData.map((experience, expIndex) => (
              <ResumeBox
                key={expIndex}
                date={experience.date}
                title={experience.title}
                url={experience.link}
                company={experience.provider}
                details={experience.description}
              />
            ))}
          </div>
        ))}
      </Section>
    </>
  );
};

export default Resume;
