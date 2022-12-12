import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Amoeba.css";
import { useNavigate } from "react-router-dom/dist";
import { motion } from "framer-motion";


function Amoeba(props) {

  const navigate = useNavigate();
  const amoebaImages = ["/images/amoeba (1).jpg", "/images/amoeba (2).jpg", "/images/amoeba (3).jpg"];
  const [zindex, setZindex] = useState(null);

  return (
    <div className={"col-md-12 d-flex justify-content-center"} style={{height:'130vh'}}>
      {amoebaImages.map((banner, key) => {
        if (key == 0) {
          return (
            <motion.div className={"col-md-6 d-flex justify-content-center"}
              
              animate={{ x: props.coords.x, y: props.coords.y, opacity: 1, animationDelay: 200 }}>
              <img
                className={" " + (props.images.length - 1) === key && props.images.length > 2 ? "last-image" : ""}
                // style={{ marginLeft: props.images.length == 2 && (props.images.length - 1) == key ? '-100px' : '' }}
                // src={`${base_url}` + "/img/projects/" + banner}
                src={banner}
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
