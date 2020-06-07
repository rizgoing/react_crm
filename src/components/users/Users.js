import React, { useState, useEffect } from "react";
import AddUser from "../add-user/AddUser";
import UserList from "../user-list/UserList";
import style from "../users/users.module.css";
import SearchUser from "../search-user/SearchUser";

const Users = () => {
  const [users, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const addUser = (name, email, phone) => {
    setUser([
      ...users,
      {
        id: Math.random(),
        name: name,
        email: email,
        phone: phone,
      },
    ]);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const results = users.filter((user) => {
      user.toLowerCase().includes(search.toLowerCase());
      setSearchResults(results);
    });
  }, [search]);
  return (
    <div className={style.usersPage}>
      <AddUser addUser={addUser} />
      <SearchUser search={handleSearch} />
      <UserList users={searchResults} />
    </div>
  );
};

export default Users;
