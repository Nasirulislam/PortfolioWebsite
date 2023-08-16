import React, { useEffect, useState } from "react";
import "./Index.css";
import { motion } from "framer-motion";
import base_url from "../../constants/url";
import { useNavigate } from "react-router-dom";

function IndexItem(props) {
  const [isAnimating, setIsAnitmating] = useState(false);
  const [display, setDisplay] = useState(false);
  const [showUpward, setUpward] = useState(false);
  const [showDownward, setDownward] = useState(false);
  const [image, setItemImage] = useState("");
  const [showMobile, setShowImageLeft] = useState(false);

  const onMouseOver = (e, itemId, itemColor) => {
    e.preventDefault();
    e.target.style.zIndex = '999';
    setIsAnitmating(true);
    let el = document.getElementById(itemColor);
    if (el) el.style.color = itemColor;


    // calculate window height
    const windowWidth = document.getElementsByTagName("body")[0];
    const item = e.target.getBoundingClientRect();

    // console.log(windowWidth.clientWidth);
    if (windowWidth.clientWidth <= 500) {
      setShowImageLeft(true);
    } else {
      setShowImageLeft(false);
    }
    if (item.height + item.y > (windowWidth.clientHeight - 200)) {
      // show image upward
      setUpward(true);
      setDownward(false);
    } else {
      // show image downward
      setDownward(true);
      setUpward(false);
    }


    setDisplay(true);
    setTimeout(() => {
      setDisplay(false);
    }, 8000);
  };

  const onMouseLeave = (e, itemId, itemColor) => {
    setIsAnitmating(false);
    setDisplay(false);
    e.target.style.zIndex = '1';
    let el = document.getElementById(itemColor);
    if (el) el.style.color = 'white';
  };

  useEffect(() => {
    if (props.image.length > 0) {
      let tempArr = props.image.filter((item, key) => {
        if (!item.fileUrl.includes("mp4")) {
          return item;
        }
      })

      console.log(tempArr)
      setItemImage(tempArr[props.currentProject.thumbnailIndex ? props.currentProject.thumbnailIndex - 1 : 0]);
    } else {
      setItemImage(props.image[props.currentProject.thumbnailIndex ? props.currentProject.thumbnailIndex - 1 : 0]);
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div className="index-item-section" style={{ position: 'relative' }} key={props.currentProject._id} onClick={() => {
      props.setselProj(props.currentProject.name)
      props.setprojChanged(true)
      props.handleOnIndexLeave();
      navigate("/" + props.currentProject.slug, {
        state: {
          name: props.currentProject.name,
          detail: props.currentProject.name,
          images: [...props.currentProject.images],
          projects: props.projects,
          nextProject: props.nextProject,
        },
      });
    }}>
      <div className="d-flex indexlist-props"
      >
        <motion.h3
          className="indexitem-button text-size"
          title={props.text}
          id={props.color}
          // data-replace={props.text}
          // whileHover={() => onMouseOver(props.name, props.color)}
          onMouseEnter={(e) => onMouseOver(e, props.name, props.color)}
          onMouseLeave={(e) => onMouseLeave(e, props.name, props.color)}
          style={{ marginBottom: '0px' }}
        >
          {props.text}
        </motion.h3>
      </div>
      {/* <motion.div
        className="mobile-wrapper"
        style={{ display: display ? "inline" : "none", position: 'absolute', width: '100%', height: '25vh', objectFit: 'contain', top: '0' }}
        animate={{
          x: isAnimating ? 100 : 20,
          opacity: isAnimating ? 1 : 0,
          // position: "absolute",
        }}
        initial={{
          opacity: 0,
          // position: "absolute",
          x: -100,
          rotate: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          duration: 3
        }}
      >
        <img
          className="img-fluid animated fadeOut"
          src={`${base_url}` + "/projects/" + image}
        // style={{ zIndex: '-1' }}
        />
      </motion.div> */}

      <motion.div
        className="index-image"
        id="in-image"
        style={{
          // paddingTop:"20px", 
          display: display ? "block" : "none", bottom: showUpward ? '0px' : '', top: showDownward ? (props.index === 0 || props.index === 1 ? '20px !important' : '0px') : '0px'
        }}
        animate={{
          x: showMobile ? (isAnimating ? 100 : 20) : (isAnimating ? 500 : "200vh"),
          opacity: isAnimating ? 1 : 0,
          position: "absolute",
        }}
        initial={{
          opacity: 0,
          position: "absolute",
          x: "200vh",
          rotate: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
      >
        <img
          className="img-fluid animated fadeOut"
          src={image?.fileUrl}
        // style={{height: '25vh'}}
        />
      </motion.div>
    </div>
  );
}

export default IndexItem;
