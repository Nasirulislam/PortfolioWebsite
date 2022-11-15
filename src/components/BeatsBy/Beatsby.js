import React from "react";
import { useNavigate } from "react-router-dom/dist";
import "./Beatsby.css";
import base_url from "../../constants/url";
function BeatsBy(props) {
  const navigate = useNavigate();
  return (
    <div
    id="index_02"
      className="beats-section"
      style={{ top: props.top }}
      onClick={() => {
        navigate(props.slug, {
          state: {
            name: props.name,
            detail: props.name,
            images: props.images,
          },
        });
      }}
    >
      <div className="beats-image1">
        <img className="img-fluid hoverImages" src={ `${base_url}`+'/img/projects/' + props.image2 } />
      </div>
      <div className="beats-image2">
        <img className="img-fluid hoverImages" src={ `${base_url}`+'/img/projects/' + props.image1 } />
      </div>
    </div>
  );
}

export default BeatsBy;
