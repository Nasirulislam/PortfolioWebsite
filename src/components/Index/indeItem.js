import React, { useState } from "react";
import "./Index.css";
import { motion } from "framer-motion";
import base_url from "../../constants/url";
import { useNavigate } from "react-router-dom";

function IndexItem(props) {
  const [isAnimating, setIsAnitmating] = useState(false);
  const [display, setDisplay] = useState(true);

  const onMouseOver = (itemId, itemColor) => {
    setIsAnitmating(true);

    document.getElementById(itemColor).style.color = itemColor;

    setDisplay(true);
    setTimeout(() => {
      setDisplay(false);
    }, 8000);
  };

  const onMouseLeave = (itemId, itemColor) => {
    setIsAnitmating(false);
    setDisplay(false);
    document.getElementById(itemColor).style.color = 'white';
  };
  const navigate = useNavigate();
  return (
    <div className="index-item-section">
      <div className="d-flex indexlist-props">
        <h3
          className="indexitem-button"
          title={props.text}
          id={props.color}
          // data-replace={props.text}
          onMouseEnter={() => onMouseOver(props.name,props.color)}
          onMouseLeave={() => onMouseLeave(props.name,props.color)}
          onClick={() => {
            props.setRedHome();
            props.closeIndex();
            navigate(props.currentProject.slug, {
              state: {
                name: props.currentProject.name,
                detail: props.currentProject.name,
                images: [...props.currentProject.images],
                projects: props.projects,
                nextProject: props.nextProject,
              },
            });
          }}
        >
          {props.text}
        </h3>
        {/* <div className="index-atend">
          <p>{props.currentProject.slug}</p>
        </div> */}
      </div>
      <motion.div
        className="index-image"
        id="in-image"
        style={{ display: display ? "inline" : "none" }}
        animate={{
          x: isAnimating ? 500 : "200vh",
          opacity: isAnimating ? 1 : 0,
          position: "absolute",
        }}
        initial={{
          opacity: 0,
          position: "relative",
          x: "200vh",
          rotate: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
      >
        <img
          className="img-fluid animated fadeOut"
          src={`${base_url}` + "/projects/" + props.image}
        />
      </motion.div>
    </div>
  );
}

export default IndexItem;
