import logo from "./logo.svg";
import "./App.css";
import HomeIndex from "./components/Home/HomeIndex";
import BottomSlider from "./components/Home/BottomSlider";
import Index from "./components/Index/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeMain from "./components/Home/HomeMain";

function App() {
  const [IndexText, setIndexText] = useState("INDEX");
  const [aboutText, setAboutText] = useState("ABOUT");
  const [METext, setMEText] = useState("M-E");
  const [Text00, set00Text] = useState("00");
  const [clicked, setClicked] = useState(true);
  
  const setValues = ()=>{
    setIndexText("INDEX");
    setAboutText("ABOUT");
    setMEText("M-E");
    set00Text("00");
  }
  const buttonToogle = () => {
    if (clicked) {
      setIndexText("CLOSE");
      setAboutText("");
      setMEText("");
      set00Text("");
    } else {
      setValues();
    }
    setClicked(!clicked);
  };
  const AboutToogle = () => {
    if (clicked) {
      setAboutText("CLOSE");
      setIndexText("");
      setMEText("");
      set00Text("");
    } else {
      setValues();
    }
    setClicked(!clicked);
  };
  const METoogle = () => {
    if (clicked) {
      setMEText("CLOSE");
      setIndexText("");
      setAboutText("");
      set00Text("");
    } else {
      setValues()
    }
    setClicked(!clicked);
  };
  const NullToogle = () => {
    if (clicked) {
      set00Text("CLOSE");
      setIndexText("");
      setAboutText("");
      setMEText("");
    } else {
      setValues()
    }
    setClicked(!clicked);
  };
 
  return (
    <div className="App">
      <div className="main-button">
        <h3
          onClick={() => {
            buttonToogle();
          }}
          className="index-button"
        >
          {IndexText}
        </h3>
      </div>

      <div className="main-button">
        <h3
          onClick={() => {
            AboutToogle();
          }}
          className="about-button"
        >
          {aboutText}
        </h3>
      </div>
      <div className="main-button">
        <h3
          onClick={() => {
            METoogle();
          }}
          className="ME-button"
        >
          {METext}
        </h3>
      </div>
      <div className="main-button">
        <h3
          onClick={() => {
            NullToogle();
          }}
          className="null-button"
        >
          {Text00}
        </h3>
      </div>
      {clicked ? <div><HomeMain /> </div>: <Index />}
    </div>
  );
}

export default App;
