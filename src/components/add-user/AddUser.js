import React, { useState } from "react";

const AddUser = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (e) => {
    addUser(name, email, phone);
    e.preventDefault();
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
