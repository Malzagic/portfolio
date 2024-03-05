import React, { useState } from "react";
import axios from "axios";
// import ReCAPTCHA from "react-google-recaptcha";
import SectionTitle from "../../shared/components/UI/section/SectionTitle";
import Section from "../../shared/components/UI/section/Section";

import "./Contact.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

AOS.init();

export default function Contact() {
  // change into a context or redux
  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const sendEmailHandler = async (e) => {
    e.preventDefault();

    const formData = {
      name: nameValue,
      surname: surnameValue,
      email: emailValue,
      message: messageValue,
    };

    try {
      const url = "https://www.pmdev.ovh/api/contact";
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(url, JSON.stringify(formData), options);
      const data = response.data;

      if (response.status === 200) {
        if (data.validation === false) {
          toast.warn(data.message);
        } else {
          toast.success(data.message);

          setNameValue("");
          setSurnameValue("");
          setEmailValue("");
          setMessageValue("");
        }
      }
    } catch (error) {
      if (error.message === "Network Error") {
        toast.warn("Error server connection!");
      }
    }
  };

  // function onChange(value) {
  //   console.log("Captcha value:", value);
  // }

  return (
    <Section title="Contact">
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
      <form
        onSubmit={sendEmailHandler}
        className="contact-form"
        data-aos="fade-right"
      >
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setNameValue(e.target.value)}
          type="text"
          id="name"
          value={nameValue}
          required
        />
        <label htmlFor="surname">Surname</label>
        <input
          onChange={(e) => setSurnameValue(e.target.value)}
          type="text"
          id="surname"
          value={surnameValue}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmailValue(e.target.value)}
          type="email"
          id="email"
          value={emailValue}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          onChange={(e) => setMessageValue(e.target.value)}
          name="message"
          id="message"
          cols="50"
          rows="10"
          value={messageValue}
          required
        />
        <input className={"btn sendBtn"} type="submit" value={"Submit"} />
        {/* <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          onChange={onChange}
          theme="dark"
          badge="bottomleft"
        /> */}
      </form>
    </Section>
  );
}
