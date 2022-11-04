import React, { useEffect, useRef, useState } from "react";
import "./Index.css";
import IndexData from "./IndexData";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { motion } from "framer-motion";

import IndexItem from "./indeItem";
function Index() {
  const [isAnimating, setIsAnitmating] = useState(false);
  const [id, setId] = useState(-1);

  const handleClick = (itemId) => {
    setIsAnitmating(!isAnimating);
    setId(id);
  };
  return (
    <div className="index-section">
      <div className="index-innersection">
        {IndexData.map((item, index) => {
          return <IndexItem id={item.id} text={item.text} image={item.image}/>;
        })}
      </div>
    </div>
  );
}

export default Index;
