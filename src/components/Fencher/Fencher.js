import React, { useEffect, useState } from "react";
import "./Fencher.css";
import image1 from "../../Assets/images/1.jpg";
import image2 from "../../Assets/images/4.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import base_url from "../../constants/url";
function Fencher(props) {
  

  const navigate = useNavigate();
  const [imageDirec, setImageDirec] = useState({ x: 0, y: 0 });
  const moveImage = (e) => {
    // console.log("Mouse");
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
          console.log(props.name)
          navigate(props.slug, {
            state: {
              name: props.name,
              detail: props.name,
              images: [...props.images],
            },
          });
        }}
      >
        <div className="fencher-name">
          {/* <h1>{props.name}</h1> */}
          {/* <h1 className="mx-5">{nameVal[1]}</h1> */}
        </div>
        <div className="image1">
          <img className="image1" src={ `${base_url}`+'/img/projects/' + props.image1 } />
        </div>
        <div className="image2">
          <img className="image2" src={ `${base_url}`+'/img/projects/' + props.image2} />
        </div>
      </div>
    </div>
  );
}

export default Fencher;
