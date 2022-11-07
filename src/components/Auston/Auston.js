import React from "react";
import image1 from "./../../Assets/images/6.jpg";
import image2 from "./../../Assets/images/5.jpg";
import image3 from "./../../Assets/images/4.jpg";
import "./Auston.css"
function Auston(props) {
  return (
    <div className="auston-section" style={{top:props.top}}>
      <div className="Auston-image1">
        <img className="img-fluid" src={props.image1} />
      </div>
      <div className="Auston-image2">
        <img className="img-fluid" src={props.image2} />
      </div>
      <div className="Auston-image3">
        <img className="img-fluid" src={props.image3} />
      </div>
    </div>
  );
}

export default Auston;
