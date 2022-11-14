import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import image1 from "./../../Assets/images/2.jpg";
import url from "../../constants/url"
import "./Fencher.css";
function FencerMain() {
  const location = useLocation();
  const { title, detail, images } = location.state;
  return (
    <div>
      <div className="images">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="fencer-title">
                <h1>{title}</h1>
                <p>{detail}</p>
              </div>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                className="img-fluid hoverImages"
                src={images[0].url}
                alt="Image not Found"
              />
            </Col>
          </Row>
        </Container>
        {images?.map((image, index) => {
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

          return (
            <div style={{ alignSelf:FloatP, zIndex:1 }}>
              <img className="img-fluid m-1 main-page-images hoverImages" src={url.url + "/img/projects/" + image.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FencerMain;
