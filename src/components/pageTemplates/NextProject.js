import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import image1 from "./../../Assets/images/2.jpg";
import url from "../../constants/url";

function NextProject(props) {
  return (
    <div className="next-project-section d-flex">
      <div className="next-proj-title">
        <h1>{props.nextProject.name}</h1>
      </div>
      <div className="images">
        {props.nextProject.images?.map((image, index) => {
          var FloatP = "";
          var float = false;
          var zIndex = 0;
          if (image.type == 0) {
            FloatP = "flex-start";
            float = true;
          } else if (image.type == 1) {
            FloatP = "flex-end";
            float = false;
          } else if (image.type == 2) {
            zIndex = 1;
          } else if (image.type == 3) {
            zIndex = -1;
          }
          if (index < 2) {
            return (
              <div style={{ alignSelf: FloatP, zIndex: 1 }}>
                <img
                  className="img-fluid m-1 main-page-images hoverImages"
                  src={url.url + "/img/projects/" + image.url}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default NextProject;
