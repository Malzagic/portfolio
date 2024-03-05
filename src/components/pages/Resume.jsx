import React from "react";
import { Link } from "react-router-dom";

import Section from "../../shared/components/UI/section/Section";
import Button from "../../shared/components/UI/buttons/Button";
import ResumeBox from "../resume/ResumeBox";
import { personalData } from "../../util/data";

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
        <div className="resume-wrapper" data-aos="fade-right">
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2010/2011 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">
                Secondary Technical School
              </h5>
              <h6 className="resume-details-link">
                <Link to={`https://zscku.pl/`} target="_blank">
                  ZS CKU nr 2 w Pyrzycach
                </Link>
              </h6>
              <p>
                In 2010/2011 school year I have end Technical School ZS CKU nr 2
                in Pyrzyce, on IT profile with specialization of web
                applications.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2023 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">
                Higher School of Vocational Training
              </h5>
              <h6 className="resume-details-link">
                <Link to={`https://studia-online.pl`} target="_blank">
                  WSKZ University
                </Link>
              </h6>
              <p>
                I started studying cybersecurity at the Higher Vocational School
                (WSKZ in Wrocław) majoring in internal security in Poland in
                2023.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2021 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">
                Modern HTML & CSS from beginning(including SASS)
              </h5>
              <h6 className="resume-details-link">
                <Link
                  to={`https://www.udemy.com/course/modern-html-css-from-the-beginning/`}
                  target="_blank"
                >
                  Udemy Course
                </Link>
              </h6>
              <p>
                In 17 October 2017 - Complete full course from udemy platform in
                english languages by Brad Traversy.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2022 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">JavaScript</h5>
              <h6 className="resume-details-link">
                <Link
                  to={`https://www.udemy.com/course/javascript-jedyny-kurs-ktorego-potrzebujesz/`}
                  target="_blank"
                >
                  Udemy Course
                </Link>
              </h6>
              <p>
                In 4 April 2022 - Complete full course from udemy platform in
                polish languages by Mateusz Maj.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2022 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">
                JavaScript - 10 project's in clear JS
              </h5>
              <h6 className="resume-details-link">
                <Link
                  to={`https://www.udemy.com/course/10-projektow-w-czystym-javascript-cz-1/`}
                  target="_blank"
                >
                  Udemy Course
                </Link>
              </h6>
              <p>
                In 14 June 2022 - Complete full course from udemy platform in
                polish languages by Mateusz Maj.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2022 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">
                15 components for websites
              </h5>
              <h6 className="resume-details-link">
                <Link
                  to={`https://www.udemy.com/course/komponenty-na-strony-www/`}
                  target="_blank"
                >
                  Udemy Course
                </Link>
              </h6>
              <p>
                In 22 June 2022 - Complete full course from udemy platform in
                polish languages by Mateusz Maj. It's a course where I practice
                how to use HTML, CSS & JS to combine into a tricky components
                for websites.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2022 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">
                Vanilla JavaScript - 15 project's with OOP
              </h5>
              <h6 className="resume-details-link">
                <Link
                  to={`https://www.udemy.com/course/vanilla-js-stworz-projekty-w-czystym-javascript-od-podstaw/`}
                  target="_blank"
                >
                  Udemy Course
                </Link>
              </h6>
              <p>
                In 5 July 2022 - Complete full course from udemy platform in
                polish languages by Kuba Wąsikowski.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2022 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">
                Web development - from zero to master
              </h5>
              <h6 className="resume-details-link">
                <Link
                  to={`https://www.udemy.com/course/web-developer-bootcamp-tworzenie-stron-www-od-zera-do-mastera/`}
                  target="_blank"
                >
                  Udemy Course
                </Link>
              </h6>
              <p>
                In 31 July 2022 - Complete full course from udemy platform in
                polish languages by Kuba Wąsikowski.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2022 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">
                Modern JavaScript from the beginning
              </h5>
              <h6 className="resume-details-link">
                <Link
                  to={`https://www.udemy.com/course/modern-javascript-from-the-beginning/`}
                  target="_blank"
                >
                  Udemy Course
                </Link>
              </h6>
              <p>
                In 31 July 2022 - Complete full course from udemy platform in
                english languages by Brad Traversy.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2023 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">
                React, NodeJS, Express & MongoDB - MERN Stack
              </h5>
              <h6 className="resume-details-link">
                <Link
                  to={`https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/`}
                  target="_blank"
                >
                  Udemy Course
                </Link>
              </h6>
              <p>
                In 2023 - I started and end course from Maximilian Schwarzmuller
                about being full/mern stack developer. Learn how to use NodeJs,
                ExpressJS combine with React and MongoDB.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2023 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">Understanding TypeScript</h5>
              <h6 className="resume-details-link">
                <Link
                  to={`https://www.udemy.com/course/understanding-typescript/`}
                  target="_blank"
                >
                  Udemy Course
                </Link>
              </h6>
              <p>
                In 2023 - I started and continue course from Maximilian
                Schwarzmuller about typescript languages to understand more for
                projects in React.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2023 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">
                The Complete 2023 Web Development Bootcamp
              </h5>
              <h6 className="resume-details-link">
                <Link
                  to={`https://www.udemy.com/course/the-complete-web-development-bootcamp/`}
                  target="_blank"
                >
                  Udemy Course
                </Link>
              </h6>
              <p>
                In 2023 - Complete full course from DR. Angela Yu about complete
                knownlage for web development from frontend to backend.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2023 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">
                Introduction to Cybersecurity
              </h5>
              <h6 className="resume-details-link">
                <Link
                  to={`https://www.credly.com/badges/49438b78-d130-496d-852f-54dbdbc05bb4/public_url`}
                  target="_blank"
                >
                  CISCO Academy
                </Link>
              </h6>
              <p>
                In 2023 - Cisco verifies the earner of this badge successfully
                completed the Introduction to Cybersecurity course. The holder
                of this student-level credential has introductory knowledge of
                cybersecurity, including the global implications of cyber
                threats on industries, and why cybersecurity is a growing
                profession. They understand vulnerabilities and threat detection
                and defense. They also have insight into opportunities available
                with pursuing cybersecurity certifications.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Resume;
