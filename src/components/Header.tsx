import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
        <Image
          src="/images/icon-white-250.png"
          alt="s4kr4 logo"
          width={80}
          height={80}
          priority
        />
      <h1 className={styles.title}>s4kr4</h1>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <span className={styles.separator}>|</span>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
        <span className={styles.separator}>|</span>
        <Link href="/skills" className={styles.navLink}>
          Skills
        </Link>
        <span className={styles.separator}>|</span>
        <Link href="/works" className={styles.navLink}>
          Works
        </Link>
      </nav>
    </header>
  );
}

export default Header;
