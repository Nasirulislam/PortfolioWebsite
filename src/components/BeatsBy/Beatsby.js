import React from "react";
import { useNavigate } from "react-router-dom/dist";
import "./Beatsby.css";
function BeatsBy(props) {
  const navigate = useNavigate();
  return (
    <div
      className="beats-section"
      style={{ top: props.top }}
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
      <div className="beats-image1">
        <img className="img-fluid hoverImages" src={props.image2} />
      </div>
      <div className="beats-image2">
        <img className="img-fluid hoverImages" src={props.image1} />
      </div>
    </div>
  );
}

export default BeatsBy;
