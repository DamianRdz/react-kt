import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../store/slices/Users";
import { getUsers } from "../../store/thunks/Users";
import User from "./User";

type Props = {};

function UserListWithRedux({}: Props) {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [pressed, setPressed] = useState<boolean>(false);
  function renderUsers() {
    if (!users || users.length === 0) return <p>No users</p>;
    return users.map((user) => <User key={user.id} user={user} />);
  }
  /*useEffect(() => {
    if (users == null) dispatch(getUsers());
  }, []);*/
  return (
    <div>
      <h4 onClick={() => setPressed(!pressed)}>UserListWithRedux</h4>
      {renderUsers()}
      <button onClick={users == null ? () => dispatch(getUsers()) : undefined}>
        Get Users
      </button>
    </div>
  );
}

export default UserListWithRedux;
