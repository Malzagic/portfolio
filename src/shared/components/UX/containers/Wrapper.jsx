import React from "react";

import './Wrapper.css';

const Wrapper = (props) => {
  return (
    <>
      <div className="bg-lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <main className="wrapper">{props.children}</main>
    </>
  )
}

export default Wrapper;