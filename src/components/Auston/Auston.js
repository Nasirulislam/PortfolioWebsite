import React, { useEffect, useMemo, useRef, useState } from "react";
import image1 from "./../../Assets/images/6.jpg";
import image2 from "./../../Assets/images/5.jpg";
import image3 from "./../../Assets/images/4.jpg";
import "./Auston.css";
import { useNavigate } from "react-router-dom/dist";
import base_url from "../../constants/url";
function Auston(props) {
  const [homeState, setHomeState] = useState(true);
  const navigate = useNavigate();

  const ref1 = useRef(null);
  // const ref2 = useRef(null);
  const isInViewport = useIsInViewport(ref1);
  if(isInViewport){
    handleChange({name: props.name, slug: props.slug});
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
    ref={ref1}
    id="index_01"
      className="auston-section"
      style={{ backgroundColor: "#ebc12a" }}
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
      <div className="d-flex justify-content-center">
        <div className="Auston-image1 mx-3">
          <img className="img-fluid hoverImages" src={ `${base_url}`+'/img/projects/' + props.image1 } />
        </div>
        <div className="Auston-image2 mx-3">
          <img className="img-fluid hoverImages" src={ `${base_url}`+'/img/projects/' + props.image2 } />
        </div>
      </div>
      <div className="Auston-image3">
        <img className="img-fluid hoverImages" src={ `${base_url}`+'/img/projects/' + props.image3 } />
      </div>
    </div>
  );
}

export default Auston;
