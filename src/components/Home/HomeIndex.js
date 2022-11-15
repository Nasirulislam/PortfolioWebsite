import React, { useEffect, useState } from "react";
import Home from "./Home";
import BottomSlider from "./BottomSlider";
import "./Home.css";
import { motion } from "framer-motion";
import Fencher from "../Fencher/Fencher";
import HomeMain from "./HomeMain";
function HomeIndex(props) {
  let hasMouse = false;
  const [direction, setdirection] = useState("left");
  const titleVal = props.name;
  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });

  async function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const mousemove = (e) => {
    setLargeCircle({ x: (e.clientX / 2) * -1, y: (e.clientY / 2) * -1 });
  };
  useEffect(() => {
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);
  // useEffect(() => {
  //   var bodyElement = document.getElementById("home-page");
  //   bodyElement.addEventListener("mousemove", getMouseDirection, false);

  //   var oldX = 0;
  //   var oldY = 0;

  //   function getMouseDirection(e) {
  //     if (oldX !== e.pageX || oldY !== e.pageY) {
  //       // setHomeState(true);
  //       // setTimeout(()=>{setHomeState(false)}, 3000)
  //     }
  //     oldX = e.pageX;
  //     oldY = e.pageY;
  //   }
  // }, []);

  return (
    <div id="home-page" className="home-page">
      {/* <div className="home-title">
        <h1>{titleVal[0]}</h1>
        <h1 className="mx-5">{titleVal[1]}</h1>
      </div> */}

      <motion.div
        className="home-slide-section"
        animate={{ x: largeCircle.x, y: largeCircle.y, opacity: 1 }}
        initial={{
          // opacity: 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 10,
        }}
      >
        <Home />
        <BottomSlider />
      </motion.div>
     
    </div>
  );
}

export default HomeIndex;
