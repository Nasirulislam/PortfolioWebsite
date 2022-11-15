import React from "react";
import { useNavigate } from "react-router-dom/dist";
import base_url from "../../constants/url";
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
              name: props.name,
              detail: props.name,
              images: props.images,
            },
          });
        }}
      >
        <img className="img-fluid hoverImages" src={ `${base_url}`+'/img/projects/' + props.image1 } />
      </div>
    </div>
  );
}

export default Brenna;
