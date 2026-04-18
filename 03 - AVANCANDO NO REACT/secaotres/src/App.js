import Img2 from "./assets/img2.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React!</h1>
      <div>
        <img src="/img1.jpg" alt="Imagem Um" />
      </div>
      <div>
        <img src={Img2} alt="Imagem 2" />
      </div>
    </div>
  );
}

export default App;
