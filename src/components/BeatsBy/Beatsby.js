import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import "./Beatsby.css";
import base_url from "../../constants/url";
function BeatsBy(props) {
  const navigate = useNavigate();

  const ref1 = useRef(null);
  // const ref2 = useRef(null);
  const isInViewport = useIsInViewport(ref1);
  if (isInViewport) {
    console.log(props.name);
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
      id="index_02"
      ref={ref1}
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
        <img
          className="img-fluid hoverImages"
          src={`${base_url}` + "/img/projects/" + props.image2}
        />
      </div>
      <div className="beats-image2">
        <img
          className="img-fluid hoverImages"
          src={`${base_url}` + "/img/projects/" + props.image1}
        />
      </div>
    </div>
  );
}

export default BeatsBy;
