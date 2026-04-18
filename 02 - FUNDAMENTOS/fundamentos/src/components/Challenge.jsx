const Challenge = () => {
  const valorUm = 7;
  const valorDois = 11;

  return (
    <div>
      <div>{console.log(valorUm)}</div>
      <div>{console.log(valorDois)}</div>
      <button onClick={() => console.log(valorUm + valorDois)}>
        Somar Numeros
      </button>
    </div>
  );
};

export default Challenge;
