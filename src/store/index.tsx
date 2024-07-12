import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementBy5(state, action) {
      state.counter += action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const counterActions = counterSlice.actions;
