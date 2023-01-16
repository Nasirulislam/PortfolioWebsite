import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import base_url from "../../constants/url";

function Brenna(props) {

  const [thirdImage, setThirdImage] = useState("");

  useEffect(() => {
    if (props.images.length > 2) {
      setThirdImage(props.images[2]);
    }
  },[])
  return (
    <>
      <div className={"col-md-12 d-flex align-items-center brenna-master " + (props.images.length == 2 ? "justify-content-center" : "justify-content-around")}>
        {props.images.map((banner, key) => {
          return key == 0 ? <motion.div className={"col-md-6 d-flex align-items-center justify-content-center brenna-first"}
            style={{ zIndex: 1 }}
            animate={{ x: props.coords.x, y: props.coords.y, opacity: 1, animationDelay: 200 }}
            key={key}>
            {
              banner.includes("mp4") ?
                <video autoPlay loop muted onClick={() => props.handleSlug()}>
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
                    <video autoPlay loop muted onClick={() => props.handleSlug()}>
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
              : <></>
        })}
      </div>
      {
        thirdImage !== "" && (
          <motion.div className={"col-md-12 d-flex align-items-center justify-content-center brenna-first"}
            animate={{ x: props.slowCoords.x, y: props.slowCoords.y, opacity: 1, animationDelay: 200 }}
            key={thirdImage}
            style={{position: 'relative', marginTop: '-5%', zIndex: '1'}}>
            {
              thirdImage.includes("mp4") ?
                <video autoPlay loop muted onClick={() => props.handleSlug()}>
                  <source src={`${base_url}` + "/projects/" + thirdImage} type="video/mp4" />
                  <source src={`${base_url}` + "/projects/" + thirdImage} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
                :
                <img
                  src={`${base_url}` + "/projects/" + thirdImage}
                  key={thirdImage}
                  style={{ cursor: 'pointer', maxHeight: 'auto', maxWidth: '100vh' }}
                  onClick={() => props.handleSlug()}
                />
            }
          </motion.div>
        )
      }

    </>
  );
}

export default Brenna;
