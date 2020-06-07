import React from "react";
import style from "../user-list/userBlock.module.css";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <div className={style.usersBlock}>
      {users.map((user) => {
        return (
          <Link
            to={{
              pathname: user.id,
              state: { users },
            }}
            key={user.id}
            className={style.card}
          >
            <p className={style.userNameAndEmail}>Username: {user.name}</p>
            <img
              src={user.pic}
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
