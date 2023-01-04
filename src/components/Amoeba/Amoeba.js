import React from "react";
import "./Amoeba.css";
import { motion } from "framer-motion";
import base_url from "../../constants/url";

function Amoeba(props) {
  const amoebaImages = props.images.slice(0, 2);
  return (
    <div className={"col-md-12 d-flex justify-content-center"} style={{ height: '100%' }}>
      {amoebaImages.map((banner, key) => {
        return (
          <motion.div className={"col-md-8 d-flex justify-content-center amoeba"}
            animate={{ x: props.coords.x, y: props.coords.y, opacity: 1, animationDelay: 200 }}
            key={key}>
            {
              banner.includes("mp4") ?
                <video autoPlay loop muted>
                  <source src={`${base_url}` + "/projects/" + banner} type="video/mp4" />
                  <source src={`${base_url}` + "/projects/" + banner} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
                :
                <img
                  className={" " + (props.images.length - 1) === key && props.images.length > 2 ? "last-image" : ""}
                  src={`${base_url}` + "/projects/" + banner}
                  key={key}
                  style={{ cursor: 'pointer' }}
                  onClick={() => props.handleSlug()}
                />
            }
          </motion.div>
        )
      })}
    </div>
  );
}

export default Amoeba;
