import React from "react";
import { useNavigate } from "react-router-dom/dist";
import { motion } from "framer-motion";
import base_url from "../../constants/url";

function Brenna(props) {
  const navigate = useNavigate();

  return (
    <div className={"col-md-12 d-flex align-items-center " + (props.images.length == 2 ? "justify-content-center" : "justify-content-around")}>
      {props.images.slice(0, 3).map((banner, key) => {
        return key == 0 ? <motion.div className={"col-md-6 d-flex align-items-center justify-content-center"}
          style={{ zIndex: 1 }}
          animate={{ x: props.coords.x, y: props.coords.y, opacity: 1, animationDelay: 200 }}
          key={key}>
          <img
            className={" " + (props.images.length - 1) === key && props.images.length > 2 ? "last-image" : ""}
            src={`${base_url}` + "/img/projects/" + banner}
            key={key}
          />
        </motion.div>
          : key == 1 ?
            <motion.div className={"col-md-6 d-flex align-items-center justify-content-center"}
              animate={{ x: props.slowCoords.x, y: props.slowCoords.y, opacity: 1, animationDelay: 200 }}
              key={key}>
              <img
                className={" " + (props.images.length - 1) === key && props.images.length > 2 ? "last-image" : ""}
                src={`${base_url}` + "/img/projects/" + banner}
                key={key}
              />
            </motion.div>
            : key == 2 ? <motion.div className={"col-md-12 d-flex align-items-center justify-content-center"}
              animate={{ x: props.slowCoords.x, y: props.slowCoords.y, opacity: 1, animationDelay: 200 }} style={{ position: 'absolute', top: '35%', zIndex: 1 }}
              key={key}>
              <img
                className={" " + (props.images.length - 1) === key && props.images.length > 2 ? "last-image" : ""}
                src={`${base_url}` + "/img/projects/" + banner}
                key={key}
              />
            </motion.div> : <></>
      })}
    </div>
  );
}

export default Brenna;
