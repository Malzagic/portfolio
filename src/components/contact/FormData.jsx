import React, { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";

import styles from "./FormData.module.css";

export default function FormData({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    textarea: "",
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} data-aos="fade-right">
      <Input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={onChangeHandler}
      />
      <Input
        type="text"
        name="surname"
        id="surname"
        value={formData.surname}
        onChange={onChangeHandler}
      />
      <Input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={onChangeHandler}
      />
      <TextArea
        name="textarea"
        id="textarea"
        col={30}
        row={10}
        value={formData.textarea}
        onChange={onChangeHandler}
      />
      <button type="submit" className={styles.submit}>Submit</button>
    </form>
  );
}
