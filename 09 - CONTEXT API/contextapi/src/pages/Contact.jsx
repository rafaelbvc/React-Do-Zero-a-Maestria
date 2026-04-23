//import { useContext } from "react";
//import { CounterContext } from "../context/CounterContext";

import { useCounterContex } from "../hooks/useCounterContext";

const Contact = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContex();
  return (
    <div>
      <h1>Contato</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Contact;
