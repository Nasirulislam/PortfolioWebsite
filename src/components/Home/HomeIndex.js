import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { fabric } from "fabric";

function HomeIndex(props) {

  // const [homeIndexImages, setHomeIndexImages] = useState([]);
  const fabricRef = useRef(null);
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bgColor, setBgColor] = useState(false);

  const style = {
    cursor: "pointer !important",
    transform: `${isHovered
      ? `translate(${(-1 * (position.x - window.innerWidth / 2)) / 17}px, ${(-1 * (position.y - window.innerHeight / 2)) / 17
      }px)`
      : ""
      }`,
    transition: "transform 0.3s ease-out",
  };

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };



  const initFabric = () => {
    if (fabricRef.current) {
      fabricRef.current.dispose();
      fabricRef.current = null;
    }

    // console.log("hom===========>>>", props.hom);

    const hom_canvas =
      window.innerWidth >= 6000
        ? props.hom?.canvasELarge
        : window.innerWidth >= 3560
          ? props.hom?.canvasLLaptop
          : window.innerWidth >= 2560
            ? props.hom?.canvasMLaptop
            : window.innerWidth >= 1440
              ? props.hom?.canvasSLaptop
              : window.innerWidth >= 1180
                ? props.hom?.canvasXLTab
                : window.innerWidth >= 1024
                  ? props.hom?.canvasLTab
                  : window.innerWidth >= 768
                    ? props.hom?.canvasSTab
                    : window.innerWidth >= 430
                      ? props.hom?.canvasMobile
                      : props.hom?.canvasMobile;

    const wid =
      window.innerWidth >= 6000
        ? 6020
        : window.innerWidth >= 3560
          ? 3560
          : window.innerWidth >= 2560
            ? 2560
            : window.innerWidth >= 1440
              ? 1440
              : window.innerWidth >= 1180
                ? 1180
                : window.innerWidth >= 1024
                  ? 1024
                  : window.innerWidth >= 768
                    ? 768
                    : window.innerWidth >= 430
                      ? 430
                      : window.innerWidth;

    if (props.homeIndexCanvas !== null && !fabricRef.current) {
      // Get the canvas object from its JSON representation

      fabricRef.current = new fabric.StaticCanvas(canvasRef.current, {
        width: wid,
        height: window.innerHeight,
      });

      let fabricCanvas = JSON.parse(hom_canvas);

      function getVideoElement(url, width, height) {
        const videoE = document.createElement("video");
        videoE.width = width;
        videoE.height = height;
        videoE.muted = true;
        videoE.loop = true;
        videoE.autoplay = true;
        videoE.playsInline = true;
        videoE.controls = true;
        videoE.crossOrigin = "anonymous";
        videoE.src = url;
        const source = document.createElement("source");
        source.src = url;
        source.type = "video/mp4";
        videoE.appendChild(source);
        // console.log(videoE.videoWidth)
        return videoE;
      }

      const handleVideosFromData = (file) => {
        const videoUrl = file.src;
        const originalWidth = 1080;
        const originalHeight = 1000;
        const videoE = getVideoElement(videoUrl, originalWidth, originalHeight);

        // iOS specific settings
        if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
          videoE.setAttribute("webkit-playsinline", ""); // Enable inline video playback
          videoE.setAttribute("playsinline", ""); // For newer iOS versions
          videoE.setAttribute("x5-video-player-type", "h5"); // For WeChat browser
          videoE.setAttribute("x5-video-player-fullscreen", "true"); // For WeChat browser fullscreen playback
          videoE.setAttribute("x-webkit-airplay", "allow"); // Enable AirPlay
          videoE.setAttribute("preload", "auto"); // Preload the video
          videoE.setAttribute("controls", ""); // Show video controls
          videoE.setAttribute("style", "object-fit: fill;"); // Adjust video aspect ratio
          videoE.style.width = `${originalWidth}px`; // Set the video width
          videoE.style.height = `${originalHeight}px`; // Set the video height
          videoE.controls = true; // Show video controls
          // Autoplay the video (requires user interaction)
          document.addEventListener("click", function handleAutoplay() {
            videoE.play();
            document.removeEventListener("click", handleAutoplay);
          });
        }
        // Android specific settings
        if (navigator.userAgent.match(/Android/i)) {
          videoE.setAttribute("android:hardwareAccelerated", "true");
        }

        const fab_video = new fabric.Image(videoE, {
          ...file,
        });
        fab_video.set("video_src", videoUrl);
        fab_video.set("src", videoUrl);
        fabricRef.current.add(fab_video);
        videoE.load();
        fab_video.getElement().play();
        fabric.util.requestAnimFrame(function render() {
          fabricRef.current.renderAll();
          fabric.util.requestAnimFrame(render);
        });
      };

      setBgColor(fabricCanvas?.background);
      // console.log("---->", bgColor);

      fabricRef.current.loadFromJSON(JSON.stringify(fabricCanvas), function () {
        const data = fabricCanvas;
        // console.log('data', data);
        fabricRef.current.renderAll();
        data.objects.forEach((obj) => {
          if (obj.src.includes(".mp4")) {
            handleVideosFromData(obj);
          }
        });
      });
    }
  };

  useEffect(() => {
    initFabric();
  }, [props.homeIndexCanvas]);

  useEffect(() => {
    // var isIOS = (function () {
    //   var iosQuirkPresent = function () {
    //     var audio = new Audio();

    //     audio.volume = 0.5;
    //     return audio.volume === 1;   // volume cannot be changed from "1" on iOS 12 and below
    //   };

    //   var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    //   var isAppleDevice = navigator.userAgent.includes('Macintosh');
    //   var isTouchScreen = navigator.maxTouchPoints >= 1;   // true for iOS 13 (and hopefully beyond)

    //   return isIOS || (isAppleDevice && (isTouchScreen || iosQuirkPresent()));
    // })();
    const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);

    const zoomElement = document.querySelector(".zoom");
    if (!zoomElement) {
      return;
    }

    const fadeElement = document.querySelector("#home-page");
    const imgElement = document.querySelector("h1");
    const ZOOM_SPEED = window.innerWidth <= 500 ? 80 : 75; // Lower is faster
    const ZOOM_BREAKPOINT = window.innerWidth <= 500 ? 6.5 : 9.5; // When it should stop zooming in
    const ABSOLUTE = ZOOM_BREAKPOINT * ZOOM_SPEED; // Absolute position, when the Element reached maximum size

    // Fade --------------------------------------------------------------------------------------
    const FADE_SPEED = 200; // Lower is faster
    let fade = 1;
    let prev = 0;
    // -------------------------------------------------------------------------------------- Fade

    function anim() {
      let scroll = window.scrollY;
      let temp = scroll / ZOOM_SPEED;
      let zoom = temp > 1 ? temp : 1;
      // Only update the Elements scale, when we are below the breakpoint
      if (zoom < ZOOM_BREAKPOINT) {
        // Only scale the Image, so the Zoom element does not mess with the document width
        imgElement.style.transform = `scale(${zoom})`;
        // Sets the Elements position to fixed, so it can resize without scrolling away
        zoomElement.style.top = "39%";
        zoomElement.style.position = "fixed";
      } else {
        // Makes sure the Element always reaches Max Size
        imgElement.style.transform = `scale(${ZOOM_BREAKPOINT})`;
        // Sets the elements position to absolute, so it will scroll with the rest of the document
        zoomElement.style.position = "absolute";
        zoomElement.style.top = ABSOLUTE + "px";
      }

      // Fade --------------------------------------------------------------------------------------
      let dif = prev - scroll;

      if (zoom < ZOOM_BREAKPOINT - FADE_SPEED / ZOOM_SPEED) {
        fade = 1;
      } else if (zoom > ZOOM_BREAKPOINT) {
        fade = 0;
      } else {
        fade += dif / FADE_SPEED;
      }

      if (fade >= 0.95 || fade < 0.95) {
        const el = document.querySelector('.my--title');
        el.style.color = 'white'
        el.style.background = 'transparent'
      }
      if (scroll < 50) {
        const el = document.querySelector('.my--title');
        // el.style.color = '';  // Reset to original color
        el.style.background = '';  // Reset to original background
        fadeElement.style.opacity = 1;  // Reset opacity to 1

        // if (isIOS) {
        el.style.mixBlendMode = 'difference';  // Apply different mix-blend-mode for iOS
        el.style.color = 'white';
        // }
      }
      fadeElement.style.opacity = fade;
      prev = scroll;
      // -------------------------------------------------------------------------------------- Fade
    }

    window.addEventListener("scroll", () => window.requestAnimationFrame(anim));

    // Fade --------------------------------------------------------------------------------------
    zoomElement.style.opacity = 1;

    return () => {
      window.removeEventListener("scroll", () =>
        window.requestAnimationFrame(anim)
      );
    };
  }, []);

  useEffect(() => {
    const mergeIndexImages = () => {
      let portraitIndex = props.homeIndexImages;
      let landscapeIndex = props.landscapeHomeIndexImages;

      let tempPortArr = portraitIndex.map((item, key) => {
        return {
          type: "portrait",
          image: item,
        };
      });

      let tempLandArr = landscapeIndex.map((item, key) => {
        return {
          type: "landscape",
          image: item,
        };
      });
      let tempArr = tempPortArr.concat(tempLandArr);
      let zigZagArr = [];
      let j = 0;
      let k = 0;
      for (let i = 0; i < tempArr.length; i++) {
        if (i % 2 === 0) {
          zigZagArr.push({
            type: "landscape",
            image: landscapeIndex[j],
          });
          j = j + 1;
        } else {
          zigZagArr.push({
            type: "portrait",
            image:
              typeof portraitIndex[k] === "undefined"
                ? landscapeIndex[j]
                : portraitIndex[k],
          });
          k = k + 1;
        }
      }
    };
    mergeIndexImages();
  }, []);


  // AUTOMATIC ON CLICK 
  const motionDivRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      motionDivRef.current.click();
    }, 8000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);


  return (
    <div
      id="home-page"
      className="home-page"
      style={{
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        backgroundColor: bgColor,
      }}
      onMouseMove={handleMouseMove}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="home-title change-title zoom my--title" style={{ background: "transparent", top: "39%", left: "50%" }} >

        <h1 style={{ cursor: "pointer" }} className="my--title">{props.value}</h1>
      </div>
      <div
        className="px-0 d-flex justify-content-between tech-slideshow flex-wrap"
        style={{ width: "100%", height: "100%", marginBottom: "10%" }}
      >
        <motion.div
          className="relative"
          ref={motionDivRef}
          onClick={() => {
            console.log('Motion div clicked');
            // Your click handler logic here
          }}
          style={{
            width: window.innerWidth,
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative",
            cursor: "pointer !important",
          }}
        >
          <canvas
            className="sample-canvas"
            ref={canvasRef}
            id="canvas"
            style={style}
          />
        </motion.div>

      </div>
    </div>
  );
}

export default HomeIndex;
