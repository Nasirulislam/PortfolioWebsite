import React from "react";
import "./Ballet.css";
import image1 from "./../../Assets/images/2.jpg";
import image2 from "./../../Assets/images/1.jpg";
import image3 from "./../../Assets/images/3.jpg";
import { Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom/dist";

function Ballet(props) {
  const navigate = useNavigate();
  return (
    <div
      className="ballet-section"
      onClick={() => {
        navigate(props.slug, {
          state: {
            title: props.title,
            detail: props.title,
            images: props.images,
          },
        });
      }}
    >
      <Container>
        <Row>
          <Col lg={6}>
            <div className="ballet-img1">
              <img className="img-fluid hoverImages" src={props.image1} />
            </div>

            <div className="ballet-img2">
              <img className="img-fluid hoverImages" src={props.image2} />
            </div>
          </Col>
          <Col lg={6}>
            <div className="ballet-img3">
              <img className="img-fluid hoverImages" src={props.image3} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Ballet;
