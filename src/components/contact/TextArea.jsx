import React from "react";
import { capitalizeString } from "../../util/stringTools";

export default function TextArea({ name, id, col, row, value, onChange }) {
  const capitalized = capitalizeString(name);

  return (
    <>
      <label htmlFor="message">{capitalized}</label>
      <textarea
        name={name}
        id={id}
        cols={col}
        rows={row}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
}
