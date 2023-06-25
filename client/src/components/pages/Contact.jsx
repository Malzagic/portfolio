import React, { useState } from "react";
import Container from '../../shared/components/UX/containers/Container';
import SectionTitle from "../../shared/components/UX/sectionTitles/SectionTitle";

import './Contact.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Contact = () => {

  const [nameValue, setNameValue] = useState('');
  const [surnameValue, setSurnameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messangeValue, setMessangeValue] = useState('');

  const sendEmailHandler = (e) => {
    e.preventDefault();

    const formData = {
      name: nameValue,
      surname: surnameValue,
      email: emailValue,
      messange: messangeValue,
    }

    console.log(formData);

  }


  return (
    <section>
      <Container>
        <SectionTitle title='Contact' />
        <form onSubmit={sendEmailHandler} className="contact-form" data-aos="fade-right">
          <label htmlFor="name">Name</label>
          <input onChange={(e) => setNameValue(e.target.value)} type="text" id="name"/>
          <label htmlFor="surname">Surname</label>
          <input onChange={(e) => setSurnameValue(e.target.value)} type="text" id="surname"/>
          <label htmlFor="email">Email</label>
          <input onChange={(e) => setEmailValue(e.target.value)}  type="email" id="email"/>
          <label htmlFor="message">Message</label>
          <textarea onChange={(e) => setMessangeValue(e.target.value)} name="message" id="message" cols="50" rows="10" required/>
          <input className={'btn sendBtn'} type="submit" value={'Submit'}/>
        </form>
      </Container>
    </section>
  )
}

export default Contact;