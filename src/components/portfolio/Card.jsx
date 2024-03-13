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
  topics,
}) {
  return (
    <div className={styles.card} onClick={onClick} data-value={name}>
      <h2 className={styles.title} data-value={name}>
        {stringReplacment(name)}
      </h2>
      <div
        className={`${styles.itemWrapper} ${
          isActive === name && styles.active
        }`}
      >
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
