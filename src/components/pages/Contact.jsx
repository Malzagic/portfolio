import React, { useState } from "react";
import axios from 'axios';
import Container from '../../shared/components/UX/containers/Container';
import SectionTitle from "../../shared/components/UX/sectionTitles/SectionTitle";

import './Contact.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
AOS.init();

const Contact = () => {

  const [nameValue, setNameValue] = useState('');
  const [surnameValue, setSurnameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const sendEmailHandler = async (e) => {
    e.preventDefault();

    const formData = {
      name: nameValue,
      surname: surnameValue,
      email: emailValue,
      message: messageValue,
    }


    try {
      const url = 'http://www.pmdev.ovh:8080/contact';
      await axios.post(url, JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        if (res.status === 200) {
          const message = res.data;
          toast.success(message);

          setNameValue('');
          setSurnameValue('');
          setEmailValue('');
          setMessageValue('');
        }
      })
    } catch (error) {
      console.error(error)
      if(error.message === 'Network Error') {
        toast.warn('Error server connection!')
      } else {
        toast.error('Something went wrong!')
      }
    }
  }


  return (
    <section className="contact">
      <Container>
        <SectionTitle title='Contact' />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <form onSubmit={sendEmailHandler} className="contact-form" data-aos="fade-right">
          <label htmlFor="name">Name</label>
          <input onChange={(e) => setNameValue(e.target.value)} type="text" id="name" value={nameValue} required />
          <label htmlFor="surname">Surname</label>
          <input onChange={(e) => setSurnameValue(e.target.value)} type="text" id="surname" value={surnameValue} required />
          <label htmlFor="email">Email</label>
          <input onChange={(e) => setEmailValue(e.target.value)} type="email" id="email" value={emailValue} required />
          <label htmlFor="message">Message</label>
          <textarea onChange={(e) => setMessageValue(e.target.value)} name="message" id="message" cols="50" rows="10" value={messageValue} required />
          <input className={'btn sendBtn'} type="submit" value={'Submit'} />
        </form>
      </Container>
    </section>
  )
}

export default Contact;