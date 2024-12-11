"use client";
import { useState } from "react";

const getUsers = () => {
  return ["Adam", "Bob", "Carl", "David", "Ethan", "Flora"];
};

const UserList = () => {
  const [users, setUsers] = useState(getUsers());

  function addUser() {
    setUsers([...users, `test ${Date.now()}`]);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl m-2">User List</h1>
      <ul className="m-1 p-1">
        {users.map((user) => (
          <li className="p-1" key={user}>
            {user}
          </li>
        ))}
      </ul>
      <button className="bg-black text-white p-1 rounded" onClick={addUser}>
        Add +
      </button>
    </div>
  );
};

export default UserList;
