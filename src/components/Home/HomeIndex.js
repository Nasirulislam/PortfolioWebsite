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
    // <ScrollContainer >
    //   <ScrollPage >
    //     <Animator
    //       animation={batch(
    //         Sticky(),
    //         MoveOut(0, -200),
    //         ZoomIn(),
    //         Fade()
    //       )}

    //     >
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
      <div id="home-page" className="home-page" ref={ref1}>
        <div className="home-slide-section">
          <div className="col-md-12 d-flex justify-content-around align-items-center tech-slideshow" style={{ height: '50vh' }}>
            <Card className="">
              <img
                className="img-fluid mover-1"
                src={
                  `${base_url}` +
                  "/img/projects/" +
                  props.projectsData[0]?.images[1]
                }
              />
            </Card>
            <Card>
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
          <div className="col-md-12 d-flex justify-content-around align-items-center p-3 tech-slideshow" style={{ height: '50vh' }}>
            <Card
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
        </div>
      </div>
    </motion.div>
    //     </Animator>
    //   </ScrollPage>
    // </ScrollContainer>
  );
}

export default HomeIndex;
