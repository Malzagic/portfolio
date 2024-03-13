import React from "react";
import axios from "axios";
// import ReCAPTCHA from "react-google-recaptcha";
import Section from "../../shared/components/UI/section/Section";
import FormData from "../contact/FormData";

import styles from "./Contact.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Contact() {
  const sendEmailHandler = async (formData) => {
    console.log(formData);
    try {
      const url = "https://www.pmdev.ovh/api/contact";
      // const url = "http://localhost:8000/api/contact"
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
        }
      }
    } catch (error) {
      if (error.message === "Network Error") {
        toast.warn("Error server connection!");
      }
    }
  };

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
      <div data-aos="fade-right" className={styles.textContainer}>
        <h2 className={styles.title}>Contant with me</h2>
        <p className={styles.text}>
          Please let me know if you need more information or help. Complete the
          form below with your name, surname, e-mail address and a short message
          and I will respond to your inquiry immediately. Thank you in advance
          for your message.
        </p>
      </div>
      <FormData onSubmit={sendEmailHandler} />
    </Section>
  );
}
