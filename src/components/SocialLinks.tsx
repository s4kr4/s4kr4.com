import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "./SocialLinks.module.css";

function SocialLinks() {
  return (
    <div className={styles.container}>
      <a
        href="https://github.com/s4kr4"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <FontAwesomeIcon
          icon={faGithub}
          className={styles.whiteIcon}
          size="2x"
        />
      </a>
      <a
        href="https://qiita.com/s4kr4"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <span className={styles.qiitaText}>Q</span>
      </a>
      <a
        href="https://zenn.dev/s4kr4"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <FontAwesomeIcon
          icon={faPenToSquare}
          className={styles.whiteIcon}
          size="2x"
        />
      </a>
      <a
        href="https://twitter.com/s4kr4_"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className={styles.twitterIcon}
          size="2x"
        />
      </a>
    </div>
  );
}

export default SocialLinks;
