import { useState } from "react";

const Challenge = () => {
  const [people] = useState([
    { name: "Rafael", age: "38", profession: "Desenvolvedor" },
    { name: "Gisllene", age: "32", profession: "Autonomo" },
    { name: "Igor", age: "14", profession: "Latir" },
  ]);

  return (
    <div>
      {people.map((person, index) => (
        <p key={index}>
          Nome: {person.name} Idade: {person.age} Profissão: {person.profession}{" "}
          {person.age >= 18 ? "pode tirar carta" : "não pode tirar carta"}
        </p>
      ))}
    </div>
  );
};

export default Challenge;
