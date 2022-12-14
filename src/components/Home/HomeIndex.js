import React, { useEffect, useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";


function HomeIndex(props) {

  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [mediumCircle, setMediumCircle] = useState({ x: 0, y: 0 });
  const [fastCircle, setFastCircle] = useState({ x: 0, y: 0 });


  const mousemove = (e) => {
    setLargeCircle({ x: (e.clientX / 50) * -1, y: (e.clientY / 50) * -1 });
    setMediumCircle({ x: (e.clientX / 30) * -1, y: (e.clientY / 30) * -1 });
    setFastCircle({ x: (e.clientX / 4) * -1, y: (e.clientY / 4) * -1 });
  };

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
    const ZOOM_SPEED = 50 // Lower is faster
    const ZOOM_BREAKPOINT = (WIDTH / IMAGE_WIDTH + 15) // When it should stop zooming in
    const IMAGE_HEIGHT_MAX = IMAGE_HEIGHT * ZOOM_BREAKPOINT
    const ABSOLUTE = ZOOM_BREAKPOINT * ZOOM_SPEED // Absolute position, when the Element reached maximum size

    // Fade --------------------------------------------------------------------------------------
    const FADE_SPEED = 600 // Lower is faster
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

  const images = [
    "pexels-ashish-sharma-917597.jpg", "pexels-motional-studio-1081685.jpg", "surreal-photography-platon-yurich-17.jpg", "mask-shape-element-kelly-brown-768x933.jpg", "surreal-photography-platon-yurich-30.jpg"
  ];

  return (
    <div id="home-page" className="home-page row">
      <div className="home-title change-title zoom" style={{background: 'transparent'}}>
        <h1 style={{ cursor: 'pointer' }}>
          {props.value}
        </h1>
      </div>
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
                <motion.div className="card"
                  animate={{ x: index == 1 ? mediumCircle.x : largeCircle.x, y: index == 1 ? mediumCircle.y : largeCircle.y, opacity: 1 }}
                  key={index}
                  style={{ position: index == 1 ? 'absolute' : '', top: '40%' }}>
                  <img
                    className="img-fluid mover-1"
                    src={`/images/index/${banner}`}
                  />
                </motion.div>
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
