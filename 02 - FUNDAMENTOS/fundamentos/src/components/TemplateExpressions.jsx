const TemplateExpressions = () => {
  const name = "Rafael";
  const data = {
    age: 31,
    job: "Programmer",
  };

  return (
    <div>
      <h1>Olá {name}, tudo joia?</h1>
      <p>Você atua como? {data.job}</p>
      <p>{4 + 4}</p>
      {console.log("Java Script")}
    </div>
  );
};

export default TemplateExpressions;
