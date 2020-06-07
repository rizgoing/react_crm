import React from "react";
import { useParams } from "react-router";

const UserDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>User {id}</h1>
    </div>
  );
};

export default UserDetails;
