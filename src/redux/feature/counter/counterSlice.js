import {
  onDecrement,
  onIncrement,
  onIncrementByAmount,
} from "@/app/script/1_calc";
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = onIncrement(state.value);
    },

    decrement: (state) => {
      state.value = onDecrement(state.value);
    },

    incrementByAmount: (state, action) => {
      state.value = onIncrementByAmount(state.value, action.payload);
    },
  },
});
