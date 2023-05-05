import React, { useEffect, useState } from "react";
import axios from "axios";
import User, { User as UserModel } from "./User";
import "../../styles/UserList.css";

const UserList = () => {
  const [users, setUsers] = useState<null | UserModel[]>(null);
  function renderUsers(users: UserModel[] | null) {
    if (!users) return null;
    return users.map((user, index) => <User key={index} user={user} />);
  }
  async function getUsers() {
    // async/await syntax
    try {
      //const result = await fetch("https://jsonplaceholder.typicode.com/users");
      //const data = await result.json();
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (data) setUsers(data);
    } catch (error) {
      console.log("Await error: ", error);
    }

    // then/catch syntax
    /*fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((result) => {
        result.json().then((data) => {
          setUsers(data);
        });
      })
      .catch((error) => console.log(error));*/
  }
  useEffect(() => {
    if (users === null) {
      getUsers();
    }
  }, [users]);
  return (
    <div
      className="user-list"
      style={{
        color: "white",
        margin: "1rem",
      }}
    >
      <h3>Users</h3>
      <ul>{renderUsers(users)}</ul>
    </div>
  );
};

export default UserList;
