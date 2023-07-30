import React from "react";

import './Grid.css';

const Grid = (props) => {
    return (
        <div className="grid">{props.children}</div>
    )
}

export default Grid;