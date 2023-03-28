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
  const [showComponent, setShowComponent] = useState(false);
  const [initialBanners, setInitialBanners] = useState([]);
  const [banners, setBanners] = useState([]);
  const [value, setValue] = useState(props.projectData[index].name);
  const [nextPortfolioSlug, setSlug] = useState(projectData[index].slug);
  const currentPortfolioName = projectData[index].name;
  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [mediumCircle, setMediumCircle] = useState({ x: 0, y: 0 });

  const mousemove = (e) => {
    setLargeCircle({ x: (e.clientX / 30) * -1, y: (e.clientY / 30) * -1 });
    setMediumCircle({ x: (e.clientX / 80) * -1, y: (e.clientY / 80) * -1 });
  };

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const makeTemplateBannerChunks = (arr) => {
    let tempArr = [];
    let tempImages = [];

    if (arr.length === 1) {
      tempArr[0] = arr[0];
      setInitialBanners(tempArr);
      return;
    }
    if (arr.length > 0) {
      tempArr[0] = projectData[index]?.imagesAndThumb[0];
      tempImages = arr.filter((item, key) => {
        if (key !== 0) {
          return item;
        }
      })
      arr = shuffleArray(tempImages);
      if (arr.length > 0) {
        tempArr[1] = arr[0];
        setInitialBanners(tempArr);

        const chunk = arr.filter((item, key) => {
          if (key !== 0) {
            return item;
          }
        });
        setBanners(chunk);
      }
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowComponent(false);
    props.setMEText("BACK");
    setInitialBanners([]);
    setBanners([])
    // split images array into 2 chunks
    makeTemplateBannerChunks(projectData[index]?.imagesAndThumb);

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
    setShowComponent(true);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", mousemove);
    }
  }, [index]);


  return (
    <div style={{ display: showComponent ? '' : 'none' }}>
      <motion.div style={{ height: '100%', position: 'relative' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className={"home-title " + (currentPortfolioName === value ? "text-fill" : "")} style={{ cursor: 'pointer' }}>
          <h1><ReactTextTransition springConfig={presets.default} className="indexitem-button"
          >
            {value || ""}
          </ReactTextTransition></h1>
        </div>
        <h1 className="project-description">{props.projectData[index]?.description}</h1>
        <div
          className="main-proj-section"
          style={{ position: 'relative', height: '100%', marginBottom: '100px' }}
        >
          {initialBanners.length > 0 && (
            <div className="row justify-content-end image-parent">
              <motion.div className="col-md-11 d-flex justify-content-end video-wrapper" style={{ position: 'relative', paddingLeft: '0px', paddingRight: '0px' }}>
                {initialBanners.map((banner, index) => {
                  return index == 0 ?
                    banner.fileUrl.includes("mp4") ?
                      <video autoPlay controls style={{ zIndex: "1" }}>
                        <source src={banner.fileUrl} type="video/mp4" />
                        <source src={banner.fileUrl} type="video/ogg" />
                        Your browser does not support the video tag.
                      </video> :
                      <motion.img
                        className={"img-fluid bottom-img"}
                        src={banner.fileUrl}
                        // style={{ position: 'absolute', bottom: '0px', left: '0px' }}
                        // animate={{ x: largeCircle.x, y: largeCircle.y }}
                        key={index}
                      /> : <></>
                })}
              </motion.div>
            </div>
          )}
          {initialBanners.length > 0 && (
            <div className="row justify-content-end image-parent" style={{ marginTop: '-10%' }}>
              <motion.div className="col-md-11 d-flex justify-content-center">
                {initialBanners.map((banner, index) => {
                  return index == 1 ?
                    banner.fileUrl.includes("mp4") ?
                      <video autoPlay controls muted>
                        <source src={banner.fileUrl} type="video/mp4" />
                        <source src={banner.fileUrl} type="video/ogg" />
                        Your browser does not support the video tag.
                      </video> :
                      <motion.img
                        className={"img-fluid bottom-img"}
                        src={banner.fileUrl}
                        // style={{ position: 'absolute', bottom: '0px', left: '0px' }}
                        animate={{ x: largeCircle.x, y: largeCircle.y }}
                        key={index}
                      /> : <></>
                })}
              </motion.div>
            </div>
          )}
          {banners.length > 0 && (
            <div className="row my-5 py-5" style={{ height: '100%' }}>
              {banners.map((banner, index) => {
                return <motion.div className={"col-md-12 d-flex justify-content-" + (index % 2 == 1 ? "end " : "center ") + (index !== 0 ? "my-5 py-5" : "")}
                  style={{ zIndex: index !== 0 && index % 2 == 0 ? "1000" : "0" }}
                  key={index}>

                  {index % 2 === 0 && index !== 0 ?
                    banner.fileUrl.includes("mp4") ?
                      <video autoPlay controls>
                        <source src={banner.fileUrl} type="video/mp4" />
                        <source src={banner.fileUrl} type="video/ogg" />
                        Your browser does not support the video tag.
                      </video>
                      :
                      < motion.img
                        className={"img-fluid"}
                        src={banner.fileUrl}
                        animate={{ x: largeCircle.x, y: largeCircle.y }}
                        key={index}
                        loading="lazy"
                      />
                    :
                    banner.fileUrl.includes("mp4") ?
                      <video autoPlay controls >
                        <source src={banner.fileUrl} type="video/mp4" />
                        <source src={banner.fileUrl} type="video/ogg" />
                        Your browser does not support the video tag.
                      </video> :
                      <motion.img
                        className={"img-fluid"}
                        src={banner.fileUrl}
                        key={index}
                        animate={{ x: mediumCircle.x, y: mediumCircle.y }}
                      />
                  }

                </motion.div>
              })}
            </div>
          )}
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
    </div>
  );
}

export default Template1;
