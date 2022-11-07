import React, { useState } from "react";
import "./Index.css";
import { motion } from "framer-motion";

function IndexItem(props) {
  const [isAnimating, setIsAnitmating] = useState(false);

  const handleClick = (itemId) => {
    setIsAnitmating(!isAnimating);

  };

  return (
    <div>
      <div className="d-flex index-list-props">
        <h3 onClick={() => handleClick(props.id)}>{props.text}</h3>
        <p>{props.id}</p>
        <motion.div
          className="index-image"
          animate={{
            x: isAnimating ? 500 : "-200vh",
            opacity: 1,
            position: "absolute",
          }}
          initial={{
            opacity: 0.1,
            position: "relative",
            rotate:0,
          }}
          transition={{
            type: "spring",
            stiffness: 60,
          }}
        >
          <img className="img-fluid" src={props.image} />
        </motion.div>
      </div>
    </div>
  );
}

export default IndexItem;
