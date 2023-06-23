import React from "react";

import './LinkButton.css';

const LinkButton = (props) => {
  return (
    <a className={props.className ? props.className + " " + "btn" : '' + 'btn'} href={props.link} target={props.target}>{props.text}</a>
  )
}

export default LinkButton;