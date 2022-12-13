import React, { useRef } from "react";
import base_url from "../../constants/url";
import { Link, useNavigate } from "react-router-dom";
import NextProject from "./NextProject";
import { useEffect } from "react";
import { useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import { motion } from "framer-motion";

function Template1(props) {
  const projectData = props.projectData;
  const index = props.index;
  const navigate = useNavigate();
  const [bottom, setBottom] = useState(false);
  const [banners, setBanners] = useState([]);

  const nextRef = useRef(null);
  const [value, setValue] = useState(projectData[index].name);

  const makeTemplateBannerChunks = (arr, chunkSize) => {
    let array = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      array.push(chunk);
    }
    return array;
  }

  useEffect(() => {

    // split images array into 2 chunks
    setBanners(makeTemplateBannerChunks(props.projectData[index]?.images, 2));
    console.log(banners)

    const onScroll = function () {
      if (window.innerHeight + window.scrollY > document.body.offsetHeight - 500) {
        setValue(projectData[index + 1].name);
        document.body.style.backgroundColor = projectData[index + 1].color;
        setBottom(true);
      } else {
        setValue(projectData[index].name);
        document.body.style.backgroundColor = projectData[index].color;
        setBottom(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });


  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const mousemove = (e) => {
    setLargeCircle({ x: (e.clientX / 30) * -1, y: (e.clientY / 30) * -1 });
  };
  useEffect(() => {
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  const nextProjectAnimate = {
    hidden: {
      y: 100
    },
    visible: {
      y: 0
    }
  }

  return (
    <div style={{ height: '100%', position: 'relative' }} >
      <div className="home-title" style={{ cursor: 'pointer' }}>
        <h1><ReactTextTransition springConfig={presets.default} className="indexitem-button"
        >
          {value || "David Ellis"}
        </ReactTextTransition></h1>
      </div>
      <div
        className="main-proj-section"
        style={{ position: 'relative', height: '100%' }}
      >
        {banners.map((item, itemIndex) => {
          return (
            itemIndex === 0 ?
              <div className="row justify-content-end" style={{ height: '170vh', position: 'relative' }}>
                <motion.div className="col-md-6 d-flex justify-content-end">
                  {item.map((banner, index) => {
                    return index == 0 ?
                      <motion.img
                        className={"img-fluid"}
                        src={`${base_url}` + "/img/projects/" + banner}
                        style={{ position: 'absolute', top: '30%', right: '22%' }}
                        animate={{ x: largeCircle.x, y: largeCircle.y }}
                      /> :
                      <img
                        className={"img-fluid"}
                        src={`${base_url}` + "/img/projects/" + banner}
                      />
                  })}
                </motion.div>
              </div>
              : <div className="row my-5 py-5" style={{ height: '100%' }}>
                <motion.div className={"col-md-12 d-flex " + (item.length > 1 ? "justify-content-between" : "justify-content-center")}
                  style={{ zIndex: (banners.length - 1) === itemIndex || itemIndex%2==1 ? "1000" : "0" }}>
                  {item.map((banner, index) => {
                    return index == 0 ?
                      <motion.img
                        className={"img-fluid"}
                        src={`${base_url}` + "/img/projects/" + banner}
                      /> :
                      <img
                        className={"img-fluid"}
                        src={`${base_url}` + "/img/projects/" + banner}
                      />
                  })}
                </motion.div>
              </div>
          )
        })}
      </div>
      {
        index <= props.projectData.length - 1 && props.projectData[index + 1] ? (
          <Link to={"/" + projectData[index + 1]?.slug}>
            <NextProject projectData={projectData} index={index} showDescription={bottom} />
          </Link>
        ) : (
          ""
        )
      }
    </div >
  );
}

export default Template1;
