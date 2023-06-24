import React from "react";
import Container from '../../shared/components/UX/containers/Container';
import SectionTitle from "../../shared/components/UX/sectionTitles/SectionTitle";

import './Contact.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Contact = () => {
  return (
    <section>
      <Container>
        <SectionTitle title='Contact' />
        <form action="" className="contact-form" data-aos="fade-right">
          <label htmlFor="name">Name</label>
          <input type="text" id="name"/>
          <label htmlFor="surname">Surname</label>
          <input type="text" id="surname"/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email"/>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="50" rows="10" />
          <input type="submit" value={'submit'}/>
        </form>
      </Container>
    </section>
  )
}

export default Contact;