import React, { useState } from "react";

import './Col.css'

const Col = (props) => {

  const [isActive, setIsActive] = useState(false);

  const hoverEffectAdd = () => {
    setIsActive(true)
  }

  const hoverEffectRemove = () => {
    setIsActive(false)
  }

  return (
    <div className={`col`} onMouseEnter={hoverEffectAdd} onMouseLeave={hoverEffectRemove}>
      <div className={`col-rounded ${isActive ? 'active' : ''}`}>
        <h5 className={isActive ? 'active' : 'title'}>{props.title}</h5>
        {props.children}
      </div>
    </div>
  )
}

export default Col;