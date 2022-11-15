import React, { useState } from "react";
import "./Index.css";
import { motion } from "framer-motion";
import base_url from "../../constants/url";
function IndexItem(props) {
  const [isAnimating, setIsAnitmating] = useState(false);
  const [display, setDisplay] = useState(true);
  const handleClick = (itemId) => {
    setIsAnitmating(!isAnimating);
    setDisplay(true);
    setTimeout(() => {
      setDisplay(false)
    }, 2000);
  };

  return (
    <div>
      <div className="d-flex index-list-props">
        <h3 onMouseOver={() => handleClick(props.name)}>{props.text}</h3>
        <p>{props.name}</p>
        <motion.div
          className="index-image"
          id="in-image"
          style={{ display: display ? "inline" : "none" }}
          animate={{
            x: isAnimating ? 500 : "-200vh",
            opacity: isAnimating ? 1 : 0,
            position: "absolute",
          }}
          initial={{
            opacity: 0,
            position: "relative",
            rotate: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 60,
          }}
        >
          <img
            className="img-fluid"
            src={`${base_url}` + "/img/projects/" + props.image}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default IndexItem;
