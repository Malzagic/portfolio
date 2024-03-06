import React from "react";

import Container from "../../shared/components/UI/containers/Container";
import SocialMediaBars from "../../shared/components/UI/socialMediaBars/SocialMediaBars";

import styles from "./Home.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  const text = "Przemysław Młoczkowski";

  return (
    <header className={styles.mainHeader} data-aos="fade-right">
      <Container>
        <h1 className={styles.title}>
          Hi, I am
          <span className={styles.titleName}>
            <b> {text}</b>
          </span>
        </h1>
        <p className={styles.text}>
          I am a fullstack webdeveloper. I can create a visible, usable and more
          interactive website with attractive animations. I invite you to see
          more about me.
        </p>
        <SocialMediaBars />
      </Container>
    </header>
  );
};

export default Home;
