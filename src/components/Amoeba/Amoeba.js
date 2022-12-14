import React from "react";
import "./Amoeba.css";
import { motion } from "framer-motion";
import base_url from "../../constants/url";

function Amoeba(props) {
  const amoebaImages = props.images.slice(0, 1);

  return (
    <div className={"col-md-12 d-flex justify-content-center"} style={{ height: '100%' }}>
      {amoebaImages.map((banner, key) => {
        if (key == 0) {
          return (
            <motion.div className={"col-md-8 d-flex justify-content-center"}
              animate={{ x: props.coords.x, y: props.coords.y, opacity: 1, animationDelay: 200 }}
              key={key}>
              <img
                className={" " + (props.images.length - 1) === key && props.images.length > 2 ? "last-image" : ""}
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

export default Amoeba;
