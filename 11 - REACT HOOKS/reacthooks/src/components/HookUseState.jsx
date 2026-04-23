import { useState } from "react";

const HookUseState = () => {
  let userName = "Renato";

  const [name, setName] = useState("Rafael");

  const changeNames = () => {
    userName = "Renato Batista";

    setName("Rafael Vendramini");

    console.log(userName);
  };

  console.log(name);

  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);
  };

  return (
    <div>
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes!</button>
      <p>Digite a sua idade:</p>
      <form>
        <input
          onSubmit={handleSubmit}
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos!</p>
      <hr />
    </div>
  );
};

export default HookUseState;
