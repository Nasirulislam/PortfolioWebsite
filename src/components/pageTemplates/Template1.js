import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import url from "../../constants/url";
import "./template.css";
import tempImg from "./tempImg";
function Template1(props) {
  return (
    <div>
      <div className="title">
        <h1>{props.title}</h1>
      </div>
      <div className="temp1_sec1">
        <img className="temp1_img1" src={tempImg[0]} />
        <img className="temp1_img2" src={tempImg[1]} />
      </div>
      <div className="temp1_sec2">
        <img className="img-fluid temp1_img3" src={tempImg[2]} />
        <img className=" img-fluid temp1_img4" src={tempImg[3]} />
      </div>
      <div className="temp1_sec3">
        <img className="img-fluid temp1_img5" src={tempImg[4]} />
      </div>
      {/* {tempImg.map((item, index) => {
        console.log(url.url + "/img/projects/" + item);
        if (index == 0) {
          return (
            <div>
              <img
                className="img-fluid temp1_img1"
                // src={url.url + "/img/projects/" + item}
                src={item}
              />
            </div>
          );
        } else if (index == 1) {
          return (
            <div>
              <img
                className="img-fluid temp1_img2"
                src={ item}
              />
            </div>
          );
        } else if (index == 2) {
          return (
            <div>
              <img
                className="img-fluid temp1_img3"
                src={ item}
              />
            </div>
          );
        } else if (index == 3) {
          return (
            <div>
              <img
                className="img-fluid temp1_img3"
                src={ item}
              />
            </div>
          );
        } else if (index == 4) {
          return (
            <div>
              <img
                className="img-fluid temp1_img4"
                src={ item}
              />
            </div>
          );
        } else if (index == 5) {
          return (
            <div>
              <img
                className="img-fluid temp1_img5"
                src={item}
              />
            </div>
          );
        } else if (index == 6) {
          return (
            <div>
              <img
                className="img-fluid temp1_img6"
                src={item}
              />
            </div>
          );
        } else if (index == 7) {
          return (
            <div>
              <img
                className="img-fluid temp1_img7"
                src={item}
              />
            </div>
          );
        } else if (index == 8) {
          return (
            <div>
              <img
                className="img-fluid temp1_img8"
                src={item}
              />
            </div>
          );
        } else if (index == 9) {
          return (
            <div>
              <img
                className="img-fluid temp1_img9"
                src={ item}
              />
            </div>
          );
        } else if (index == 10) {
          return (
            <div>
              <img
                className="img-fluid temp1_img10"
                src={item}
              />
            </div>
          );
        }
      })} */}
    </div>
  );
}

export default Template1;
