import React, { useRef } from "react";

import { Container, Row, Col } from "react-bootstrap";
import base_url from "../../constants/url";
import "./template.css";
import getRandomTemp from "./Radome";
import tempImg from "./tempImg";
import { useLocation, useNavigate } from "react-router-dom";
import NextProject from "./NextProject";
import { useEffect } from "react";
import { useState } from "react";

function Template1(props) {
  const projectData = props.projectData;
  const index = props.index;
  const navigate = useNavigate();
  const [bottom, setBottom] = useState(false);

  const handleNextProject = (event) => {
    console.log("scroliing");
    const element = document.getElementsByClassName("next-project-section")[0];
    var offset =
      element.getBoundingClientRect().top -
      element.offsetParent.getBoundingClientRect().top;
    console.log(element.scrollHeight);
    const top = window.pageYOffset + window.innerHeight - offset;

    if (top >= element.scrollHeight) {
      setBottom(true);
    } else if (top < element.scrollHeight - 300) {
      setBottom(false);
    }
  };
  const setScroll = () => {
    console.log("hello");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleNextProject);
    return () => {
      window.removeEventListener("scroll", handleNextProject);
    };
  }, []);

  // let t1 = gsap.timeline({defaults:{ease:"SlowMo.easeOut"}});
  // t1.to("#create")
  return (
    <div>
      <div className="main-proj-section">
        {projectData.map((item, itemIndex) => {
          if (index === itemIndex) {
            return (
              <div style={{ width: "100vw", background: item.color }}>
                <div className="title">
                  <h1> {bottom ? "" : item.name}</h1>
                  {/* <h1><span id="create">{bottom ? "" : item.name}</span></h1> */}
                </div>
                <div className="d-flelx flex-co">
                  {item.images.map((temp, index) => {
                    if (index === 0) {
                      return (
                        <div className="temp_img1" key={index}>
                          <img
                            className="movingImg img-fluid"
                            src={`${base_url}` + "/img/projects/" + temp}
                          />
                        </div>
                      );
                    }
                    return <div key={index}>{getRandomTemp(temp)}</div>;
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
      {index <= projectData.length - 1 ? (
        <NextProject projectData={projectData} index={index} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Template1;
