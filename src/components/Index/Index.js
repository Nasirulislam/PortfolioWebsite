import React, { useEffect, useRef, useState } from "react";
import "./Index.css";
import IndexData from "./IndexData";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { motion } from "framer-motion";

import IndexItem from "./indeItem";
function Index(props) {
  const [isAnimating, setIsAnitmating] = useState(false);
  const [id, setId] = useState(-1);
  console.log(props);
  const handleClick = (itemId) => {
    setIsAnitmating(!isAnimating);
    setId(id);
  };
  return (
    <div className="index-section">
      <div className="index-innersection">
        {props.projectData.map((item, index) => {
          return <IndexItem  text={item.name} image={item.images[0]}/>;
        })}
      </div>
    </div>
  );
}

export default Index;
