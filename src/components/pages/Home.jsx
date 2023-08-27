import React from "react";

import Container from '../../shared/components/UX/containers/Container';
import SocialMediaBars from "../../shared/components/UX/socialMediaBars/SocialMediaBars";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './Home.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Home = () => {
  const text = "Przemysław Młoczkowski";

  return (
      <header className="main-header" data-aos="fade-right">
        <Container>
          <h1 className="header-title">
            Hi, I am 
            <span className="title-name"><b> {text}</b></span>
          </h1>
          <p className="header-text">I am a fullstack webdeveloper. I can create a visible, usable and more interactive website with attractive animations. I invite you to see more about me.</p>
          <SocialMediaBars  
            ul="socialmedia-bar" 
            li="socialmedia-link" 
            icon1={faFacebookF} 
            icon2={faGithub} 
            icon3={faLinkedinIn}
            page1={"https://www.facebook.com/przemek.mloczkowski/"}
            page2={"https://github.com/Malzagic"}
            page3={"https://www.linkedin.com/in/przemys%C5%82aw-m%C5%82oczkowski-840543242/"}
          />
        </Container>
      </header>
  )
}

export default Home;