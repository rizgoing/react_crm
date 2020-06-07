import React, { useState, useEffect } from "react";
import AddUser from "../add-user/AddUser";
import UserList from "../user-list/UserList";
import style from "../users/users.module.css";
import SearchUser from "../search-user/SearchUser";

const Users = () => {
  const [users, setUser] = useState([]);
  const [search, setSearch] = useState("");
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
    setSearch({ name: e });
  };

  const results = !search.name
    ? users
    : users.filter((user) =>
        user.name.toLowerCase().includes(search.name.toLowerCase())
      );

  return (
    <div className={style.usersPage}>
      <AddUser addUser={addUser} />
      <SearchUser search={handleSearch} />
      <UserList users={results} />
    </div>
  );
};

export default Users;
