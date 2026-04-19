import Img2 from "./assets/img2.jpg";
import "./App.css";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import { useState } from "react";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecutarFunction from "./components/ExecutarFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import Challenge from "./components/Challenge";

function App() {
  //const name = "Rafael";
  const [userName] = useState("Rafael");

  const cars = [
    { id: 1, brand: "VW", color: "Azul", newCar: true, km: 0 },
    { id: 1, brand: "VW", color: "Azul", newCar: true, km: 0 },
    { id: 1, brand: "VW", color: "Azul", newCar: false, km: 165 },
  ];

  const showMessage = () => {
    console.log("Evento do component");
  };

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando em React!</h1>
      <div>
        <img src="/img1.jpg" alt="Imagem Um" />
      </div>
      <div>
        <img src={Img2} alt="Imagem 2" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName} />
      <CarDetails brand="VW" km={343254} color="Azul" newCar={false} />
      <CarDetails brand="Fiat" km={567} color="Preto" newCar={false} />
      <CarDetails brand="Fiat" km={0} color="Verde" newCar={true} />
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
      <Fragment propFragment="Prop fragment" />
      <Container myValue="Prop com Children">
        <p>Este é o conteúdo!</p>
      </Container>
      <Container myValue="Prop com Children 2">
        <p>Este é o conteúdo 2!</p>
      </Container>
      <ExecutarFunction myFunction={showMessage} />
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      <Challenge />
    </div>
  );
}

export default App;
