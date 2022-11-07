import React, { useEffect, useState } from "react";
import Amoeba from "../Amoeba/Amoeba";
import Auston from "../Auston/Auston";
import Fencher from "../Fencher/Fencher";
import image1 from "../../Assets/images/1.jpg";
import image2 from "../../Assets/images/4.jpg";
import image3 from "../../Assets/images/3.jpg";
import image4 from "../../Assets/images/5.jpg";
import HomeIndex from "./HomeIndex";
import Ballet from "../Ballet/Ballet";
function HomeMain() {
  const [firstName, setFirstName] = useState("MARCUS");
  const [secondName, setSecondName] = useState("ERIKSSON");
  const [homeState, setHomeState] = useState(true);

  const changeTitle = () => {
    if (window.scrollY < 400) {
      setFirstName("MARCUS");
      setSecondName("ERIKSSON");
    } else if (window.scrollY >= 400 && window.scrollY < 1500) {
      setFirstName("Fencer");
      setSecondName("");
    } else if (window.scrollY > 1500 && window.scrollY < 2700) {
      setFirstName("Auston");
      setSecondName("Matthews");
    } else if (window.scrollY >= 3000 && window.scrollY < 3500) {
      setFirstName("AMOEBA");
      setSecondName("");
    } else if (window.scrollY >= 3500 && window.scrollY < 4500) {
      setFirstName("DAMIANN");
      setSecondName("LILLARD");
    }
     else if (window.scrollY >= 3500) {
      setFirstName("BALLET");
      setSecondName("BC");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeTitle, true);
    return () => window.removeEventListener("scroll", changeTitle);
  }, []);

  return (
    <div>
      <div className={homeState ? "home-title" : "home-title-hide"}>
        <h1>{firstName}</h1>
        <h1 className="px-3">{secondName}</h1>
      </div>
      <HomeIndex />
      <Fencher image1={image1} image2={image2} MarginTop={400} />
      <Auston top={900} image1={image3} image2={image4} image3={image1} />
      <Amoeba top={1500} image1={image3} image2={image4} image3={image1} />
      <Fencher image1={image3} image2={image2} MarginTop={2500} />
      <Amoeba top={900} image1={image3} image2={image4} image3={image1} />
    </div>
  );
}

export default HomeMain;
