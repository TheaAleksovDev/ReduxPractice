import { useDispatch, useSelector } from "react-redux";
import { counterActions, RootState } from "../store";
const Counter = () => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  const incrementBy5 = () => {
    dispatch(counterActions.incrementBy5(5));
  };

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={incrementBy5}>increment by 5</button>
    </div>
  );
};

export default Counter;
