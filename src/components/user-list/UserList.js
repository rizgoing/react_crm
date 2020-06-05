import React from "react";
import image from "../img/pic.jpg";
import style from "../user-list/userBlock.module.css";
const UserList = ({ users }) => {
  return (
    <div className={style.usersBlock}>
      {users.map((user) => {
        return (
          <a href="/user" key={user.id} className={style.card}>
            <p className={style.userNameAndEmail}>name: {user.name}</p>
            <img src={image} alt="user profile pic" className={style.avatar} />
            <p className={style.userNameAndEmail}>e-mail: {user.email}</p>
          </a>
        );
      })}
    </div>
  );
};

export default UserList;
