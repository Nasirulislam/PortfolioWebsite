import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Fencher.css";
import image1 from "../../Assets/images/1.jpg";
import image2 from "../../Assets/images/4.jpg";
import { useNavigate } from "react-router-dom";
import base_url from "../../constants/url";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useInView
} from "framer-motion";
import AnimatedText from "../AnimatedText";

function Fencher(props) {
  const navigate = useNavigate();
  const [imageDirec, setImageDirec] = useState({ x: 0, y: 0 });
  const moveImage = (e) => {
    if (e.clientX < 356 && e.clientY < 356) {
      setImageDirec({ x: e.clientX + 5, y: e.clientY + 5 });
    }
  };

  const ref1 = useRef(null);

  function handleChange(name) {
    props.onChange(name);
  }

  useEffect(() => {
    window.addEventListener("mousemove", moveImage);
    return () => {
      window.removeEventListener("mousemove", moveImage);
    };
  }, []);

  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  // const y = useParallax(scrollYProgress, 200);

  const txtRef = useRef(null)
  const isInView = useInView({ root: txtRef, once: false });

  const { scrollYProgress } = useScroll({
    target: txtRef,
    offset: ["start end", "end end"]
  })


  const portfolioAnimation = {
    hidden: {
      // opacity: 0,
      y: 100
    },
    visible: {
      y: 0,
      // opacity: 1
    }
  };

  const container = {
    visible: {
      transition: {
        // staggerChildren: 0.025
      }
    }
  };

  return (
    <div
      style={{ cursor: "pointer", position: 'relative' }}
      ref={ref}
      onClick={() => {
        navigate(
          props.slug
        );
        window.scrollTo(0, 0);
      }}
    >

      <div className="image2">
        <div className={"row align-items-center " + (props.images.length == 2 ? "justify-content-center" : "justify-content-around")} style={{height: '100vh'}}>
            {props.images.map((banner, key) => {
              return (
                <img
                  className={key == 0 ? "hoverImages" : (props.images.length - 1) === key && props.images.length > 2  ? "last-image" : ""}
                  style={{marginLeft: props.images.length == 2 && (props.images.length-1) == key ? '-100px' : '' }}
                  src={`${base_url}` + "/img/projects/" + banner}
                  key={key}
                />
              )
            })}
        </div>
      </div>
    </div>
  );
}

export default Fencher;
