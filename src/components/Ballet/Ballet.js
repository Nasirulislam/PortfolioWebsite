import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Ballet.css";
import image1 from "./../../Assets/images/2.jpg";
import image2 from "./../../Assets/images/1.jpg";
import image3 from "./../../Assets/images/3.jpg";
import { Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom/dist";
import base_url from "../../constants/url";
function Ballet(props) {
  const navigate = useNavigate();

  const ref1 = useRef(null);
  // const ref2 = useRef(null);
  const isInViewport = useIsInViewport(ref1);
  if (isInViewport) {
    handleChange({ name: props.name, slug: props.slug });
  }

  function handleChange(name) {
    // Here, we invoke the callback with the new value
    props.onChange(name);
  }

  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  }

  return (
    <div
      className="ballet-section"
      ref={ref1}
      onClick={() => {
        navigate(props.slug, {
          state: {
            name: props.name,
            detail: props.name,
            images: props.images,
          },
        });
        window.scrollTo(0,0);
      }}
    >
      <div className="home-title">
        <h1>{props.name}</h1>
      </div>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="ballet-img1">
              <img
                className="img-fluid hoverImages"
                src={`${base_url}` + "/img/projects/" + props.image1}
              />
            </div>

            <div className="ballet-img2">
              <img
                className="img-fluid hoverImages"
                src={`${base_url}` + "/img/projects/" + props.image2}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="ballet-img3">
              <img
                className="img-fluid hoverImages"
                src={`${base_url}` + "/img/projects/" + props.image3}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Ballet;
