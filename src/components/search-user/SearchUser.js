import React from "react";
import styles from "./searchUser.module.css";

const SearchUser = ({ search }) => {
  return (
    <form
    className={styles.searchWrap}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        className={styles.searchBar}
        type="text"
        placeholder="search by user name"
        onChange={(e) => search(e.target.value)}
      />
    </form>
  );
};

export default SearchUser;
