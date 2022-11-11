import React, { useEffect, useState } from "react";
import "./Fencher.css";
import image1 from "../../Assets/images/1.jpg";
import image2 from "../../Assets/images/4.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Fencher(props) {
  const navigate = useNavigate();
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
    <div>
      <div
        className="fencher-section"
        onClick={() => {
          navigate(props.slug, {
            state: {
              title: props.title,
              detail: props.title,
              images: [...props.images],
            },
          });
        }}
      >
        <div className="fencher-title">
          {/* <h1>{props.title}</h1> */}
          {/* <h1 className="mx-5">{titleVal[1]}</h1> */}
        </div>
        <div className="image1">
          <img className="image1" src={props.image1} />
        </div>
        <div className="image2">
          <img className="image2" src={props.image2} />
        </div>
      </div>
    </div>
  );
}

export default Fencher;
