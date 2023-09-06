import React from "react";
import "./Amoeba.css";
import { motion } from "framer-motion";
import base_url from "../../constants/url";
import Helper from "../../constants/Helper";

function Amoeba(props) {
  // const amoebaImages = props.imagesAndThumb.slice(0, 2);

  const handleClick = () => {
    console.log("this is ptops name",props.name); props.handleSlug(props.name)
  }


  return (
    <div className={"col-md-12 d-flex justify-content-center"}>
      {props.images.map((banner, key) => {
        if (key === 0 || key === 1) {
          return (
            <motion.div className={"col-md-6 d-flex amoeba " + (key === 1 ? "justify-content-start" : "justify-content-end")}
              animate={{ x: key === 0 ? props.coords.x : 0, y: key === 0 ? props.coords.y : 0, opacity: 1, animationDelay: 200 }}
              key={key}
              style={{ height: '100%' }}>
              {
                banner.fileUrl.includes("mp4") ?
                  <video autoPlay loop muted playsInline onClick={() => props.handleSlug()}>
                    <source src={banner.fileUrl} type="video/mp4" />
                    <source src={banner.fileUrl} type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                  :
                  <div
                    className={" " + (props.images.length - 1) === key && props.images.length > 2 ? "last-image" : ""}
                    style={{ cursor: 'pointer', maxHeight: '100%' }}
                    onClick={handleClick}
                  >
                    <Helper banner={banner} largeCircle={{ x: 0, y: 0 }} index={key} imageFluid={false} />
                  </div>

                // <img
                //   className={" " + (props.images.length - 1) === key && props.images.length > 2 ? "last-image" : ""}
                //   src={banner.fileUrl}
                //   key={key}
                //   style={{ cursor: 'pointer', maxHeight: '100%' }}
                //   onClick={() => props.handleSlug()}
                // />
              }
            </motion.div>
          )
        }

      })}
    </div>
  );
}

export default Amoeba;
