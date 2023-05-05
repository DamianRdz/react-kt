import React from "react";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type Props = {
  user: User;
};

const User = ({ user }: Props) => {
  return (
    <li className="user">
      <span>Name: {user.name}</span>
      <span>Email: {user.email}</span>
    </li>
  );
};

export default User;
