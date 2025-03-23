"use client";

import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";

const profileString = `
{
  "nickname": "s4kr4",
  "position": "Web engineer",
  "accounts": [
    "GitHub": "@s4kr4",
    "Qiita": "@s4kr4",
    "Hatena": "@s4kr4",
    "Twitter": "@s4kr4_"
  ]
}
`;
const profileRow = profileString.split("\n").length;

function Profile() {
  const [displayedText, setDisplayedText] = useState(
    "\n".repeat(profileRow - 1)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const chars = profileString.slice(0, displayedText.length + 1);
      const brForAdd = profileRow - chars.split("\n").length;
      setDisplayedText(chars + "\n".repeat(brForAdd));
    }, 40);

    return () => clearInterval(interval);
  }, [displayedText.length]);

  return (
    <div className={styles.container}>
      <pre>
        {displayedText.split("\n").map((item, i) => (
          <span key={i}>
            {item}
            <br />
          </span>
        ))}
      </pre>
    </div>
  );
}

export default Profile;
