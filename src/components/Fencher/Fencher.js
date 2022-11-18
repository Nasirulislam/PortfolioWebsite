import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Fencher.css";
import image1 from "../../Assets/images/1.jpg";
import image2 from "../../Assets/images/4.jpg";
import { useNavigate } from "react-router-dom";
import base_url from "../../constants/url";

function Fencher(props) {
  const navigate = useNavigate();
  const [imageDirec, setImageDirec] = useState({ x: 0, y: 0 });
  const moveImage = (e) => {
    if (e.clientX < 356 && e.clientY < 356) {
      setImageDirec({ x: e.clientX + 5, y: e.clientY + 5 });
    }
  };

  const ref1 = useRef(null);
  const isInViewport = useIsInViewport(ref1);
  if (isInViewport) {
    handleChange({ name: props.name, slug: props.slug });
  }

  function handleChange(name) {
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

  useEffect(() => {
    window.addEventListener("mousemove", moveImage);
    return () => {
      window.removeEventListener("mousemove", moveImage);
    };
  }, []);
  return (
    <div>
      <div
        className="fencher-section mt-0"
        style={{ backgroundColor: "#acdde9" }}
        ref={ref1}
        onClick={() => {
          console.log(props.name);
          navigate(props.slug, {
            state: {
              name: props.name,
              detail: props.name,
              images: [...props.images],
              nextProject: props.nextProject,
            },
          });
        }}
      >
        <div className="image1">
          <img
            className="image1"
            src={`${base_url}` + "/img/projects/" + props.image1}
          />
        </div>
        <div className="image2">
          <img
            className="image2"
            src={`${base_url}` + "/img/projects/" + props.image2}
          />
        </div>
      </div>
    </div>
  );
}

export default Fencher;
