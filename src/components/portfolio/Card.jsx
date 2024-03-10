import React from "react";

import ItemBox from "./ItemBox";

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
}) {
  return (
    <div className={styles.card} onClick={onClick}>
      <h2 data-value={name} className={styles.title}>
        {name.replace(/[^a-zA-Z0-9 ]/g, " ").toUpperCase()}
      </h2>
      <div
        className={`${styles.itemWrapper} ${
          isActive === name && styles.active
        }`}
      >
        {/* <div className={styles.imgBox}>
                  {/* <img src={reposImg[index]} alt={item.name} /> }
                </div> */}
        <ItemBox
          author={author}
          url={url}
          homepage={homepage}
          language={language}
          description={description}
        />
      </div>
    </div>
  );
}
