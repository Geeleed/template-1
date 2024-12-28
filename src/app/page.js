"use client";

import { Button, Post } from "./component/component";
import { useApp } from "./script/5_comp";

export default function App() {
  const {
    countValue,
    onChangeValue,
    onIncrement,
    onDecrement,
    onSubmit,
    onLoadPost,
    onClearPost,
    post,
    value,
  } = useApp();
  return (
    <div className="center w-screen h-screen flex-col">
      <h1>Template 1</h1>
      <div>{countValue}</div>
      <input
        value={value}
        type="number"
        className="px-2 py-1 my-2 rounded"
        onChange={onChangeValue}
      />
      <div className="flex gap-x-2">
        <Button onClick={onIncrement}>+</Button>
        <Button onClick={onDecrement}>-</Button>
        <Button onClick={onSubmit}>Increment by Amount</Button>
      </div>
      <div className="flex gap-x-2">
        <Button onClick={onLoadPost}>Load The post</Button>
        <Button onClick={onClearPost}>Clear The post</Button>
      </div>
      <section className="max-h-[15rem] overflow-y-auto max-w-[50dvw]">
        <Post post={post} />
      </section>
    </div>
  );
}
