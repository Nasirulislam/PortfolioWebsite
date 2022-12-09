import "./template.css";
import base_url from "../../constants/url";

const getRandomTemp = (image, index) => {
  let value = Math.floor(Math.random() * 5);
  if (value == 1) {
    return (
      <div className="temp_img1">
        <img className="movingImg img-fluid"  src={`${base_url}` + "/img/projects/" + image} />
      </div>
    );
  } else if (value == 2) {
    return (
      <div className="temp_img2">
        <img className={"img-fluid" + ((index % 2 == 1) && index !== 0 ? " imgOver" : "")}  src={`${base_url}` + "/img/projects/" +image} />
      </div>
    );
  } else if (value == 3) {
    return (
      <div className="temp_img3">
        <img className={"img-fluid" + ((index % 2 == 1) && index !== 0 ? " imgOver" : "")}  src={`${base_url}` + "/img/projects/" +image} />
      </div>
    );
  } else if (value == 4) {
    return (
      <div className="temp_img4">
        <img className={"img-fluid" + ((index % 2 == 1) && index !== 0 ? " imgOver" : "")}  src={`${base_url}` + "/img/projects/" +image} />
      </div>
    );
  }

  return (
    <div className="temp_img5">
      <img className={"img-fluid" + ((index % 2 == 1) && index !== 0 ? " imgOver" : "")}  src={`${base_url}` + "/img/projects/" +image} />
    </div>
  );
};

export default getRandomTemp;