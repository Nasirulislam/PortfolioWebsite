import React, { useRef } from "react";
import base_url from "../../constants/url";
import getRandomTemp from "./Radome";
import { useLocation, useNavigate } from "react-router-dom";
import NextProject from "./NextProject";
import { useEffect } from "react";
import { useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

function Template1(props) {
  const projectData = props.projectData;
  const index = props.index;
  const navigate = useNavigate();
  const [bottom, setBottom] = useState(false);

  const nextRef = useRef(null);
  const [value, setValue] = useState(projectData[index].name);

  // const onScroll = (el) => {
  // const { scrollTop, scrollHeight, clientHeight } = nextRef.current;
  // if (scrollTop + clientHeight === scrollHeight) {
  //   setValue(projectData[index+1].name);
  // } else {
  //   setValue(projectData[index].name);
  // }
  // const bottom = el.target.scrollHeight - el.target.scrollTop === el.target.clientHeight;

  // if (styles.bottom > window.innerHeight * 0.5) {
  //   document.body.style.backgroundColor = `${styles.dataset.bgcolor}`;
  // }


  // };

  useEffect(() => {
    const onScroll = function () {
      console.log(document.body.offsetHeight);
      console.log(window.innerHeight + window.scrollY)
      if (window.innerHeight + window.scrollY > document.body.offsetHeight - 500) {
        console.log("you're at the bottom of the page")
        setValue(projectData[index + 1].name);
        document.body.style.backgroundColor = projectData[index + 1].color;
      } else {
        setValue(projectData[index].name);
        document.body.style.backgroundColor = projectData[index].color;
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const nextProjectAnimate = {
    hidden: {
      y: 100
    },
    visible: {
      y: 0
    }
  }

  return (
    <div style={{ height: '100%' }} >
      <div className="home-title">
        <h1><ReactTextTransition springConfig={presets.default} className="indexitem-button"
        >
          {value || "David Ellis"}
        </ReactTextTransition></h1>
      </div>
      <div
        className="main-proj-section"
        style={{ backgroundColor: projectData[index].color }}
      >
        {projectData.map((item, itemIndex) => {
          if (index === itemIndex) {
            return (
              <div style={{ width: "100vw" }}>
                {item.images.map((temp, index) => {
                  if (index === 0) {
                    return (
                      <img
                        className={"img-fluid"}
                        src={`${base_url}` + "/img/projects/" + temp}
                      />
                    );
                  }
                  return <div key={index} style={{ height: '100vh', width: '100vw' }} className={"" + ((index % 2 == 1) && index !== 0 ? " imgOver" : "")}>{getRandomTemp(temp, index)}</div>;
                })}
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
