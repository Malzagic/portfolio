import React from "react";
import Button from "../../shared/components/UI/buttons/Button";

import styles from "./ResumeBox.module.css";

export default function ResumeBox({ date, title, url, company, details }) {
  return (
    <div className={styles.resumeBox}>
      <div className={styles.resumeSummary}>
        <h6 className={styles.summaryTitle}>{date}</h6>
      </div>
      <div className={styles.resumeDetails}>
        <h5 className={styles.detailsTitle}>{title}</h5>
        <h6 className={styles.detailsLink}>
          <Button href={url} target="_blank">
            {company}
          </Button>
        </h6>
        <p>{details}</p>
      </div>
    </div>
  );
}
