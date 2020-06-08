import React, { useState } from "react";
import style from "./addUser.module.css";

const AddUser = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pic, setPic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(name, email, phone, pic);
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className={style.formWrap}>
      <input
        type="text"
        required
        //pattern="[a-zA-Z]{3,32}"
        //title="Name should contains only letters"
        placeholder="Enter Your Username"
        onChange={(e) => setName(e.target.value)}
        className={style.inputName}
        value={name}
      />
      <input
        type="email"
        required
        //pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        // title="E-mail should contains one @ and domain name"
        placeholder="Enter Your Email"
        onChange={(e) => setEmail(e.target.value)}
        className={style.inputEmail}
        value={email}
      />

      <label className={style.inputPic}>
        {" "}
        Choose Avatar
        <input
          type="file"
          // required
          hidden
          onChange={(event) => {
            setPic(URL.createObjectURL(event.target.files[0]));
          }}
          accept="image/*"
        />
      </label>

      <input
        type="tel"
        required
        //pattern="[7-9]{1}[0-9]{10}"
        //title="Phone number with 7-9 and remaing 9 digit with 0-9"
        placeholder="Enter Your Phone number"
        onChange={(e) => setPhone(e.target.value)}
        className={style.inputPhone}
        value={phone}
      />

      <input type="submit" className={style.submitButton} />
    </form>
  );
};

export default AddUser;
