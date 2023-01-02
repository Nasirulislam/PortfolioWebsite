import React, { useEffect, useRef, useState } from "react";
import "./Index.css";
import IndexData from "./IndexData";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { motion } from "framer-motion";
import axios from "axios";
import base_url from "../../constants/url";

import IndexItem from "./indeItem";
import { useNavigate } from "react-router-dom";
function Index(props) {
  const [isAnimating, setIsAnitmating] = useState(false);
  const [id, setId] = useState(-1);
  const [redHome, setRedHome] = useState(false);
  const [images, setIndexImages] = useState([]);

  const navigate = useNavigate();

  const handleClick = (itemId) => {
    setIsAnitmating(!isAnimating);
    setId(id);
  };

  const SendHome = () => {
    if (redHome) {
      navigate("/");
    }
  };

  return (
    <div className="index-section-main-wrap" style={{ background: `url(${props.indexBackground.length > 0 ? `${base_url}/home/${props.indexBackground[0]}` : '../../Assets/images/background4.jpg'})`, backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="index-section">
        <div className="index-innersection">
          {props.projectData.map((item, index) => {
            return (
              <IndexItem
                projects={props.projectData}
                currentProject={item}
                nextProject={props.projectData[index + 1]}
                text={item.name}
                color={item.color}
                image={item.images[0]}
                closeIndex={props.closeIndex}
                setRedHome={setRedHome}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Index;
