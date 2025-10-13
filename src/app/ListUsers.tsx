"use client";
import React from "react";
import { users } from "./utils/userData";
import { useState } from "react";

type Bgprops = {
  background: string;
  color: Colors;
};

type Colors = "red" | "green" | "yellow";

const ListUsers = ({ background }: Bgprops) => {
  const [filteredData, setFilteredData] = useState(users);
  const userData = users;
  const handleChange = (username: string) => {
    const filteredData = userData.filter((user) =>
      user.name.toLowerCase().includes(username.toLowerCase())
    );
    console.log(filteredData);
    setFilteredData(filteredData);
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="m-3 p-3"
        placeholder="Enter name"
        onChange={(e) => handleChange(e.target.value)}
      />
      {filteredData.map((user, id) => {
        return (
          <div
            key={id}
            className={`${background} m-3 p-3 max-w-30 hover:shadow-md rounded-md flex flex-col`}
          >
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default ListUsers;
