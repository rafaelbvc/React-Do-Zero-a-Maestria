import { useState } from "react";

const ListRender = () => {
  const [list] = useState([
    "Rafael",
    "Gislenne",
    "Lara",
    "Beto",
    "Andre",
    "Isabele",
  ]);

  const [lista, setLista] = useState([
    { id: 1, name: "Rafael", age: 38 },
    { id: 2, name: "Gisllene", age: 32 },
    { id: 3, name: "Igor", age: 14 },
  ]);

  const deleteRandom = () => {
    const randomIndex = Math.floor(Math.random() * lista.length);

    setLista((prevLista) => {
      return prevLista.filter((_, index) => index !== randomIndex);
    });
  };

  return (
    <div>
      <ul>
        {list.map((names, i) => (
          <li key={i}>{names}</li>
        ))}
      </ul>
      <ul>
        {lista.map((listas) => (
          <li key={listas.id}>
            Nome: {listas.name} Age: {listas.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random</button>
    </div>
  );
};

export default ListRender;
