import SocialLinkIcon from "@/components/SocialLinkIcon";
import styles from "./SocialLinks.module.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faQuora,
  faTwitter,
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
    url: "http://s4kr4.hatenablog.com/",
    option: "vertical",
    modifier: "hatenablog-icon",
  },
  {
    icon: faTwitter,
    text: "Twitter",
    url: "https://twitter.com/s4kr4_",
    option: "vertical",
    modifier: "twitter-icon",
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
