import React, { useEffect, useMemo, useRef, useState } from "react";
import image1 from "./../../Assets/images/6.jpg";
import image2 from "./../../Assets/images/5.jpg";
import image3 from "./../../Assets/images/4.jpg";
import "./Auston.css";
import { useNavigate } from "react-router-dom/dist";
import base_url from "../../constants/url";
import AnimatedText from "../AnimatedText";
import {
  motion
} from "framer-motion";


function Auston(props) {
  const [homeState, setHomeState] = useState(true);
  const navigate = useNavigate();

  const ref1 = useRef(null);

  function handleChange(name) {
    // Here, we invoke the callback with the new value
    props.onChange(name);
  }

  const ref = useRef(null);

  const portfolioAnimation = {
    hidden: {
      y: 100
    },
    visible: {
      y: 0
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
    </div>
  );
}

export default Auston;
