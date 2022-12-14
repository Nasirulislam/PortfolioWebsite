import React from "react";
import base_url from "../../constants/url";
import { Link, useNavigate, useParams } from "react-router-dom";
import NextProject from "./NextProject";
import { useEffect } from "react";
import { useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import { motion } from "framer-motion";

function Template1(props) {
  const { slug } = useParams();
  const projectData = props.projectData;
  const index = props.index;
  const [bottom, setBottom] = useState(false);
  const [banners, setBanners] = useState([]);
  const [value, setValue] = useState(projectData[index].name);
  const [nextPortfolioSlug, setSlug] = useState(projectData[index].slug);

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
    setBanners(makeTemplateBannerChunks(projectData[index]?.images, 2));

    const onScroll = function () {
      if (window.innerHeight + window.scrollY > document.body.offsetHeight - 500) {
        setValue(projectData[index + 1].name);
        document.body.style.backgroundColor = projectData[index + 1].color;
        setBottom(true);
        setSlug(projectData[index + 1]?.slug)
      } else {
        setValue(projectData[index].name);
        document.body.style.backgroundColor = projectData[index].color;
        setBottom(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [index]);


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

  // const navigate = useNavigate();
  // const handleSlug = () => {
  //   navigate("/" + nextPortfolioSlug);
  // }

  return (
    <motion.div style={{ height: '100%', position: 'relative' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="home-title" style={{ cursor: 'pointer' }}>
        <h1><ReactTextTransition springConfig={presets.default} className="indexitem-button"
        >
          {value || projectData[index].name}
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
                <motion.div className="col-md-6 d-flex justify-content-end" key={itemIndex}>
                  {item.map((banner, index) => {
                    return index == 0 ?
                      <motion.img
                        className={"img-fluid"}
                        src={`${base_url}` + "/img/projects/" + banner}
                        style={{ position: 'absolute', top: '30%', right: '22%' }}
                        animate={{ x: largeCircle.x, y: largeCircle.y }}
                        key={index}
                      /> :
                      <img
                        className={"img-fluid"}
                        src={`${base_url}` + "/img/projects/" + banner}
                        key={index}
                      />
                  })}
                </motion.div>
              </div>
              : <div className="row my-5 py-5" style={{ height: '100%' }}>
                <motion.div className={"col-md-12 d-flex " + (item.length > 1 ? "justify-content-between" : "justify-content-center")}
                  style={{ zIndex: (banners.length - 1) === itemIndex || itemIndex % 2 == 1 ? "1000" : "0" }}
                  key={itemIndex}>
                  {item.map((banner, index) => {
                    return index == 0 ?
                      <motion.img
                        className={"img-fluid"}
                        src={`${base_url}` + "/img/projects/" + banner}
                        key={index}
                      /> :
                      <img
                        className={"img-fluid"}
                        src={`${base_url}` + "/img/projects/" + banner}
                        key={index}
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
    </motion.div >
  );
}

export default Template1;
