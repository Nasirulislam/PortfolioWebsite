import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import url from "../../constants/url";
import "./template.css";
import getRandomTemp from "./Radome";
import tempImg from "./tempImg";
function Template2() {
  return (
    <div>
      <div className="title">
        <h1>AMOEBA</h1>
      </div>
      <div className="temp1_sec1">
        <img className="temp1_img1" src={tempImg[0]} />
        <img className="temp1_img2" src={tempImg[3]} />
      </div>
    </div>
  );
}

export default Template2;
