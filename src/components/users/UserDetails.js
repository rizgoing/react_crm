import React from "react";
import { useHistory, useLocation } from "react-router";
import style from "./userDetails.module.css";

const UserDetails = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className={style.userWrapper}>
      <img src={location.state.users[0].pic} className={style.profilePic} />
      <h3 className={style.name}>
        User Name : {location.state.users[0].name}{" "}
      </h3>
      <p className={style.phone}>Telephone: {location.state.users[0].phone}</p>
      <p className={style.email}>
        Email adress: {location.state.users[0].email}
      </p>
      <button className={style.buttonBack} onClick={() => history.goBack()}>
        Back
      </button>
    </div>
  );
};

export default UserDetails;
