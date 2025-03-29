import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SocialLinkIcon.module.css";

type SocialLinkIconProps = {
  className?: string;
  name: IconProp;
  text: string;
  url: string;
  modifier: string;
};

function SocialLinkIcon({
  className,
  name,
  text,
  url,
  modifier,
}: SocialLinkIconProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className || ""} ${styles.container}`}
      aria-label={text}
    >
      <FontAwesomeIcon icon={name} className={styles[modifier]} size="4x" />
    </a>
  );
}

export default SocialLinkIcon;
