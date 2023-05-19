import React from "react";
import { User as UserModel } from "../../store/slices/Users";

type Props = {
  user: UserModel;
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
