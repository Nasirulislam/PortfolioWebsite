import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import base_url from "../../constants/url";
function BabyYorus(props) {
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
      className="d-flex justify-content-center align-items-center me"
      style={{ marginTop: "5%", position: "relative",height:"100" }}
      ref={ref1}
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
      <div
        className="baby-yorus-image1"
        style={{ maxWidth: 550, maxHeight: 550, margin: 20 }}
      >
        <img className="img-fluid hoverImages" src={ `${base_url}`+'/img/projects/' + props.image1 } />
      </div>
      <div
        className="baby-yorus-image1"
        style={{ maxWidth: 450, maxHeight: 450, margin: 20 }}
      >
        <img className="img-fluid hoverImages" src={ `${base_url}`+'/img/projects/' + props.image1 } />
      </div>
    </div>
  );
}

export default BabyYorus;
