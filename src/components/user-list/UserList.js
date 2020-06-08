import React from "react";
import style from "../user-list/userBlock.module.css";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <div className={style.usersBlock}>
      {users.map((user) => {
        return (
          <Link to={`/${user.id}`} key={user.id} className={style.card}>
            <p className={style.userNameAndEmail}>Username: {user.name}</p>
            <img
              src={`https://robohash.org/${user.id}`}
              alt="user profile pic"
              className={style.avatar}
            />
            <p className={style.userNameAndEmail}>Email: {user.email}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default UserList;
