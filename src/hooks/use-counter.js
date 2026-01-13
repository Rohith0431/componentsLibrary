import { useState } from "react";

function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return { counter, increment };
}

export default useCounter;
