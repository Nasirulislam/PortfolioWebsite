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
    // console.log("scroliing");
    const element = document.getElementsByClassName("next-project-section")[0];
    var offset =
      element.getBoundingClientRect().top -
      element.offsetParent.getBoundingClientRect().top;
    // console.log(element.scrollHeight);
    const top = window.pageYOffset + window.innerHeight - offset;

    // console.log("Top: " + top);
    // console.log("Element height: " + element.scrollHeight);
    if (top >= element.scrollHeight) {
      setBottom(true);
      // console.log("hello");
    } else if (top < element.scrollHeight - 300) {
      setBottom(false);
      // console.log("Hey");
    }
  };
  const setScroll = () => {};
  useEffect(() => {
    window.addEventListener("scroll", handleNextProject);
    return () => {
      window.removeEventListener("scroll", handleNextProject);
    };
  }, []);

  const GroupRef = useRef([]);
  const onScroll = (el) => {
    const styles = GroupRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect();
        return { group, rect };
      })
      .find((group) => group.rect.bottom >= window.innerHeight * 0.5);

    document.body.style.backgroundColor = `${styles.group.dataset.bgcolor}`;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });

  return (
    <div>
      <div
        className="main-proj-section"
        ref={(el) => (GroupRef.current[0] = el)}
        data-bgcolor={projectData[index].color}
      >
        {projectData.map((item, itemIndex) => {
          if (index === itemIndex) {
            return (
              <div style={{ width: "100vw" }}>
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
        <div
        ref={(el) => (GroupRef.current[1] = el)} data-bgcolor={projectData[index+1].color}
        >
          <NextProject projectData={projectData} index={index} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Template1;
