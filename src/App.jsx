// import logo from './assets/img/logo.png'
import "./App.css";

let isLight =
  new Date().getHours() > 6 && new Date().getHours() < 18 ? true : false;

function App() {
  return (
    <div>
      <h1 className={isLight ? "light" : "dark"}>
        Nima gap? {new Date().getHours()}{" "}
      </h1>
      <h1>Random Number {(Math.random() * 100).toFixed()} </h1>

      {isLight ? <h3>Talaba</h3> : <mark>Talaba emas</mark>}
    </div>
  );
}

export default App;
