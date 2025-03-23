import React from "react";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.container}>
      <pre className={styles.preText}>
        {`{
  "nickname": "s4kr4",
  "position": "Web engineer",
  "accounts": [
    "GitHub": "@s4kr4",
    "Qiita": "@s4kr4",
    "Hatena": "@s4kr4",
    "Twitter": "@s4kr4_"
  ]
}`}
      </pre>
    </div>
  );
}

export default Profile;
