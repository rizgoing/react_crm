import React from "react";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbarWrapper}>
      <h1 className={styles.title}>LOGO</h1>
      <ul className={styles.links}>
        <li className={styles.linkItem}>
          <a href="/">Home</a>
        </li>
        <li className={styles.linkItem}>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
