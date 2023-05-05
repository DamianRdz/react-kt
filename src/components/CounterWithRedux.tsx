import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCounter } from "../store/slices/Counter";

type Props = {};

function CounterWithRedux({}: Props) {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3>Counter with redux</h3>
      <span>{counter}</span>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement(2))}>Decrement</button>
    </div>
  );
}

export default CounterWithRedux;
