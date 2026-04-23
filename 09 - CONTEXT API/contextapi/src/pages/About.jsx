//import { useContext } from "react";
//import { CounterContext } from "../context/CounterContext";

import { useCounterContex } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  //const { counter } = useContext(CounterContext);

  const { counter } = useCounterContex();

  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color }}>Sobre</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default About;
