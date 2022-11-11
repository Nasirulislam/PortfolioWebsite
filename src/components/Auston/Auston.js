import React, { useState } from "react";
import image1 from "./../../Assets/images/6.jpg";
import image2 from "./../../Assets/images/5.jpg";
import image3 from "./../../Assets/images/4.jpg";
import "./Auston.css";
import { useNavigate } from "react-router-dom/dist";
function Auston(props) {
  const [homeState, setHomeState] = useState(true);
  const navigate = useNavigate();
  return (
    <div
      className="auston-section"
      style={{ marginTop: "20%" }}
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
      <div className="d-flex justify-content-center">
        <div className="Auston-image1 mx-3">
          <img className="img-fluid hoverImages" src={props.image1} />
        </div>
        <div className="Auston-image2 mx-3">
          <img className="img-fluid hoverImages" src={props.image2} />
        </div>
      </div>
      <div className="Auston-image3">
        <img className="img-fluid hoverImages" src={props.image3} />
      </div>
    </div>
  );
}

export default Auston;
