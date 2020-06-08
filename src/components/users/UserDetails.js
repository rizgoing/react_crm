import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import style from "./userDetails.module.css";
import axios from "axios";

const UserDetails = (props) => {
  const [user, setUser] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const history = useHistory();

  const goBack = () => history.push("/users");

  useEffect(() => {
    let id = props.match.params.user_id;
    axios
      .get(`https://jsonplaceholder.typicode.com/users/` + id)
      .then((res) => {
        setUser(res.data);
        setAddress(res.data.address);
        setCompany(res.data.company);
      });
  }, []);

  return (
    <div className={style.userWrapper}>
      <img
        src={`https://robohash.org/${user.id}`}
        alt="User avatar"
        className={style.profilePic}
      />
      <h3 className={style.name}>User Name : {user.name} </h3>
      <p className={style.email}>
        Email adress: <a href={`mailto: ${user.email}`}>{user.email}</a>
      </p>
      <p className={style.tel}>Telephone: {user.phone}</p>
      <h4
        className={style.address}
      >{`Address: ${address.city} city, ${address.street} str.  ${address.suite}`}</h4>
      <p className={style.zip}>{`Zip code: ${address.zipcode}`}</p>
      <p className={style.web}>
        Website: <a href={user.website}>{user.website}</a>
      </p>
      <h4 className={style.company}>Company: {company.name}</h4>
      <p className={style.descript}>
        Catch Phrase: {company.catchPhrase}, {company.bs}
      </p>
      <button className={style.buttonBack} onClick={goBack}>
        Back
      </button>
    </div>
  );
};

export default UserDetails;
