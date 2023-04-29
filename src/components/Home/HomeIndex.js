import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import axios from "axios";
import base_url from "../../constants/url";
import { fabric } from 'fabric';


function HomeIndex(props) {

  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [mediumCircle, setMediumCircle] = useState({ x: 0, y: 0 });
  const [fastCircle, setFastCircle] = useState({ x: 0, y: 0 });
  const [homeIndexImages, setHomeIndexImages] = useState([]);
  const fabricRef = useRef(null);
  const canvasRef = useRef(null);
  const canvasParentRef = useRef(null);

  // const mousemove = (e) => {
  //   setLargeCircle({ x: (e.clientX / 50) * -1, y: (e.clientY / 50) * -1 });
  //   setMediumCircle({ x: (e.clientX / 10) * -1, y: (e.clientY / 10) * -1 });
  //   setFastCircle({ x: (e.clientX / 2) * -1, y: (e.clientY / 2) * -1 });
  // };

  // function getWindowDimensions() {
  //   const { innerWidth: width, innerHeight: height } = window;
  //   return {
  //     width,
  //     height
  //   };
  // }

  // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [windowWidth, setWindow] = useState(130);

  function clipToBoundary(ctx) {
    ctx.rect(0, 0, fabricRef.current.width, fabricRef.current.height);
  }

  const initFabric = () => {
    if (props.homeIndexCanvas !== null && !fabricRef.current) {
      // fabricRef.current = new fabric.Canvas(canvasRef.current, {
      //   // height: canvasParentRef.current.clientHeight,
      //   // width: canvasParentRef.current.clientWidth,
      //   // backgroundColor: 'pink'
      //   width: window.innerWidth,
      //   height: window.innerHeight
      // });


      // fabricRef.current.loadFromJSON(props.homeIndexCanvas);

      // Get the canvas object from its JSON representation
      var canvasJSON = JSON.parse(props.homeIndexCanvas);
      fabricRef.current = new fabric.Canvas(canvasRef.current, {
        width: window.innerWidth,
        height: window.innerHeight
      });
      // var canvas = fabricRef.current.loadFromJSON(props.homeIndexCanvas, function () {
      //   // Get the container element and its dimensions
      //   var container = document.getElementsByClassName('canvas-container')[0];
      //   var containerWidth = container.offsetWidth;
      //   var containerHeight = container.offsetHeight;

      //   // Calculate the aspect ratios
      //   var containerAspectRatio = containerWidth / containerHeight;
      //   var canvasAspectRatio = canvas.width / canvas.height;

      //   // Determine the new dimensions of the canvas object
      //   if (containerAspectRatio > canvasAspectRatio) {
      //     // Container is wider than the canvas object
      //     var newHeight = containerHeight;
      //     var newWidth = containerHeight * canvasAspectRatio;
      //   } else {
      //     // Container is taller than the canvas object
      //     var newWidth = containerWidth;
      //     var newHeight = containerWidth / canvasAspectRatio;
      //   }

      //   // Update the dimensions of the canvas object
      //   canvas.setDimensions({ width: newWidth, height: newHeight });
      //   // canvas.set('viewportTransform', [1, 0, 0, 1, -50, -50]);

      //   // Iterate through the images and update their positions
      //   canvas.getObjects('image').forEach(function (image) {
      //     console.log(image)
      //     // image.scale(image.scaleX/1.1, image.scaleY/1.1)
      //     image.set({
      //       scaleX: image.scaleX/1.3,
      //       scaleY: image.scaleY/1.3,
      //       clipTo: clipToBoundary,
      //       bottom: 100
      //     })
      //   });
      // });
      const originalX = 1680
      const originalY=981
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      // let newScaleX, newScaleY;
      
      // newScaleX = (windowWidth / originalX)
      // newScaleY = (windowHeight / originalY)

      // newScaleX = (originalX/windowWidth )
      // newScaleY = (originalY/windowHeight  )
      // console.log(newScaleX)
      // console.log(newScaleY)

      let widthDifference = 0;
      let heightDifference = 0;
      let isWidthGreater = false;
      let isHeightGreater = false;

      if (windowWidth > originalX) {
        widthDifference = (windowWidth - originalX) / originalX * 100;
        isWidthGreater = true;
      } else if (windowWidth < originalX) {
        widthDifference = (originalX - windowWidth) / originalX * 100;
      }

      if (windowHeight > originalY) {
        heightDifference = (windowHeight - originalY) / originalY * 100;
        isHeightGreater = true;
      } else if (windowHeight < originalY) {
        heightDifference = (originalY - windowHeight) / originalY * 100;
      }
      
      let fabricCanvas = JSON.parse(props.homeIndexCanvas);
      console.log(fabricCanvas)
      fabricCanvas.objects.forEach(obj => {
        // if (windowWidth < originalX) {
        //   obj.scaleX -= obj.scaleX * (20 / 100);
        //   obj.left -= obj.left * (30 / 100);
        // } 
        // if (windowHeight < originalY) {
        //   obj.top -= obj.top * (20 / 100);
        //   obj.scaleY -= obj.scaleY * (20 / 100);
        // } 
        if (isWidthGreater==true){
          obj.scaleX += obj.scaleX * (widthDifference / 100);
          obj.left += obj.left * (widthDifference / 100);

          obj.top += obj.top * (heightDifference / 100);
          obj.scaleY += obj.scaleY * (widthDifference / 100);
        }
        else{
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          console.log(isMobile)
          if (isMobile){
            obj.scaleX -= obj.scaleX * (widthDifference / 100);
            obj.left -= obj.left * (widthDifference / 100);

            obj.top -= obj.top * (heightDifference / 100);
            obj.scaleY -= obj.scaleY * (heightDifference / 100);
          }
          else{
            obj.scaleX -= obj.scaleX * (widthDifference / 100);
            obj.left -= obj.left * (widthDifference / 100);

            obj.top -= obj.top * (heightDifference / 100);
            obj.scaleY -= obj.scaleY * (widthDifference / 100);
          }
          
        }
        // if (isHeightGreater==true){
        //   obj.top += obj.top * (heightDifference / 100);
        //   obj.scaleY += obj.scaleY * (heightDifference / 100);

        //   obj.scaleX += obj.scaleX * (heightDifference / 100);
        //   obj.left += obj.left * (heightDifference / 100);
        // }
        // else{
        //   obj.top -= obj.top * (heightDifference / 100);
        //   obj.scaleY -= obj.scaleY * (heightDifference / 100);

        //   obj.scaleX -= obj.scaleX * (heightDifference / 100);
        //   obj.left -= obj.left * (heightDifference / 100);

        // }


      });
      console.log(fabricCanvas)

      var canvas = fabricRef.current.loadFromJSON(JSON.stringify(fabricCanvas))
      
      fabricRef.current = canvas;
      // Render the updated canvas
      canvas.renderAll();
    }
  }
  useEffect(() => {
    initFabric();
    // function handleResize() {
    //   setWindowDimensions(getWindowDimensions());
    // }

    // window.addEventListener('resize', handleResize);
    // return () => window.removeEventListener('resize', handleResize);
  }, [props.homeIndexCanvas]);

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
    const ZOOM_SPEED = window.innerWidth <= 500 ? 80 : 65; // Lower is faster
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
      setHomeIndexImages(zigZagArr);
    }
    mergeIndexImages();
  }, []);

  return (
    <div id="home-page" className="home-page" style={{ width: '100%', height: '100%', overflowX: 'hidden' }}>
      <div className="home-title change-title zoom" style={{ background: 'transparent' }}>
        <h1 style={{ cursor: 'pointer' }}>
          {props.value}
        </h1>
      </div>
      <div className="px-0 d-flex justify-content-between tech-slideshow flex-wrap" style={{ width: '100%', height: '100%', marginBottom: '10%' }}>
        {/* <div style={{ height: '100vh' }} ref={canvasParentRef}> */}
        <canvas className="sample-canvas" ref={canvasRef} id="canvas" />
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
    </div>
  );
}

export default HomeIndex;
