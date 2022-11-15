import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import url from "../../constants/url";
import "./template.css";
import getRandomTemp from "./Radome";
import tempImg from "./tempImg";
import { useLocation } from "react-router-dom";
function Template1(props) {
  // getRandomTemp(tempImg[4])
  const location = useLocation();
  return (
    <div>
      <div className="title">
        <h1>{location.state.name}</h1>
        <p>{location.state.detail}</p>
        {/* <h1 className="px-3">MATTHEWS</h1> */}
      </div>

      {tempImg.map((temp, index) => {
        if (index == 0) {
          return (
            <div className="temp_img1" key={index}>
              <img className="movingImg img-fluid" src={temp} />
            </div>
          );
        }
        return (
          <div key={index} className="temp-wrap">
            {getRandomTemp(temp)}
          </div>
        );
      })}
    </div>
  );
}

export default Template1;
