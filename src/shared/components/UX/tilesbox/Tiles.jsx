import React from "react";

import './Tiles.css';

const Tiles = ({ title, text }) => {
    return (
        <div className="tiles-box">
            <h3 className="tiles-title">{title}</h3>
            <p className="tiles-text">{text}</p>
        </div>
    )

}

export default Tiles;