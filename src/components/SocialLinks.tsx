import SocialLinkIcon from "@/components/SocialLinkIcon";
import styles from "./SocialLinks.module.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faQuora,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

type Site = {
  icon: IconProp;
  text: string;
  url: string;
  option: string;
  modifier: string;
};

const sites: Array<Site> = [
  {
    icon: faGithub,
    text: "GitHub",
    url: "https://github.com/s4kr4",
    option: "spin",
    modifier: "github-icon",
  },
  {
    icon: faQuora,
    text: "Qiita",
    url: "https://qiita.com/s4kr4",
    option: "vertical",
    modifier: "qiita-icon",
  },
  {
    icon: faEdit,
    text: "Blog",
    url: "https://zenn.dev/s4kr4",
    option: "vertical",
    modifier: "zenn-icon",
  },
  {
    icon: faXTwitter,
    text: "X",
    url: "https://x.com/s4kr4_",
    option: "vertical",
    modifier: "x-icon",
  },
];

function SocialLinks() {
  const siteIcons = sites.map((site, i) => {
    return (
      <SocialLinkIcon
        className="menu-item"
        key={i}
        name={site.icon}
        text={site.text}
        url={site.url}
        modifier={site.modifier}
      />
    );
  });

  return <div className={styles.container}>{siteIcons}</div>;
}

export default SocialLinks;
