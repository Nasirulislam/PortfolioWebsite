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

      // const handleVideosFromData = (file) => {
      //   const videoUrl = file.src;
      //   // const videoUrl = "https://media.istockphoto.com/id/1436859766/video/meeting-the-designer-and-client-in-office-and-discussing-choice-of-color.mp4?s=mp4-640x640-is&k=20&c=yEmaqxLFyxiCuNM-63UTc7_YYchGi7OOPaTiZyh-IF0="; // Use the file URL obtained from the backend
      //   const originalWidth = 1080;
      //   const originalHeight = 1000;
      //   const videoE = getVideoElement(videoUrl, originalWidth, originalHeight);
      //   const fab_video = new fabric.Image(videoE, {
      //     ...file,
      //   });
      //   fab_video.set("video_src", videoUrl);
      //   fab_video.set("src", videoUrl);
      //   fabricRef.current.add(fab_video);
      //   videoE.load();
      //   fab_video.getElement().play();
      //   fabric.util.requestAnimFrame(function render() {
      //     fabricRef.current.renderAll();
      //     fabric.util.requestAnimFrame(render);
      //   });
      // };

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
    const zoomElement = document.querySelector(".zoom");
    if (!zoomElement) {
      return;
    }

    const fadeElement = document.querySelector("#home-page");
    // const afterZoomElement = document.querySelector('.afterzoom')
    const imgElement = document.querySelector("h1");
    // const WIDTH = document.body.clientWidth;
    // const HEIGHT = zoomElement.clientHeight;
    // const IMAGE_WIDTH = imgElement.clientWidth;
    // const IMAGE_HEIGHT = imgElement.clientHeight;
    const ZOOM_SPEED = window.innerWidth <= 500 ? 80 : 75; // Lower is faster
    const ZOOM_BREAKPOINT = window.innerWidth <= 500 ? 6.5 : 9.5; // When it should stop zooming in
    // console.log('ZOOM ZOOM', ZOOM_BREAKPOINT)
    // const IMAGE_HEIGHT_MAX = IMAGE_HEIGHT * ZOOM_BREAKPOINT;
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

      console.log('----')
      console.log("SCROLL : ", scroll);
      console.log("TEMP : ", temp);
      console.log("ZOOM : ", zoom);
      console.log('ZOOM BREAKPOINT : ', ZOOM_BREAKPOINT);
      console.log('Absolute : ', ABSOLUTE);
      console.log('FADE : ', fade);
      // console.log('Absolute : ', fade);
      console.log('prev : ', prev);
      console.log('----')

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

        console.log(el.style)

      }
      fadeElement.style.opacity = fade;
      prev = scroll;
      // -------------------------------------------------------------------------------------- Fade
    }
    // Resets scroll position on every reload
    // if ('scrollRestoration' in history) {
    //   history.scrollRestoration = 'manual'
    // }

    window.addEventListener("scroll", () => window.requestAnimationFrame(anim));

    // Fade --------------------------------------------------------------------------------------
    zoomElement.style.opacity = 1;
    // zoomElement.style.color = 'white';
    // -------------------------------------------------------------------------------------- Fade

    // Positions the afterZoom element right below the zoomed image
    // afterZoomElement.style.top = ABSOLUTE + IMAGE_HEIGHT_MAX / 2 + HEIGHT / 2 + 'px'

    return () => {
      window.removeEventListener("scroll", () =>
        window.requestAnimationFrame(anim)
      );
    };
  }, []);

  // useEffect(() => {
  //   window.addEventListener("mousemove", mousemove);

  //   return () => {
  //     window.removeEventListener("mousemove", mousemove);
  //   };
  // });

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
      // setHomeIndexImages(zigZagArr);
    };
    mergeIndexImages();
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
        {/* </div> */}
        {/* {homeIndexImages.map((banner, index) => {
          {
            return (
              <motion.div
                className={"home-slide-section d-flex  " + ((homeIndexImages.length - 1) === index ? "col-md-12 px-0 justify-content-end " : index === 7 ? "align-items-end " : index === 5 ? 'margin-left ' : "col-md-4 align-items-center ", (index === homeIndexImages.length - 1) ? "is-last-image " : "")}
                animate={{ x: fastCircle.x, y: fastCircle.y, opacity: 1 }}
                transition={{
                  type: "spring",
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
        })} */}
      </div>
      {/* </motion.div> */}
    </div>
  );
}

export default HomeIndex;
