import { counterSlice } from "@/redux/feature/counter/counterSlice";
import { useDispatch } from "react-redux";

export const useIncrement = () => {
  const dispatch = useDispatch();
  const run = () => dispatch(counterSlice.actions.increment());
  return run;
};

export const useDecrement = () => {
  const dispatch = useDispatch();
  const run = () => dispatch(counterSlice.actions.decrement());
  return run;
};

export const useIncrementByAmount = (value) => {
  const dispatch = useDispatch();
  const run = () => dispatch(counterSlice.actions.incrementByAmount(value));
  return run;
};
