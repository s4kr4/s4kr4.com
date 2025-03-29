import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return <footer className={styles.footer}>© {year} s4kr4</footer>;
}

export default Footer;
