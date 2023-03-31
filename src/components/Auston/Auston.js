import React from "react";
import "./Auston.css";
import {
  motion
} from "framer-motion";
import Helper from "../../constants/Helper";


function Auston(props) {
  return (
    <div className={"col-md-12 col-12 d-flex align-items-center justify-content-center"} style={{ height: '100%' }}>
      {props.images.map((banner, key) => {
        {
          if (key === 0) {
            return (
              <motion.div className={"col-md-10 d-flex align-items-center justify-content-center"}
                animate={{ x: props.coords.x, y: props.coords.y, opacity: 1, animationDelay: 200 }}>
                {
                  banner.fileUrl.includes("mp4") ?
                    <>
                      <video autoplay loop muted onClick={() => props.handleSlug()}>
                        <source src={banner.fileUrl} type="video/mp4" />
                        <source src={banner.fileUrl} type="video/ogg" />
                        Your browser does not support the video tag.
                      </video>
                    </>
                    :
                    <div
                      className="image-container"
                      style={{ marginLeft: props.images.length == 2 && (props.images.length - 1) == key ? '-100px' : '', height: 'auto', cursor: 'pointer', maxHeight: '100%' }}
                      onClick={() => props.handleSlug()}
                    >
                      <Helper banner={banner} largeCircle={{ x: 0, y: 0 }} index={key} imageFluid={false}/>
                    </div>


                  // <img
                  //   className="image-container"
                  //   style={{ marginLeft: props.images.length == 2 && (props.images.length - 1) == key ? '-100px' : '', height: 'auto', cursor: 'pointer', maxHeight: '100%' }}
                  //   src={banner.fileUrl}
                  //   key={key}
                  //   onClick={() => props.handleSlug()}
                  // />
                }
              </motion.div>
            )
          }
        }
      })}
    </div>
  );
}

export default Auston;
