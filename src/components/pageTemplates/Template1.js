import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import base_url from "../../constants/url";
import "./template.css";
import getRandomTemp from "./Radome";
import tempImg from "./tempImg";
import { useLocation } from "react-router-dom";
import NextProject from "./NextProject";
function Template1(props) {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <div className="main-proj-section">
        <div className="title">
          <h1>{location.state.name}</h1>
          <p>{location.state.detail}</p>
        </div>
        <div className="d-flelx flex-co">
          {location.state.images.map((temp, index) => {
            if (index === 0) {
              return (
                <div className="temp_img1" key={index}>
                  <img
                    className="movingImg img-fluid"
                    src={`${base_url}` + "/img/projects/" + temp}
                  />
                </div>
              );
            }
            return <div key={index}>{getRandomTemp(temp)}</div>;
          })}
        </div>
      </div>
      <div className="next-project-section">
        <div className="next-title">
          <h1>{props.nextProject.name}</h1>
        </div>
        <div className="images">
          {props.nextProject.images.map((image, index) => {
            var FloatP = "";
            var float = false;
            var zIndex = 0;
            if (image.type == 0) {
              FloatP = "flex-start";
              float = true;
            } else if (image.type == 1) {
              FloatP = "flex-end";
              float = false;
            } else if (image.type == 2) {
              zIndex = 1;
            } else if (image.type == 3) {
              zIndex = -1;
            }

            if (index < 1) {
              return (
                <div style={{ alignSelf: FloatP, zIndex: 1 }}>
                  <img
                    className="img-fluid m-1 next-proj-img hoverImages"
                    src={`${base_url}` + "/img/projects/" + image}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Template1;
