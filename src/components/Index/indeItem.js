import React, { useState } from "react";
import "./Index.css";
import { motion } from "framer-motion";
import base_url from "../../constants/url";

function IndexItem(props) {
  const [isAnimating, setIsAnitmating] = useState(false);
  const [display, setDisplay] = useState(true);

  const onMouseOver = (itemId) => {
    setIsAnitmating(true);
    setDisplay(true);
    setTimeout(() => {
      setDisplay(false);
    }, 8000);
  };

  const onMouseLeave = (itemId) => {
    setIsAnitmating(false);
    setDisplay(false);
  };

  return (
    <div className="index-item-section">
      <div className="d-flex index-list-props">
        <h3
          className="index-item-button"
          onMouseEnter={() => onMouseOver(props.name)}
          onMouseLeave={() => onMouseLeave(props.name)}
        >
          <a
            className="index-item-anch"
            href="#"
            id="style-2"
            data-replace={props.text}
          >
            <span>{props.text}</span>
          </a>
        </h3>

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
            className="img-fluid animated fadeOut"
            src={`${base_url}` + "/img/projects/" + props.image}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default IndexItem;
