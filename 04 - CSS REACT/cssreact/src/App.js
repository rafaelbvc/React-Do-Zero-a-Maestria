import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";
import CarDetails from "./components/CarDetails";

function App() {
  const n = 15;

  const [redTitle] = useState(true);

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este paragrafo é do APP.jsx</p>
      <p style={{ color: "blue", borderTop: "2px solid red" }}>
        Este elemento foi estilizado com css inline
      </p>
      <p style={{ color: "magenta", borderTop: "2px solid red" }}>
        Este elemento foi estilizado com css inline
      </p>
      <h2 style={n < 10 ? { color: "red" } : { color: "blue" }}>
        CSS Dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "red" } : { color: "blue" }}>
        CSS Dinâmico
      </h2>
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo é com classe dinâmica
      </h2>
      <h2 className={!redTitle ? "red-title" : "title"}>
        Este titulo é com classe dinâmica
      </h2>
      <Title />
      <CarDetails />
    </div>
  );
}

export default App;
