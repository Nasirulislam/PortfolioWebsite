import logo from "./logo.svg";
import "./App.css";
import HomeIndex from "./components/Home/HomeIndex";
import BottomSlider from "./components/Home/BottomSlider";
import Index from "./components/Index/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [IndexText, setIndexText] = useState("INDEX");
  const [clicked, setClicked] = useState(true);
  const buttonToogle = () => {
    if (clicked) {
      setIndexText("CLOSE");
    } else {
      setIndexText("INDEX");
    }
    setClicked(!clicked);
  };
  return (
    <div className="App">
      <div className="index-button">
        <h3
          onClick={() => {
            buttonToogle();
          }}
          className="main-button"
        >
          {IndexText}
        </h3>
      </div>
      {clicked ? <HomeIndex /> : <Index />}
    </div>
  );
}

export default App;
