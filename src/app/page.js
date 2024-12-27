"use client";
import React from "react";
import { decrement, increment } from "@/redux/features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const countValue = useSelector((store) => store.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="center w-screen h-screen flex-col">
      <h1>Template 1</h1>
      <div>{countValue}</div>
      <button className="btn" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="btn" onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}
