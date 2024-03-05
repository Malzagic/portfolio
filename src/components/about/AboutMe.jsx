import React, { useEffect, useState } from "react";

import Button from "../../shared/components/UI/buttons/Button";

import my_picture from "../../assets/Instagram-1.jpg";
import cv from "../../assets/cv/Frontend Developer -CVENG.pdf";

import styles from "./AboutMe.module.css";

export default function AboutMe({ imageUri, alt }) {
  const [myAge, setMyAge] = useState();
  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    setMyAge(Math.floor(year - 1991));
  }, [year]);


  return (
    <>
      <div className={styles.imageContainer}>
        <div className={styles.imageBox}>
          <img src={my_picture} alt="myself portrait" />
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
        <Button href={`/${cv}`} get={true}>Download CV</Button>
      </div>
    </>
  );
}
