import React from "react";

import './SectionTitle.css';

const SectionTitle = (props) => {
    return (
        <div className={`title-section ` + props.className}>
            <h2 className="title-theme">{props.title}</h2>
        </div>
    )
}

export default SectionTitle;