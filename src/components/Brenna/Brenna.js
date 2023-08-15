import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import base_url from "../../constants/url";
import Helper from "../../constants/Helper";

function Brenna(props) {

  const [thirdImage, setThirdImage] = useState(null);
  const containerRef = useRef();

  const handleClick = () => {
    // console.log("this is ptops name", props.name); props.handleSlug(props.name)
  }

  useEffect(() => {
    if (props.images.length > 1) {
      setThirdImage(props.images[props.images.length - 1]);
    }
  }, [props.images])
  return (
    <>
      <div className={"col-md-12 d-flex align-items-center brenna-master " + (props.images.length == 2 ? "justify-content-center" : "justify-content-around")}>
        {props.images.map((banner, key) => {
          return key == 0 ? <motion.div className={"col-md-6 d-flex align-items-center justify-content-center brenna-first"}
            style={{ zIndex: 1 }}
            animate={{ x: props.coords.x, y: props.coords.y, opacity: 1, animationDelay: 200 }}
            key={key}
          >
            {
              banner.fileUrl.includes("mp4") ?
                <video autoPlay loop muted onClick={() => props.handleSlug()}>
                  <source src={banner.fileUrl} type="video/mp4" />
                  <source src={banner.fileUrl} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
                :
                <div
                  className={" " + (props.images.length - 1) === key && props.images.length > 2 ? "last-image" : ""}
                  style={{ cursor: 'pointer', width: window.innerWidth > 500 ? '60%' : '200px' }}
                  onClick={handleClick}
                >
                  <Helper banner={banner} largeCircle={{ x: 0, y: 0 }} index={key} imageFluid={false} />
                </div>


              // <img
              //   className={" " + (props.images.length - 1) === key && props.images.length > 2 ? "last-image" : ""}
              //   src={banner.fileUrl}
              //   key={key}
              //   style={{ cursor: 'pointer' }}
              //   onClick={() => props.handleSlug()}
              // />
            }
          </motion.div>
            : key == 1 ?
              <motion.div className={"col-md-6 d-flex align-items-center justify-content-start brenna-start"}
                animate={{ x: props.slowCoords.x, y: props.slowCoords.y, opacity: 1, animationDelay: 200 }}
                key={key}>
                {
                  banner.fileUrl.includes("mp4") ?
                    <video autoPlay loop muted onClick={() => props.handleSlug()}>
                      <source src={banner.fileUrl} type="video/mp4" />
                      <source src={banner.fileUrl} type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                    :
                    <div
                      className={" " + (props.images.length - 1) === key && props.images.length > 2 ? "last-image" : ""}
                      style={{ cursor: 'pointer', width: window.innerWidth < 500 && '230px' }}
                      onClick={() => props.handleSlug()}
                    >
                      <Helper banner={banner} largeCircle={{ x: 0, y: 0 }} index={key} imageFluid={false} />
                    </div>
                  // <img
                  //   className={" " + (props.images.length - 1) === key && props.images.length > 2 ? "last-image" : ""}
                  //   src={banner.fileUrl}
                  //   key={key}
                  //   style={{ cursor: 'pointer' }}
                  //   onClick={() => props.handleSlug()}
                  // />
                }
              </motion.div>
              : <></>
        })}
      </div>
      {/* {thirdImage} */}
      {
        thirdImage !== null && (
          <motion.div className={"col-md-12 d-flex align-items-center justify-content-center brenna-first"}
            animate={{ x: props.slowCoords.x, y: props.slowCoords.y, opacity: 1, animationDelay: 200 }}
            key={thirdImage.fileUrl}
            style={{ position: 'relative', marginTop: '-5%', zIndex: '1' }}>
            {
              thirdImage.fileUrl.includes("mp4") ?
                <video autoPlay loop muted onClick={() => props.handleSlug()}>
                  <source src={thirdImage.fileUrl} type="video/mp4" />
                  <source src={thirdImage.fileUrl} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
                :
                <div
                  style={{ cursor: 'pointer', maxHeight: 'auto', maxWidth: '100vh' }}
                  onClick={() => props.handleSlug()}
                >
                  <Helper banner={thirdImage} largeCircle={{ x: 0, y: 0 }} index={props.images.length} imageFluid={false} />
                </div>
              // <img
              //   src={thirdImage.fileUrl}
              //   key={thirdImage.fileUrl}
              //   style={{ cursor: 'pointer', maxHeight: 'auto', maxWidth: '100vh' }}
              //   onClick={() => props.handleSlug()}
              // />
            }
          </motion.div>
        )
      }

    </>
  );
}

export default Brenna;
