import React, { useState } from "react";
import AddUser from "../add-user/AddUser";

const Users = () => {
  const [users, setUser] = useState([]);
  const addUser = (user) => {
    setUser([...users, user]);
  };
  return (
    <div className="users-page">
      <AddUser addUser={addUser} />
      <Users />
    </div>
  );
};

export default Users;
