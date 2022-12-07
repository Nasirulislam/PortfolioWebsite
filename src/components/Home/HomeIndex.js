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

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  return (
    <div id="home-page" className="home-page" ref={ref1}>
      <motion.div className="home-title">
        {/* <motion.h1 variants={container}><AnimatedText {...{ type: "heading", text: "David Ellis" }} /></motion.h1> */}
      </motion.div>
      <motion.div
        className="home-slide-section"
        initial={
          {
            opacity: 0,
          }
        }
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          x: { duration: 1 },
          default: { ease: "linear" }
        }}

      >
        <div className="col-md-12 d-flex justify-content-around align-items-center" style={{ height: '50vh' }}>
          <Card
            className="image1"
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
        </div>
        {/* <marquee> */}
        <div className="col-md-12 d-flex justify-content-around align-items-center p-3" style={{ height: '50vh' }}>
          <Card
            className="image1"
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
            className="image2"
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
        </div>

        {/* </marquee> */}

        {/* <Home randomIndex = {props.randomIndex} projectsData={props.projectsData} />
        <BottomSlider projectsData={props.projectsData} /> */}
      </motion.div>
    </div>
  );
}

export default HomeIndex;
