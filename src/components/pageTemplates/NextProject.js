import React, { useRef } from "react";

import { Container, Row, Col } from "react-bootstrap";
import base_url from "../../constants/url";
// import "./template.css";
import { useLocation, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";

function NextProject(props) {
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
    // window.addEventListener("scroll", handleNextProject);
    return () => {
      // window.removeEventListener("scroll", handleNextProject);
    };
  }, []);
  
  return (
    <div
      className="next-project-section"
      style={{
        width: "100%",
        zindex:"10",
        height: "100vh",
        background:"transparent",        
      }}
      onClick={() => {
        navigate(
          index + 1 < projectData.length - 1
            ? `/${projectData[index + 1].slug}`
            : "/"
        );
        window.scrollTo(0,0);
      }}
    >
      <div className="">
        {/* {index <= projectData.length - 1 ? (
          <h1 >{projectData[index + 1].name}</h1>
        ) : (
          ""
        )} */}
        {/* <h4 style={{ color:projectData[index+1].color}}>Next project</h4> */}
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <img
          className="next-proj-img1"
          src={
            `${base_url}` + "/img/projects/" + projectData[index + 1].images[0]
          }
        />
        <img
          className="next-proj-img2"
          src={
            `${base_url}` + "/img/projects/" + projectData[index + 1].images[1]
          }
        />
      </div>
    </div>
  );
}

export default NextProject;
