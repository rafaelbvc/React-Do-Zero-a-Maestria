import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState("Rafael");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      <h1>If Ternário</h1>
      {name === "Rafael" ? (
        <p>O nome é Rafael!</p>
      ) : (
        <p>O nome não foi encontrado!</p>
      )}
      <button onClick={() => setName("Pedro")}>
        Set Name para não encontrar
      </button>
    </div>
  );
};

export default ConditionalRender;
