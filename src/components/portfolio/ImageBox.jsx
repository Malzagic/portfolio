import React from "react";

import portfolio from "../../assets/mocups/portfolio.png";
import foodpage from "../../assets/mocups/foodpage.png";
import deliveryfeecalculator from "../../assets/mocups/deliveryfeecalculator.png";
import refresherapp from "../../assets/mocups/refresherapp.png";
import githubfinder from "../../assets/mocups/githubfinder.png";
import trackcalories from "../../assets/mocups/trackcalories.png";
import restapirefresherapp from "../../assets/mocups/restapirefresherapp.png"

import styles from "./ImageBox.module.css";

export default function ImageBox({ name, alt }) {
  console.log(name);
  const svgArray = [
    portfolio,
    foodpage,
    deliveryfeecalculator,
    refresherapp,
    githubfinder,
    trackcalories,
    restapirefresherapp
  ];
  const uri = svgArray.filter((item) => item.match(name)).toString();
  let noImage;

  uri.length === 0
    ? (noImage = (
        <div className={styles.textBox}>
          <p>There is no image.</p>
        </div>
      ))
    : (noImage = <img src={uri} alt={alt} />);

  return <div className={styles.imageContainer}>{noImage}</div>;
}
