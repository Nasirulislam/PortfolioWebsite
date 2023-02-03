import React, { useEffect, useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import axios from "axios";
import base_url from "../../constants/url";


function HomeIndex(props) {

  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [mediumCircle, setMediumCircle] = useState({ x: 0, y: 0 });
  const [fastCircle, setFastCircle] = useState({ x: 0, y: 0 });
  const [homeIndexImages, setHomeIndexImages] = useState([]);

  const mousemove = (e) => {
    setLargeCircle({ x: (e.clientX / 50) * -1, y: (e.clientY / 50) * -1 });
    setMediumCircle({ x: (e.clientX / 10) * -1, y: (e.clientY / 10) * -1 });
    setFastCircle({ x: (e.clientX / 2) * -1, y: (e.clientY / 2) * -1 });
  };

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [windowWidth, setWindow] = useState(130);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const zoomElement = document.querySelector('.zoom')
    if (!zoomElement) {
      return;
    }

    const fadeElement = document.querySelector('#home-page')
    // const afterZoomElement = document.querySelector('.afterzoom')
    const imgElement = document.querySelector('h1')
    const WIDTH = document.body.clientWidth
    const HEIGHT = zoomElement.clientHeight
    const IMAGE_WIDTH = imgElement.clientWidth
    const IMAGE_HEIGHT = imgElement.clientHeight
    const ZOOM_SPEED = windowDimensions.width <= 500 ? 80 : 130; // Lower is faster
    const ZOOM_BREAKPOINT = (WIDTH / IMAGE_WIDTH + 10) // When it should stop zooming in
    const IMAGE_HEIGHT_MAX = IMAGE_HEIGHT * ZOOM_BREAKPOINT
    const ABSOLUTE = ZOOM_BREAKPOINT * ZOOM_SPEED // Absolute position, when the Element reached maximum size

    // Fade --------------------------------------------------------------------------------------
    const FADE_SPEED = 400 // Lower is faster
    let fade = 1
    let prev = 0
    // -------------------------------------------------------------------------------------- Fade

    function anim() {
      let scroll = window.scrollY
      let temp = scroll / ZOOM_SPEED
      let zoom = temp > 1 ? temp : 1

      // Only update the Elements scale, when we are below the breakpoint
      if (zoom < ZOOM_BREAKPOINT) {
        // Only scale the Image, so the Zoom element does not mess with the document width
        imgElement.style.transform = `scale(${zoom})`
        // Sets the Elements position to fixed, so it can resize without scrolling away
        zoomElement.style.top = '0px'
        zoomElement.style.position = 'fixed'
      } else {
        // Makes sure the Element always reaches Max Size
        imgElement.style.transform = `scale(${ZOOM_BREAKPOINT})`
        // Sets the elements position to absolute, so it will scroll with the rest of the document
        zoomElement.style.position = 'absolute'
        zoomElement.style.top = ABSOLUTE + 'px'
      }

      // Fade --------------------------------------------------------------------------------------
      let dif = prev - scroll

      if (zoom < ZOOM_BREAKPOINT - FADE_SPEED / ZOOM_SPEED) {
        fade = 1
      } else if (zoom > ZOOM_BREAKPOINT) {
        fade = 0
      } else {
        fade += dif / FADE_SPEED
      }

      fadeElement.style.opacity = fade
      prev = scroll
      // -------------------------------------------------------------------------------------- Fade
    }

    // Resets scroll position on every reload
    // if ('scrollRestoration' in history) {
    //   history.scrollRestoration = 'manual'
    // }

    window.addEventListener('scroll', () => window.requestAnimationFrame(anim))

    // Fade --------------------------------------------------------------------------------------
    zoomElement.style.opacity = 1
    // -------------------------------------------------------------------------------------- Fade

    // Positions the afterZoom element right below the zoomed image
    // afterZoomElement.style.top = ABSOLUTE + IMAGE_HEIGHT_MAX / 2 + HEIGHT / 2 + 'px'

    return () => {
      window.removeEventListener('scroll', () => window.requestAnimationFrame(anim))
    };
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  });

  useEffect(() => {
    const mergeIndexImages = () => {
      let portraitIndex = props.homeIndexImages;
      let landscapeIndex = props.landscapeHomeIndexImages;

      let tempPortArr = portraitIndex.map((item, key) => {
        return {
          'type': 'portrait',
          'image': item
        }
      })

      let tempLandArr = landscapeIndex.map((item, key) => {
        return {
          'type': 'landscape',
          'image': item
        }
      })
      let tempArr = tempPortArr.concat(tempLandArr);
      let zigZagArr = [];
      let j = 0;
      let k = 0;
      for (let i = 0; i < tempArr.length; i++) {
        if (i % 2 === 0) {
          zigZagArr.push({
            'type': 'landscape',
            'image': landscapeIndex[j]
          });
          j = j + 1;
        } else {
          zigZagArr.push({
            'type': 'portrait',
            'image': typeof portraitIndex[k] === "undefined" ? landscapeIndex[j] : portraitIndex[k]
          });
          k = k + 1;
        }

      }
      console.log("temp arr:- ", zigZagArr);
      setHomeIndexImages(zigZagArr);
    }
    mergeIndexImages();
  }, []);

  return (
    <div id="home-page" className="home-page">
      <div className="home-title change-title zoom" style={{ background: 'transparent' }}>
        <h1 style={{ cursor: 'pointer' }}>
          {props.value}
        </h1>
      </div>
      <div className="px-0 d-flex justify-content-between tech-slideshow flex-wrap" style={{ width: '120%', height: '100%', marginBottom: '10%' }}>
        {homeIndexImages.map((banner, index) => {
          {
            return (
              <motion.div
                className={"home-slide-section d-flex  " + ((homeIndexImages.length - 1) === index ? "col-md-12 px-0 justify-content-end " : index === 7 ? "align-items-end " : index === 5 ? 'margin-left ' : "col-md-4 align-items-center ", (index === homeIndexImages.length - 1) ? "is-last-image " : "")}
                animate={{ x: fastCircle.x, y: fastCircle.y, opacity: 1 }}
                transition={{
                  type: "spring",
                  // mass: 0.5,
                  stiffness: 30,
                }}
                key={index}
                style={{ maxHeight: '60vh', width: (homeIndexImages.length - 1) === index ? '100%' : index === 5 || index === 7 ? '25vh' : '', height: (homeIndexImages.length - 1) === index ? '0px' : index === 5 || index === 7 ? '5vh' : '', marginRight: index === 4 ? '190px' : '', marginTop: index === 6 ? '10%' : '', marginLeft: index === 6 ? '10%' : '', marginRight: index === 7 ? '21%' : '' }}
              >
                {index % 2 === 0 ?
                  <motion.div className={" "+(index === 4 ? "custom-position" : "")}
                    // animate={{ x: index == 1 ? mediumCircle.x : largeCircle.x, y: index == 1 ? mediumCircle.y : largeCircle.y, opacity: 1 }}
                    key={index}
                    style={{ marginLeft: index === 4 ? '100px' : '', top: index === 4 ? '-60px' : '', right: index === 4 ? '-220px' : '' }}
                  >
                    {banner.image.includes("mp4")
                      ?
                      <video autoPlay loop muted
                        style={{ width: (homeIndexImages.length - 1) === index ? '50%' : '', marginTop: index === 8 ? '-45%' : '' }}
                      >
                        <source src={`${base_url}` + "/home/" + banner.image} type="video/mp4" />
                        <source src={`${base_url}` + "/home/" + banner.image} type="video/ogg" />
                        Your browser does not support the video tag.
                      </video>
                      :
                      <img
                        className="img-fluid mover-1"
                        src={banner.image.includes("data:image") ? banner.image : `${base_url}/home/${banner.image}`}
                        style={{ width: (homeIndexImages.length - 1) === index ? '18vw' : '', height: (homeIndexImages.length - 1) === index ? '35vh' : '', objectFit: 'contain', marginTop: index === 8 ? '-45%' : '', marginTop: index === (homeIndexImages.length - 1) ? '-22%' : '' }}
                      />
                    }
                  </motion.div>
                  :
                  <motion.Card
                    key={index}
                    // animate={{ x: largeCircle.x, y: largeCircle.y, opacity: 1 }}
                    style={{ marginTop: index === 7 ? '100px' : '' }}
                  >
                    {banner.image.includes("mp4")
                      ?
                      <video autoPlay loop muted
                        style={{ width: (homeIndexImages.length - 1) === index ? '50%' : '', marginTop: index === 8 ? '-45%' : '' }}
                      >
                        <source src={`${base_url}` + "/home/" + banner.image} type="video/mp4" />
                        <source src={`${base_url}` + "/home/" + banner.image} type="video/ogg" />
                        Your browser does not support the video tag.
                      </video>
                      :
                      <img
                        className="img-fluid mover-1"
                        src={banner.image.includes("data:image") ? banner.image : `${base_url}/home/${banner.image}`}
                        style={{ width: (homeIndexImages.length - 1) === index ? '50%' : '', marginTop: index === 8 ? '-45%' : '', marginTop: index === (homeIndexImages.length - 1) ? '-22%' : '' }}
                      />
                    }
                  </motion.Card>
                }

              </motion.div>
            )
          }
        })}
      </div>
    </div>
  );
}

export default HomeIndex;
