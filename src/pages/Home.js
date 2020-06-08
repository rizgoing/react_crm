import React from "react";
import styles from "../components/home.module.css";

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.parag}>
        There is epty page. Please, go to <a href="/users">Users</a> .
      </p>
    </div>
  );
};

export default Home;
