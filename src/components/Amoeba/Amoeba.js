import React from "react";
import image1 from "./../../Assets/images/2.jpg";
import image2 from "./../../Assets/images/1.jpg";
import image3 from "./../../Assets/images/3.jpg";
import "./Amoeba.css";
import { useNavigate } from "react-router-dom/dist";
function Amoeba(props) {
  const navigate =useNavigate();
  return (
    <div
      className="amoeba-section"
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
        <div className="amoeba-imge1">
          <img className="img-fluid hoverImages" src={props.image1} />
        </div>
        <div className="amoeba-imge2">
          <img className="img-fluid hoverImages" src={props.image3} />
        </div>
      </div>
      <div className="amoeba-imge3">
        <img className="img-fluid hoverImages" src={props.image2} />
      </div>
    </div>
  );
}

export default Amoeba;
