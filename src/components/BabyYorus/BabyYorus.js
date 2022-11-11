import React from "react";
import { useNavigate } from "react-router-dom/dist";

function BabyYorus(props) {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ marginTop: "5%", position: "relative" }}
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
      <div
        className="baby-yorus-image1"
        style={{ maxWidth: 550, maxHeight: 550, margin: 20 }}
      >
        <img className="img-fluid hoverImages" src={props.image1} />
      </div>
      <div
        className="baby-yorus-image1"
        style={{ maxWidth: 450, maxHeight: 450, margin: 20 }}
      >
        <img className="img-fluid hoverImages" src={props.image2} />
      </div>
    </div>
  );
}

export default BabyYorus;
