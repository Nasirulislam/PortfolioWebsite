import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import base_url from "../../constants/url";
function Brenna(props) {
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
      className="d-flex justify-content-center"
      style={{ position: "relative", marginTop: "5%",height:"100" }}
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
