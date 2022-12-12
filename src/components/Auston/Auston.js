import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Auston.css";
import { useNavigate } from "react-router-dom/dist";
import base_url from "../../constants/url";
import {
  useScroll,
  motion
} from "framer-motion";


function Auston(props) {
  const [homeState, setHomeState] = useState(true);
  const navigate = useNavigate();

  const ref1 = useRef(null);

  const { scrollYProgress } = useScroll();
  const fencerImages = ["/images/fencer (1).jpg", "/images/fencer (2).jpg"];

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
    <div className={"col-md-12 d-flex align-items-center " + (props.images.length == 2 ? "justify-content-center" : "justify-content-around")} style={{ height: '100vh' }}>
      {fencerImages.map((banner, key) => {
        {
          if (key === 0) {
            return (
              <motion.div className={"col-md-6 d-flex align-items-center justify-content-end"}
                animate={{ x: props.coords.x, y: props.coords.y, opacity: 1, animationDelay: 200 }}>
                <img
                  className="image-container"
                  style={{ marginLeft: props.images.length == 2 && (props.images.length - 1) == key ? '-100px' : '', height: 'auto' }}
                  // src={`${base_url}` + "/img/projects/" + banner}
                  src={banner}
                  key={key}
                />
              </motion.div>
            )
          } else {
            return (
              <motion.div className={"col-md-6 d-flex align-items-center"} style={{ height: '100vh' }}
                animate={{ x: props.slowCoords.x, y: props.slowCoords.y, opacity: 1, animationDelay: 200 }}>
                <img
                  className={"col-md-6 " + ((props.images.length - 1) === key && props.images.length > 2) ? " last-image" : " image-container "}
                  style={{ marginLeft: props.images.length == 2 && (props.images.length - 1) == key ? '-100px' : '' }}
                  // src={`${base_url}` + "/img/projects/" + banner}
                  src={banner}
                  key={key}
                />
              </motion.div>
            )
          }
        }
      })}
    </div>
  );
}

export default Auston;
