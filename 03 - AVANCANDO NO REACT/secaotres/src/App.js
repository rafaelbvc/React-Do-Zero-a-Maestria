import Img2 from "./assets/img2.jpg";
import "./App.css";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import { useState } from "react";
import CarDetails from "./components/CarDetails";

function App() {
  const name = "Rafael";
  const [userName] = useState("Rafael");

  const cars = [
    { id: 1, brand: "VW", color: "Azul", newCar: true, km: 0 },
    { id: 1, brand: "VW", color: "Azul", newCar: true, km: 0 },
    { id: 1, brand: "VW", color: "Azul", newCar: false, km: 165 },
  ];

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
    </div>
  );
}

export default App;
