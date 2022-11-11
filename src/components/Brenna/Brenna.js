import React from "react";
import { useNavigate } from "react-router-dom/dist";

function Brenna(props) {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex justify-content-center"
      style={{ position: "relative", marginTop: "5%" }}
    >
      <div
        style={{ maxWidth: 850, maxHeight: 850 }}
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
        <img className="img-fluid hoverImages" src={props.image1} />
      </div>
    </div>
  );
}

export default Brenna;
