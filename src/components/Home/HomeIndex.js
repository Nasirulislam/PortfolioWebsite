import React, { useEffect, useMemo, useRef, useState } from "react";
import Home from "./Home";
import BottomSlider from "./BottomSlider";
import "./Home.css";
import { motion } from "framer-motion";
import Fencher from "../Fencher/Fencher";
import HomeMain from "./HomeMain";
import base_url from "../../constants/url";
import { Card } from "react-bootstrap";
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

  const ref1 = useRef(null);
  // const ref2 = useRef(null);
  const isInViewport = useIsInViewport(ref1);
  if (isInViewport) {
    handleChange({ name: "david Ellis", slug: "david Ellis" });
  }

  function handleChange(name) {
    // Here, we invoke the callback with the new value
    props.onChange(name);
  }

  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  }

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
    <div id="home-page" className="home-page" ref={ref1}>
      <div className="home-title">
        <h1>David Ellis</h1>
      </div>
      <motion.div
        className="home-slide-section"
        animate={{ x: largeCircle.x, y: largeCircle.y, opacity: 1 }}
        initial={
          {
            // opacity: 0.1,
          }
        }
        transition={{
          type: "spring",
          stiffness: 10,
        }}
      >
        <Card
          className="image1"
          style={{ float: "left", top: "1vh", width: "25vw" }}
        >
          <img
            className="img-fluid"
            src={
              `${base_url}` +
              "/img/projects/" +
              props.projectsData[0]?.images[1]
            }
          />
        </Card>
        <Card
          className="image2"
          style={{ float: "right", top: "-8vh", width: "30vw" }}
        >
          <img
            className="img-fluid"
            src={
              `${base_url}` +
              "/img/projects/" +
              props.projectsData[1]?.images[0]
            }
          />
        </Card>
        <Card
          className="image3"
          style={{ left: "-200px", top: "76vh", width: "25vw" }}
        >
          <img
            className="img-fluid"
            src={
              `${base_url}` +
              "/img/projects/" +
              props.projectsData[2]?.images[0]
            }
          />
        </Card>
        <Card
          className="image4"
          style={{ right: "-26vw", top: "15vh", width: "27vw" }}
        >
          <img
            className="img-fluid"
            src={
              `${base_url}` +
              "/img/projects/" +
              props.projectsData[3]?.images[0]
            }
          />
        </Card>
        <Card
          className="image5"
          style={{ right: "-70vw", top: "15vh", width: "27vw" }}
        >
          <img
            className="img-fluid"
            src={
              `${base_url}` +
              "/img/projects/" +
              props.projectsData[3]?.images[1]
            }
          />
        </Card>

        {/* <Home randomIndex = {props.randomIndex} projectsData={props.projectsData} />
        <BottomSlider projectsData={props.projectsData} /> */}
      </motion.div>
    </div>
  );
}

export default HomeIndex;
