import React, { useEffect, useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";


function HomeIndex(props) {
  let hasMouse = false;
  const [direction, setdirection] = useState("left");
  const titleVal = props.name;
  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [mediumCircle, setMediumCircle] = useState({ x: 0, y: 0 });
  const [fastCircle, setFastCircle] = useState({ x: 0, y: 0 });

  async function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const mousemove = (e) => {
    setLargeCircle({ x: (e.clientX / 50) * -1, y: (e.clientY / 50) * -1 });
    setMediumCircle({ x: (e.clientX / 30) * -1, y: (e.clientY / 30) * -1 });
    setFastCircle({ x: (e.clientX / 4) * -1, y: (e.clientY / 4) * -1 });
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

  return (
    <div id="home-page" className="home-page row">

      <div className="col-md-12 d-flex justify-content-between align-items-center tech-slideshow flex-wrap" style={{ height: '100%' }}>
        {images.map((banner, index) => {
          return (
            <motion.div
              className="home-slide-section col-md-6 d-flex justify-content-between align-items-center flex-wrap me-4"
              animate={{ x: fastCircle.x, y: fastCircle.y, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 10,
              }}
              key={index}
              style={{ position: index == 1 ? 'relative' : '' }}
            >
              {index % 2 == 1 ?
                <motion.Card className=""
                  animate={{ x: index == 1 ?  mediumCircle.x : largeCircle.x, y: index == 1 ? mediumCircle.y : largeCircle.y, opacity: 1 }}
                  key={index}
                  style={{ position: index == 1 ? 'absolute' : '', top: '40%' }}>
                  <img
                    className="img-fluid mover-1"
                    src={`/images/index/${banner}`}
                  />
                </motion.Card>
                : <motion.Card className=""                  
                  key={index}>
                  <img
                    className="img-fluid mover-1"
                    src={`/images/index/${banner}`}
                  />
                </motion.Card>
              }

            </motion.div>
          )
        })}
      </div>
    </div>
  );
}

export default HomeIndex;
