import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContex = () => {
  const context = useContext(CounterContext);

  if (!context) {
    console.log("Contexto não encontrado");
  }

  return context;
};
