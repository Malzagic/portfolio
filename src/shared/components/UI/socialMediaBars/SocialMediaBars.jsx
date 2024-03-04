import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMediaBars = ({ ul, li, icon1, icon2, icon3, page1, page2, page3 }) => {
 return (
  <ul className={ul}>
    <li className={li}>
      <Link to={page1} target="_blank"><FontAwesomeIcon icon={icon1} /></Link>
    </li>
    <li className={li}>
      <Link to={page2} target="_blank"><FontAwesomeIcon icon={icon2} /></Link>
    </li>
    <li className={li}>
      <Link to={page3} target="_blank"><FontAwesomeIcon icon={icon3} /></Link>
    </li>
  </ul>
 )
}

export default SocialMediaBars;