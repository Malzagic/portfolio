import React from "react";

import './LinkButton.css';

const LinkButton = (props) => {
  return (
    <a className={props.className + ' btn'} href={props.link}>{props.text}</a>
  )
}

export default LinkButton;