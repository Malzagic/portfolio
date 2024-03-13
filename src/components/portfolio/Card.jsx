import React from "react";

import ItemBox from "./ItemBox";
import ImageBox from "./ImageBox";

import { lowerCaseString, stringReplacment } from "../../util/stringTools";

import styles from "./Card.module.css";

export default function Card({
  onClick,
  isActive,
  name,
  author,
  url,
  homepage,
  language,
  description,
  topics
}) {
  return (
    <div className={styles.card} onClick={onClick}>
      <h2 data-value={name} className={styles.title}>
        {stringReplacment(name)}
      </h2>
      <div
        className={`${styles.itemWrapper} ${
          isActive === name && styles.active
        }`}
      >
        {console.log(topics)}
        <ImageBox name={lowerCaseString(name)} alt={lowerCaseString(name)} />
        <ItemBox
          author={author}
          url={url}
          homepage={homepage}
          language={language}
          topics={topics}
          description={description}
        />
      </div>
    </div>
  );
}
