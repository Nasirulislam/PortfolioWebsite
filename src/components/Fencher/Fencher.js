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
  const isInView = useInView({ root: txtRef, once: true });

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

  const titleAnimation = {
    hidden: {
      y: "200%",
      // color: "#0055FF",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      // color: "#FF0088",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };

  return (
    <div
      className="fencher-section card-wrapper mt-0"
      style={{ cursor: "pointer", position: 'relative' }}
      ref={ref}
      onClick={() => {
        navigate(
          props.slug
        );
        window.scrollTo(0, 0);
      }}
    >

      <motion.div className="home-title">
        <motion.h1 ><AnimatedText {...{ type: "heading", text: props.name || "waheed" }} /></motion.h1>
      </motion.div>

      <motion.div className="image2 d-flex justify-content-around align-items-center" variants={portfolioAnimation}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: false, amount: 0.7 }}
        transition={{ type: "spring", duration: 2 }}>
        {props.images.map((banner, key) => {
          return (
            <img
              className={key == 0 ? "hoverImages" : ""}
              // style={{ y }}
              src={`${base_url}` + "/img/projects/" + banner}
              key={key}
            />
          )
        })}
      </motion.div>
      {/* <motion.div className="image1" >
        <img
          className="image1"
          src={`${base_url}` + "/img/projects/" + props.image1}
        />
      </motion.div> */}

    </div>
  );
}

export default Fencher;
