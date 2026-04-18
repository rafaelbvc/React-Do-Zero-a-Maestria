const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Ativou o evento!");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizado Isso!</h1>;
    } else {
      return <h1>Ou isso!!!!</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou!")}>Clique Aqui!!</button>
        <button
          onClick={() => {
            if (true) {
              console.log("eita!");
            }
          }}
        >
          Clique Aqui!!!
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
