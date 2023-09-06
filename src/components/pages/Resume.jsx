import React from "react";
import { Link } from "react-router-dom";

import Container from "../../shared/components/UX/containers/Container";
import SectionTitle from "../../shared/components/UX/sectionTitles/SectionTitle";

import './Resume.css';


import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Resume = () => {
  return (
    <section className="resume">
      <Container>
        <SectionTitle title='Work Experience' />
        <div className="resume-wrapper" data-aos="fade-right">
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2018 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">IT Support Technician</h5>
              <h6 className="resume-details-link"><Link to={`https://www.facebook.com/mpowroznikcom`} target="_blank">mpowroznik.com</Link></h6>
              <p>IT services and support for cooperating companies. Creating websites from scratch and by using CMS ( Wordpress, Elementar ).</p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2022 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">Technical School Teacher</h5>
              <h6 className="resume-details-link"><Link to={`https://zscku.pl/`} target="_blank">zscku.pl</Link></h6>
              <p>Teaching about computers technologies, networks and severs science. Working with group of students.</p>
            </div>
          </div>
        </div>
        <SectionTitle title='Education & Qualifications' className={'mt-2'} />
        <div className="resume-wrapper" data-aos="fade-right">
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2010/2011 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">Technical School</h5>
              <h6 className="resume-details-link"><Link to={`https://zscku.pl/`} target="_blank">ZS CKU nr 2 w Pyrzycach</Link></h6>
              <p>
                In 2010/2011 school year I have end Technical School ZS CKU nr 2 in Pyrzyce, on IT profile with specialization of web applications
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2021 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">Modern HTML & CSS from beginning(including SASS)</h5>
              <h6 className="resume-details-link"><Link to={`https://www.udemy.com/course/modern-html-css-from-the-beginning/`} target="_blank">Udemy Course</Link></h6>
              <p>
                In 17 October 2017 - Complete full course from udemy platform in english languages by Brad Traversy.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2022 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">JavaScript</h5>
              <h6 className="resume-details-link"><Link to={`https://www.udemy.com/course/javascript-jedyny-kurs-ktorego-potrzebujesz/`} target="_blank">Udemy Course</Link></h6>
              <p>
                In 4 April 2022 - Complete full course from udemy platform in polish languages by Mateusz Maj.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2022 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">JavaScript - 10 project's in clear JS</h5>
              <h6 className="resume-details-link"><Link to={`https://www.udemy.com/course/10-projektow-w-czystym-javascript-cz-1/`} target="_blank">Udemy Course</Link></h6>
              <p>
                In 14 June 2022 - Complete full course from udemy platform in polish languages by Mateusz Maj.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2022 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">15 components for websites</h5>
              <h6 className="resume-details-link"><Link to={`https://www.udemy.com/course/komponenty-na-strony-www/`} target="_blank">Udemy Course</Link></h6>
              <p>
                In 22 June 2022 - Complete full course from udemy platform in polish languages by Mateusz Maj. It's a course where I practice how to use HTML, CSS & JS to combine into a tricky components for websites.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2022 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">Vanilla JavaScript - 15 project's with OOP</h5>
              <h6 className="resume-details-link"><Link to={`https://www.udemy.com/course/vanilla-js-stworz-projekty-w-czystym-javascript-od-podstaw/`} target="_blank">Udemy Course</Link></h6>
              <p>
                In 5 July 2022 - Complete full course from udemy platform in polish languages by Kuba Wąsikowski.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2022 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">Web development - from zero to master</h5>
              <h6 className="resume-details-link"><Link to={`https://www.udemy.com/course/web-developer-bootcamp-tworzenie-stron-www-od-zera-do-mastera/`} target="_blank">Udemy Course</Link></h6>
              <p>
                In 31 July 2022 - Complete full course from udemy platform in polish languages by Kuba Wąsikowski.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2022 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">Modern JavaScript from the beginning</h5>
              <h6 className="resume-details-link"><Link to={`https://www.udemy.com/course/modern-javascript-from-the-beginning/`} target="_blank">Udemy Course</Link></h6>
              <p>
                In 31 July 2022 - Complete full course from udemy platform in english languages by Brad Traversy.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2023 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">React, NodeJS, Express & MongoDB - MERN Stack</h5>
              <h6 className="resume-details-link"><Link to={`https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/`} target="_blank">Udemy Course</Link></h6>
              <p>
                In 2023 - I started and continue course from Maximilian Schwarzmuller about being full/mern stack developer.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2023 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">Understanding TypeScript</h5>
              <h6 className="resume-details-link"><Link to={`https://www.udemy.com/course/understanding-typescript/`} target="_blank">Udemy Course</Link></h6>
              <p>
                In 2023 - I started and continue course from Maximilian Schwarzmuller about typescript languages to understand more for projects in React.
              </p>
            </div>
          </div>
          <div className="resume-box">
            <div className="resume-summary">
              <h6 className="resume-summary-title">2023 - Presents</h6>
            </div>
            <div className="resume-details">
              <h5 className="resume-details-title">The Complete 2023 Web Development Bootcamp</h5>
              <h6 className="resume-details-link"><Link to={`https://www.udemy.com/course/the-complete-web-development-bootcamp/`} target="_blank">Udemy Course</Link></h6>
              <p>
                In 2023 - Complete full course from DR. Angela Yu about complete knownlage for web development from frontend to backend.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}


export default Resume;