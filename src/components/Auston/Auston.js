import React, { useRef, useState } from "react";
import "./Auston.css";
import { useNavigate } from "react-router-dom/dist";
import base_url from "../../constants/url";
import {
  motion
} from "framer-motion";


function Auston(props) {

  const navigate = useNavigate();
  const fencerImages = props.images.slice(0,2);

  return (
    <div className={"col-md-12 d-flex align-items-center " + (props.images.length == 2 ? "justify-content-center" : "justify-content-around")} style={{ height: '100vh' }}>
      {fencerImages.map((banner, key) => {
        {
          if (key === 0) {
            return (
              <motion.div className={"col-md-7 d-flex align-items-center justify-content-end"}
                animate={{ x: props.coords.x, y: props.coords.y, opacity: 1, animationDelay: 200 }}>
                <img
                  className="image-container"
                  style={{ marginLeft: props.images.length == 2 && (props.images.length - 1) == key ? '-100px' : '', height: 'auto', cursor: 'pointer', maxHeight: '100vh' }}
                  src={`${base_url}` + "/img/projects/" + banner}
                  key={key}
                  onClick={() => props.handleSlug()}
                />
              </motion.div>
            )
          } else {
            return (
              <motion.div className={"col-md-5 d-flex align-items-center"} style={{ height: '100vh' }}
                animate={{ x: props.slowCoords.x, y: props.slowCoords.y, opacity: 1, animationDelay: 200 }}>
                <img
                  className={"col-md-6 " + ((props.images.length - 1) === key && props.images.length > 2) ? " last-image" : " image-container "}
                  style={{ marginLeft: props.images.length == 2 && (props.images.length - 1) == key ? '-100px' : '', cursor: 'pointer' }}
                  src={`${base_url}` + "/img/projects/" + banner}
                  key={key}
                  onClick={() => props.handleSlug()}
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
