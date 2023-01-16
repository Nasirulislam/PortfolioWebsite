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
  const [initialBanners, setInitialBanners] = useState([]);
  const [banners, setBanners] = useState([]);
  const [value, setValue] = useState(props.projectData[index].name);
  const [nextPortfolioSlug, setSlug] = useState(projectData[index].slug);
  const currentPortfolioName = projectData[index].name;

  const makeTemplateBannerChunks = (arr) => {

    // extract first two initial banners
    if (arr.length >= 2) {
      const chunk = arr.slice(0, 2);
      setInitialBanners(chunk);
    }
    if (arr.length > 2) {
      const chunk = arr.slice(2, arr.length);
      setBanners(chunk);
    } else {
      setBanners(arr);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    // split images array into 2 chunks
    makeTemplateBannerChunks(projectData[index]?.images);

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

  useEffect(() => {
    props.setMEText("BACK");
  }, [])

  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [mediumCircle, setMediumCircle] = useState({ x: 0, y: 0 });
  const mousemove = (e) => {
    setLargeCircle({ x: (e.clientX / 30) * -1, y: (e.clientY / 30) * -1 });
    setMediumCircle({ x: (e.clientX / 80) * -1, y: (e.clientY / 80) * -1 });
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
      <div className={"home-title " + (currentPortfolioName === value ? "text-fill" : "")} style={{ cursor: 'pointer' }}>
        <h1><ReactTextTransition springConfig={presets.default} className="indexitem-button"
        >
          {value || ""}
        </ReactTextTransition></h1>
      </div>
      <div
        className="main-proj-section"
        style={{ position: 'relative', height: '100%' }}
      >
        {initialBanners.length > 0 && (
          <div className="row justify-content-end image-parent">
            <motion.div className="col-md-11 d-flex justify-content-end" style={{ position: 'relative',paddingLeft: '0px', paddingRight: '0px' }}>
              {initialBanners.map((banner, index) => {
                return index == 0 ?
                  banner.includes("mp4") ?
                    <video autoPlay loop muted style={{zIndex: "1"}}>
                      <source src={`${base_url}` + "/projects/" + banner} type="video/mp4" />
                      <source src={`${base_url}` + "/projects/" + banner} type="video/ogg" />
                      Your browser does not support the video tag.
                    </video> :
                    <motion.img
                      className={"img-fluid bottom-img"}
                      src={`${base_url}` + "/projects/" + banner}
                      // style={{ position: 'absolute', bottom: '0px', left: '0px' }}
                      // animate={{ x: largeCircle.x, y: largeCircle.y }}
                      key={index}
                    /> : <></>
              })}
            </motion.div>
          </div>
        )}
        {initialBanners.length > 0 && (
          <div className="row justify-content-end image-parent" style={{marginTop: '-10%'}}>
            <motion.div className="col-md-11 d-flex justify-content-center">
              {initialBanners.map((banner, index) => {
                return index == 1 ?
                  banner.includes("mp4") ?
                    <video autoPlay loop muted>
                      <source src={`${base_url}` + "/projects/" + banner} type="video/mp4" />
                      <source src={`${base_url}` + "/projects/" + banner} type="video/ogg" />
                      Your browser does not support the video tag.
                    </video> :
                    <motion.img
                      className={"img-fluid bottom-img"}
                      src={`${base_url}` + "/projects/" + banner}
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
                  banner.includes("mp4") ?
                    <video autoPlay loop muted>
                      <source src={`${base_url}` + "/projects/" + banner} type="video/mp4" />
                      <source src={`${base_url}` + "/projects/" + banner} type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                    :
                    < motion.img
                      className={"img-fluid"}
                      src={`${base_url}` + "/projects/" + banner}
                      animate={{ x: largeCircle.x, y: largeCircle.y }}
                      key={index}
                    />
                  :
                  banner.includes("mp4") ?
                    <video autoPlay loop muted>
                      <source src={`${base_url}` + "/projects/" + banner} type="video/mp4" />
                      <source src={`${base_url}` + "/projects/" + banner} type="video/ogg" />
                      Your browser does not support the video tag.
                    </video> :
                    <motion.img
                      className={"img-fluid"}
                      src={`${base_url}` + "/projects/" + banner}
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
  );
}

export default Template1;
