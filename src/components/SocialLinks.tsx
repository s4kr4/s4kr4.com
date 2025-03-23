import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function SocialLinks() {
  return (
    <div className="flex justify-center space-x-8 mb-10">
      <a
        href="https://github.com/s4kr4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="text-white" size="2x" />
      </a>
      <a
        href="https://qiita.com/s4kr4"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400"
      >
        <span className="text-3xl font-bold">Q</span>
      </a>
      <a
        href="https://zenn.dev/s4kr4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="text-white"
          size="2x"
        />
      </a>
      <a
        href="https://twitter.com/s4kr4_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} className="text-blue-400" size="2x" />
      </a>
    </div>
  );
}

export default SocialLinks;
