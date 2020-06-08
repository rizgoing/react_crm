import React, { useState, useEffect } from "react";
//import AddUser from "../components/add-user/AddUser";
import UserList from "../components/user-list/UserList";
import style from "../components/users/users.module.css";
//import SearchUser from "../components/search-user/SearchUser";
import axios from "axios";

const Users = () => {
  const [users, setUser] = useState([]);
  // const [search, setSearch] = useState("");
  // const addUser = (name, email, phone, pic) => {
  //   setUser([
  //     ...users,
  //     {
  //       id: Math.random(),
  //       name: name,
  //       email: email,
  //       phone: phone,
  //       pic: pic,
  //     },
  //   ]);
  //};

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUser(res.data);
    });
  }, []);
  console.log(users);

  // const handleSearch = (e) => {
  //   setSearch({ name: e });
  // };

  // const results = !search.name
  //   ? users
  //   : users.filter((user) =>
  //       user.name.toLowerCase().includes(search.name.toLowerCase())
  //     );

  return (
    <div className={style.usersPage}>
      {/* <AddUser addUser={addUser} /> */}
      {/* <SearchUser search={handleSearch} /> */}
      <UserList users={users} />
    </div>
  );
};

export default Users;
