import React, { useState } from "react";
import AddUser from "../add-user/AddUser";
import UserList from "../user-list/UserList";
import style from "../users/users.module.css";
const Users = () => {
  const [users, setUser] = useState([]);
  const addUser = (name, email, phone, avatar) => {
    setUser([
      ...users,
      {
        id: Math.random,
        name: name,
        email: email,
        phone: phone,
        avatar: avatar,
      },
    ]);
  };
  return (
    <div className={style.usersPage}>
      <AddUser addUser={addUser} />
      <UserList users={users} />
    </div>
  );
};

export default Users;
