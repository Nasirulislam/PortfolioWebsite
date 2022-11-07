import React from "react";
import "./Ballet.css"
import image1 from "./../../Assets/images/2.jpg";
import image2 from "./../../Assets/images/1.jpg";
import image3 from "./../../Assets/images/3.jpg";

function Ballet() {
  return (
    <div className="ballet-section" style={{top:500}}>
      <div className="ballet-img1">
        <img className="img-fluid" src={image1} />
      </div>
      <div className="ballet-img2">
        <img className="img-fluid" src={image2} />
      </div>
      <div className="ballet-img3">
        <img className="img-fluid" src={image3} />
      </div>
    </div>
  );
}

export default Ballet;
