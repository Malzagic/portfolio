import React from "react";
import Button from "../../shared/components/UI/buttons/Button";

import styles from "./ItemBox.module.css";

export default function ItemBox({
  author,
  url,
  homepage,
  language,
  description,
}) {
  return (
    <div className={styles.itemBox}>
      <div className={styles.textBox}>
        <h3>Author: {author}</h3>
        <div className={styles.links}>
          <Button href={url} target button additonalStyle={styles.marginLink}>
            Code
          </Button>
          <Button
            href={homepage}
            target
            button
            additonalStyle={styles.marginLink}
          >
            Live
          </Button>
        </div>
        <p>Languages used: {language}</p>
        <div className={styles.description}>
          <h4>Description:</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
