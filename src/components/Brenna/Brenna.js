import React from "react";
import { motion } from "framer-motion";
import base_url from "../../constants/url";

function Brenna(props) {

  return (
    <div className={"col-md-12 d-flex align-items-center brenna-master " + (props.images.length == 2 ? "justify-content-center" : "justify-content-around")}>
      {props.images.map((banner, key) => {
        return key == 0 ? <motion.div className={"col-md-6 d-flex align-items-center justify-content-center brenna-first"}
          style={{ zIndex: 1 }}
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
          : key == 1 ?
            <motion.div className={"col-md-6 d-flex align-items-center justify-content-start brenna-start"}
              animate={{ x: props.slowCoords.x, y: props.slowCoords.y, opacity: 1, animationDelay: 200 }}
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
            : key == 2 ? <motion.div className={"col-md-12 d-flex align-items-center justify-content-center brenna-first"}
              animate={{ x: props.slowCoords.x, y: props.slowCoords.y, opacity: 1, animationDelay: 200 }} style={{ position: 'absolute', top: '35%', zIndex: 1 }}
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
                    style={{ cursor: 'pointer', maxHeight: '100vh', maxWidth: '100vh', width: '100%' }}
                    onClick={() => props.handleSlug()}
                  />
              }
            </motion.div> : <></>
      })}
    </div>
  );
}

export default Brenna;
