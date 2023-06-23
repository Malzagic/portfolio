import React from "react";

import './LinkButton.css';

const LinkButton = (props) => {
  const className = props.className ? `${props.className} btn`: "btn";
  const get = props.get === true ? props.get : false;


  return (
    <a 
      className={className} 
      href={props.link} 
      target={props.target}
      download={get}
    >
      {props.text}
    </a>
  )
}

export default LinkButton;