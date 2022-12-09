import React, { useEffect, useMemo, useRef, useState } from "react";
import Home from "./Home";
import BottomSlider from "./BottomSlider";
import "./Home.css";
import { motion } from "framer-motion";
import Fencher from "../Fencher/Fencher";
import HomeMain from "./HomeMain";
import base_url from "../../constants/url";
import { Card } from "react-bootstrap";
import AnimatedText from "../AnimatedText";
import {
  Animator,
  batch,
  Fade,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  ZoomIn,
} from "react-scroll-motion";




function HomeIndex(props) {
  let hasMouse = false;
  const [direction, setdirection] = useState("left");
  const titleVal = props.name;
  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });

  async function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const mousemove = (e) => {
    setLargeCircle({ x: (e.clientX / 4) * -1, y: (e.clientY / 4) * -1 });
  };
  useEffect(() => {
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  const images = [
    "pexels-ashish-sharma-917597.jpg", "pexels-motional-studio-1081685.jpg", "surreal-photography-platon-yurich-17.jpg", "mask-shape-element-kelly-brown-768x933.jpg", "surreal-photography-platon-yurich-30.jpg"
  ];

  const firstIndex = images.slice(0, 2);
  const secondIndex = images.slice(2, 5);
  console.log(firstIndex)

  return (

    <motion.div
      className="home-slide-section"
      animate={{ x: largeCircle.x, y: largeCircle.y, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 10,
      }}
    >
      <div id="home-page" className="home-page">
        <div className="home-slide-section">
          <div className="col-md-12 d-flex justify-content-around align-items-center tech-slideshow" style={{ height: '50vh' }}>
            <Card className="">
              <img
                style={{ height: '100vh' }}
                className="img-fluid mover-1"
                src={`/images/index/${firstIndex[0]}`}
              />
            </Card>
            <Card>
              <img
                style={{ height: '100vh' }}
                className="img-fluid"
                src={`/images/index/${firstIndex[1]}`}
              />
            </Card>
          </div>
          {/* <marquee> */}
          <div className="col-md-12 d-flex justify-content-around align-items-center p-3 tech-slideshow" style={{ height: '50vh' }}>
            <Card
            >
              <img
                className="img-fluid"
                src={`/images/index/${secondIndex[0]}`}
              />
            </Card>
            <Card
            >
              <img
                style={{ height: '100vh', width: '100vh' }}
                className="img-fluid"
                src={`/images/index/${secondIndex[1]}`}
              />
            </Card>
            <Card
            >
              <img
                className="img-fluid"
                src={`/images/index/${secondIndex[2]}`}
              />
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HomeIndex;
