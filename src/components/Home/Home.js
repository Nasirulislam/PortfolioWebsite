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

function Home(props) {
  const images = [];
  const getRandom = (limit) => {
    return Math.floor(Math.random() * limit);
  };
  const count = useRef(0);
  const ChipStyles = useRef({
    position: "absolute",
    top: Math.floor(Math.random() * 50),
    left: "50%",
    transform: "translate(-50%, -50%)",
  });
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div id="home-main-slider" class="d-flex">
      {props.projectsData.map((item, index) => {
        if (index < 3) {
          return (
            <Card style={ChipStyles.current}>
              <img src={`${base_url}` + "/img/projects/" + item.images[0]} />
            </Card>
          );
        }
      })}
    </div>
  );
}

export default Home;
