import React, { useEffect, useReducer, useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { incrementCount } from "../reducers/AppReducer";

interface Props {
  title: string;
}

const FunctionalCounter = ({ title }: Props) => {
  const { state, dispatch } = useContext(AppContext);
  const { counter } = state;
  useEffect(() => {
    console.log("Functional Component Mount");
    return () => {
      console.log("Functional Component Unmount");
    };
  }, []);
  useEffect(() => {
    console.log("Count updated with value: ", counter);
  }, [counter]);
  return (
    <div>
      <p>{title.length > 0 ? title : "Texto default"}</p>
      <p>{counter}</p>
      <button onClick={() => dispatch(incrementCount(2))}>Increment</button>
      <button onClick={() => dispatch(incrementCount(-1))}>Decrease</button>
    </div>
  );
};

export default FunctionalCounter;
