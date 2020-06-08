import React from "react";
import style from "../user-list/userBlock.module.css";
import { Link } from "react-router-dom";

const UserList = ({ users, removeUser }) => {
  return (
    <div className={style.usersBlock}>
      {users.map((user) => {
        return (
          <div key={user.id} className={style.card}>
            <button
              className={style.deleteButton}
              onClick={(e) => {
                removeUser(user.id);
              }}
            >
              delete
            </button>
            <Link to={`/${user.id}`} className={style.links}>
              <p className={style.userNameAndEmail}>Username: {user.name}</p>
              <img
                src={`https://robohash.org/${user.id}`}
                alt="user profile pic"
                className={style.avatar}
              />
              <p className={style.userNameAndEmail}>Email: {user.email}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
