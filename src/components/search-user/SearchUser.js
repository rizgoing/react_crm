import React from "react";

const SearchUser = ({ search }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder="search by user name"
        onChange={(e) => search(e.target.value)}
      />
    </form>
  );
};

export default SearchUser;
