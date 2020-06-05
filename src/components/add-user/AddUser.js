import React, { useState } from "react";

const AddUser = ({ addUser, users }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(name, email, phone);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        required
        placeholder="Enter Your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        required
        placeholder="Enter Your Phone number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default AddUser;
