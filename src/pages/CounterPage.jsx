import { useReducer } from "react";
import { produce } from "immer";
import Button from "../components/Button";

const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "setValueToAdd";
const ADD_VALUE_TO_COUNT = "add_value_to_count";
const DECREMENT_COUNT = "decrement";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case SET_VALUE_TO_ADD:
      state.valuetoAdd = action.payload;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valuetoAdd;
      state.valuetoAdd = 0;
      return;
    default:
      return;
  }
};

export default function CounterPage({ initialValue }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialValue,
    valuetoAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const Decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-5xl font-bold">Counter Page</h1>
      <h2 className="text-3xl">Counter: {state.count}</h2>
      <div className="flex gap-4">
        <Button primary onClick={increment}>
          Increment
        </Button>
        <Button primary onClick={Decrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="text-xl mr-2">Set Counter:</label>
        <input
          className="border border-gray-300 rounded p-1 m-3 bg-gray-50"
          type="number"
          value={state.valuetoAdd || ""}
          onChange={handleChange}
        />
        <Button secondary>Add it!</Button>
      </form>
    </div>
  );
}
