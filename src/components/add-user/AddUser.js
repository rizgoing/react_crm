import React, { useState } from "react";

const AddUser = ({ addUser }) => {
  const [user, setUser] = useState("");
  const handleSubmit = (user) => {
    addUser(user);
  };

  return (
    <form onSubmit={() => handleSubmit(user)}>
      <input
        type="text"
        required
        placeholder="Enter Your Name"
        onChange={(e) => {
          setUser({ name: e.target.value });
        }}
      />
      <input
        type="email"
        required
        placeholder="Enter Your Email"
        onChange={(e) => {
          setUser({ email: e.target.value });
        }}
      />
      <input
        type="number"
        required
        placeholder="Enter Your Phone number"
        onChange={(e) => {
          setUser({ phone: e.target.value });
        }}
      />
    </form>
  );
};

export default AddUser;
