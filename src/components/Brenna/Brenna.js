import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { motion } from "framer-motion";
import base_url from "../../constants/url";

function Brenna(props) {
  const navigate = useNavigate();
  const amoebaImages = props.images.slice(0,2);
  const [zindex, setZindex] = useState(null);

  return (
    <div className={"col-md-12 d-flex align-items-center " + (props.images.length == 2 ? "justify-content-center" : "justify-content-around")}>
      {amoebaImages.map((banner, key) => {
        if (key == 0) {
          return (
            <motion.div className={"col-md-6 d-flex align-items-center justify-content-center"}
              style={{ zIndex: 1 }}
              animate={{ x: props.coords.x, y: props.coords.y, opacity: 1, animationDelay: 200 }}>
              <img
                className={" " + (props.images.length - 1) === key && props.images.length > 2 ? "last-image" : ""}
                // style={{ marginLeft: props.images.length == 2 && (props.images.length - 1) == key ? '-100px' : '' }}
                src={`${base_url}` + "/img/projects/" + banner}
                key={key}
              />
            </motion.div>
          )
        } else if (key == 1) {
          return (
            <motion.div className={"col-md-6 d-flex align-items-center justify-content-center"}
              animate={{ x: props.slowCoords.x, y: props.slowCoords.y, opacity: 1, animationDelay: 200 }}>
              <img
                className={" " + (props.images.length - 1) === key && props.images.length > 2 ? "last-image" : ""}
                // style={{ marginLeft: props.images.length == 2 && (props.images.length - 1) == key ? '-100px' : '' }}
                src={`${base_url}` + "/img/projects/" + banner}
                key={key}
              />
            </motion.div>
          )
        } else {
          return (
            <motion.div className={"col-md-6 d-flex align-items-center justify-content-center"}
              animate={{ x: props.slowCoords.x, y: props.slowCoords.y, opacity: 1, animationDelay: 200 }} style={{ position: 'absolute', top: '50%', left: '0px' }}>
              <img
                className={" " + (props.images.length - 1) === key && props.images.length > 2 ? "last-image" : ""}
                // style={{ marginLeft: props.images.length == 2 && (props.images.length - 1) == key ? '-100px' : '' }}
                src={`${base_url}` + "/img/projects/" + banner}
                key={key}
              />
            </motion.div>
          )
        }

      })}
    </div>
  );
}

export default Brenna;
