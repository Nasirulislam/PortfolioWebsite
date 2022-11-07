import React, { useEffect, useState } from "react";
import "./Fencher.css";
import image1 from "../../Assets/images/1.jpg";
import image2 from "../../Assets/images/4.jpg";
import { motion } from "framer-motion";

function Fencher(props) {
  const [imageDirec, setImageDirec] = useState({ x: 0, y: 0 });
  const moveImage = (e) => {
    console.log("Mouse");
    if (e.clientX < 356 && e.clientY < 356) {
      setImageDirec({ x: e.clientX + 5, y: e.clientY + 5 });
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", moveImage);
    return () => {
      window.removeEventListener("mousemove", moveImage);
    };
  }, []);
  return (
    <div className="fencher-section" style={{marginTop: props.MarginTop}}>
      {/* <motion.div
        animate={{ x: imageDirec.x, y: imageDirec.y }}
      
        transition={{
          type: "spring",
          stiffness: 0,
        }}
      > */}
      <div className="image1">
        <img className="image1" src={props.image1} />
      </div>
      {/* </motion.div> */}
      <div className="image2">
        <img className="image2" src={props.image2} />
      </div>
    </div>
  );
}

export default Fencher;
