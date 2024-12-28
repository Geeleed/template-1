import { useSelector } from "react-redux";
import { useState } from "react";
import { useDecrement, useIncrement, useIncrementByAmount } from "./4_hook";
import { api } from "./3_api";

export const useApp = () => {
  // hook
  const [value, setValue] = useState(3);
  const [post, setPost] = useState([]);
  const countValue = useSelector((store) => store.counter.value);
  const onIncrement = useIncrement();
  const onDecrement = useDecrement();
  const onSubmit = useIncrementByAmount(value);

  // function
  const onChangeValue = (e) => setValue(e.target.value);
  const onLoadPost = () => api.getPosts().then((r) => setPost(r));
  const onClearPost = () => setPost([]);

  return {
    value,
    countValue,
    onChangeValue,
    onIncrement,
    onDecrement,
    onSubmit,
    onLoadPost,
    post,
    onClearPost,
  };
};
