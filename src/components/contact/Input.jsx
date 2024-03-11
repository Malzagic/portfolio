import React from "react";
import { capitalizeString } from "../../util/capitalizer";

export default function Input({ type, name, id, value, onChange }) {
  const capitalized = capitalizeString(name);
  
  return (
    <>
      <label htmlFor={name}>{capitalized}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
}
