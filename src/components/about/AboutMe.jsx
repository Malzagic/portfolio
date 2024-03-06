import React from "react";

import AboutList from "./AboutList";
import Button from "../../shared/components/UI/buttons/Button";
import myPicture from "../../assets/Kwadrat.jpg";
import cv from "../../assets/cv/Frontend Developer -CVENG.pdf";

import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <>
      <div className={styles.imageContainer}>
        <div className={styles.imageBox}>
          <img src={myPicture} alt="auto portrait" />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.contentTitle}>
          I am 
          <span className={styles.titleSubject}> Przemysław Młoczkowski</span>
        </h3>
        <p className={styles.contentDetails}>
          Hi, I am a self-taught, passionate programmer who started in 2018 and
          is still learning. My main focus is web development, especially in the
          MERN stack. I've already accumulated a lot of knowledge on the
          frontend, and now I'm supplementing that by learning the backend. I
          never stop, so what you see now on my site may change in the future.
          Best regards and feel free to take a look at my work.
        </p>
        <AboutList />
        <Button href={`${cv}`} target="_blank" button download>
          Download CV
        </Button>
      </div>
    </>
  );
}
