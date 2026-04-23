import { CounterContext } from "../context/CounterContext";
import { useContext } from "react";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Adicionar valor ao contador do context
      </button>
    </div>
  );
};

export default ChangeCounter;
