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
import base_url from "../../constants/url";
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
import BottomSlider from "./BottomSlider";

function Home(props) {
  const images = [];
  const [projectsData, setProjectData] = useState([]);
  // const [maindirection, setMaindirection] = useState("left");
  // let Maindirection = "left";

  const getRandom = (limit) => {
    return Math.floor(Math.random() * limit);
  };

  // useEffect(() => {
  //   var bodyElement = document.getElementById("home-main-slider");
  //   bodyElement.addEventListener("mousemove", getMouseDirection, false);

  //   var xDirection = "";
  //   var yDirection = "";

  //   var oldX = 0;
  //   var oldY = 0;

  //   function getMouseDirection(e) {
  //     //deal with the horizontal case
  //     if (oldX < e.pageX) {
  //       xDirection = "right";
  //       setMaindirection("right");
  //       Maindirection = "right";
  //     } else {
  //       xDirection = "left";
  //       setMaindirection("left");
  //       Maindirection = "left";
  //     }

  //     oldX = e.pageX;
  //     oldY = e.pageY;

  //     // console.log(xDirection + " " + yDirection);
  //   }
  // }, []);

  return (
    <div id="home-main-slider">
      <Marquee speed={1} gradient={false} className="home-slider1-wrapper">
        {props.projectsData.map((item, index) => {
          // const index = getRandom(item.images.length);

          return (
            <ReactFloaterJs className="w-20" key={item._id}>
              <Card className="home-slider1">
                <img src={`${base_url}` + "/img/projects/" + item.images[0]} />
              </Card>
            </ReactFloaterJs>
          );
        })}
      </Marquee>
    </div>
  );
}

export default Home;
