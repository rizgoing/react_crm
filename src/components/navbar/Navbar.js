import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbarWrapper}>
      <h1 className={styles.title}>LOGO</h1>
      <ul className={styles.links}>
        <li className={styles.linkItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.linkItem}>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
