import React, { useEffect } from "react";
import image1 from "./../../Assets/images/1.jpg";
import image2 from "./../../Assets/images/2.jpg";
import image3 from "./../../Assets/images/3.jpg";
import image4 from "./../../Assets/images/4.jpg";
import image5 from "./../../Assets/images/5.jpg";
import image6 from "./../../Assets/images/6.jpg";
import image7 from "./../../Assets/images/7.jpg";
import image8 from "./../../Assets/images/8.jpg";
import image9 from "./../../Assets/images/9.jpg";
import ReactFloaterJs from "react-floaterjs";
import { useRef, useState } from "react";
import { Card } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Home.css";
import Marquee from "react-fast-marquee";
// import required modules
import { Autoplay, EffectFade } from "swiper";

function BottomSlider(props) {
  const images = [];
  const [direction, setdirection] = useState("left")

  useEffect(() => {
    var bodyElement = document.getElementById("bottom-slider");
    bodyElement.addEventListener("mousemove", getMouseDirection, false);

    var xDirection = "";

    var oldX = 0;

    function getMouseDirection(e) {
      //deal with the horizontal case
      if (oldX < e.pageX) {
        xDirection = "right";
        setdirection("right");
      } else {
        xDirection = "left";
        setdirection("left");
      }

      oldX = e.pageX;

    }
  }, []);
  return (
    <div id="bottom-slider" className="bottom-slider">
      <Marquee
        speed={0}
        gradient={false}
        // direction={direction}
        className="bottom-slider1-wrapper"
      >
        <ReactFloaterJs className="slider-image">
          <Card className="bottom-slider1" onMouseMove={(event) => {}}>
            <img src={image7} />
          </Card>
        </ReactFloaterJs>
        <ReactFloaterJs className="slider-image">
          <Card className="bottom-slider1">
            <img src={image8} />
          </Card>
        </ReactFloaterJs>
        <ReactFloaterJs className="slider-image">
          <Card className="bottom-slider1">
            <img src={image9} />
          </Card>
        </ReactFloaterJs>
        <ReactFloaterJs className="slider-image">
          <Card className="bottom-slider1">
            <img src={image1} />
          </Card>
        </ReactFloaterJs>
        <ReactFloaterJs>
          <Card className="bottom-slider1">
            <img src={image2} />
          </Card>
        </ReactFloaterJs>
        <ReactFloaterJs className="slider-image">
          <Card className="bottom-slider1">
            <img src={image3} />
          </Card>
        </ReactFloaterJs>
      </Marquee>
    </div>
  );
}

export default BottomSlider;
