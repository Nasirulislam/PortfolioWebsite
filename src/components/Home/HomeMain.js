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
import BeatsBy from "../BeatsBy/Beatsby";
import Brenna from "../Brenna/Brenna";
import BabyYorus from "../BabyYorus/BabyYorus";
import BufferData from "../Buffer";
import "./Home.css";
function HomeMain() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [homeState, setHomeState] = useState(true);
  const [projects, setProjects] = useState([]);
  const heroTitle = document.querySelector(".hero-title");
  // const heroTitleOverlay = document.querySelector("span");

  // heroTitleOverlay.innerText = heroTitle.textContent
  const setNames = (nameArr) => {
    if (nameArr.length == 1) {
      setFirstName(nameArr[0]);
      console.log("Setting Title");
      setSecondName(" ");
    } else if (nameArr.length == 2) {
      setFirstName(nameArr[0]);
      setSecondName(nameArr[1]);
    } else if (nameArr.length == 3) {
      setFirstName(nameArr[0].concat(" ", nameArr[1]));
      setSecondName(nameArr[2]);
    }
  };
  const changeTitle = (firstPart, secondPart) => {
    const arr = BufferData[0].title.split(" ");
    setFirstName("MARCUS");
    setSecondName(arr[1]);
    const nameArr = [];
    BufferData[0].projects.map((item, index) => {
      nameArr.push(item.title);
    });
    if (window.scrollY < 400) {
      setFirstName("MARCUS");
    } else if (window.scrollY >= 400 && window.scrollY < 1500) {
      setFirstName(nameArr[0]);
    } else if (window.scrollY > 1500 && window.scrollY < 2700) {
      setFirstName(nameArr[1]);
    } else if (window.scrollY >= 3000 && window.scrollY < 3500) {
      setFirstName(nameArr[2]);
      // setNames(item.title);
    } else if (window.scrollY >= 3500 && window.scrollY < 4500) {
      setFirstName(nameArr[3]);
      // setNames(item.title);
    } else if (window.scrollY >= 4500 && window.scrollY < 5500) {
      setFirstName(nameArr[4]);
      // setNames(item.title);
    } else if (window.scrollY >= 5500 && window.scrollY < 6500) {
      // setNames(item.title);
    } else if (window.scrollY >= 6500 && window.scrollY < 7500) {
      // setNames(item.title);
    } else if (window.scrollY >= 7500 && window.scrollY < 8100) {
      // setNames(item.title);
    } else if (window.scrollY >= 8100 && window.scrollY < 9000) {
      // setNames(item.title);
    } else if (window.scrollY >= 9000 && window.scrollY < 10000) {
      // setNames(item.title);
    } else if (window.scrollY >= 10000 && window.scrollY < 11000) {
      // setNames(item.title);
    } else if (window.scrollY >= 11000 && window.scrollY < 11950) {
      // setNames(item.title);
    } else if (window.scrollY >= 11950 && window.scrollY < 13000) {
      // setNames(item.title);
    } else if (window.scrollY >= 13000 && window.scrollY < 13500) {
      // setNames(item.title);
    } else if (window.scrollY >= 13500 && window.scrollY < 14500) {
      // setNames(item.title);
    } else {
      // setNames(item.title);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeTitle, true);
    return () => window.removeEventListener("scroll", changeTitle);
  }, []);

  return (
    <div>
      {BufferData.map((item, index) => {
        return (
          <div key={index}>
            <div className="home-title">
              <h1>{firstName}</h1>
              {/* <h1 className="mx-5">{titleVal[1]}</h1> */}
            </div>
            
            <HomeIndex title={item.title} />
            {item.projects.map((project, index1) => {
              if (project.template == 1) {
                return (
                  <Fencher
                    image1={project.images[0].url}
                    image2={project.images[1].url}
                    title={project.title}
                    images = {[...project.images]}
                    slug = {"/".concat(project.slug)}
                  />
                );
              } else if (project.template == 2) {
                return (
                  <Auston
                    image1={project.images[0].url}
                    image2={project.images[1].url}
                    image3={project.images[2].url}
                    slug = {"/".concat(project.slug)}
                    title={project.title}
                    images = {[...project.images]}
                  />
                );
              } else if (project.template == 3) {
                return (
                  <Amoeba
                    image1={project.images[0].url}
                    image2={project.images[1].url}
                    image3={project.images[2].url}
                    slug = {"/".concat(project.slug)}
                    title={project.title}
                    images = {[...project.images]}
                  />
                );
              } else if (project.template == 4) {
                return (
                  <BeatsBy
                    image1={project.images[0].url}
                    image2={project.images[1].url}
                    slug = {"/".concat(project.slug)}
                    title={project.title}
                    images ={[...project.images]}
                  />
                );
              } else if (project.template == 5) {
                return (
                  <Brenna image1={project.images[0].url} title={project.title}  slug = {"/".concat(project.slug)} images = {[...project.images]} />
                );
              } else if (project.template == 6) {
                return (
                  <BabyYorus
                    image1={project.images[0].url}
                    image2={project.images[1].url}
                    title={project.title}
                    slug = {"/".concat(project.slug)}
                    images = {[...project.images]}
                  />
                );
              } else if (project.template == 7) {
                return (
                  <Ballet
                    image1={project.images[0].url}
                    image2={project.images[1].url}
                    image3={project.images[2].url}
                    slug = {"/".concat(project.slug)}
                    images ={[...project.images]}
                    title={project.title}
                  />
                );
              }
            })}
          </div>
        );
      })}
      <div className="view-all-projects" style={{ top: 12500 }}></div>
    </div>
  );
  
  {
    /*         
        // return (
        //   <div>
        //     <div className={homeState ? "home-title" : "home-title-hide"}>
        //       <h1>{firstName}</h1>
        //       <h1 className="px-3">{secondName}</h1>
        //     </div> */
  }

  {
    /* <HomeIndex />
            <Fencher image1={image1} image2={image2} MarginTop={400} />
            <Auston
              top={1300}
              image1={image3}
              image2={image4}
              image3={image1}
              firstName={firstName}
              lastName={secondName}
            />
            <Amoeba
              top={2000}
              image1={image3}
              image2={image4}
              image3={image1}
            />
            <Fencher image1={image3} image2={image2} MarginTop={3000} />
            <Amoeba
              top={3800}
              image1={image3}
              image2={image4}
              image3={image1}
            />
            <Fencher image1={image1} image2={image2} MarginTop={4800} />
            <BeatsBy image1={image1} image2={image2} top={6000} />
            <Brenna image={image4} top={6800} />
            <Fencher image1={image1} image2={image2} MarginTop={7000} />
            <Amoeba
              top={7800}
              image1={image3}
              image2={image4}
              image3={image1}
            />
            <Fencher image1={image1} image2={image2} MarginTop={9000} />
            <BabyYorus image1={image1} image2={image2} top={10000} />
            <Amoeba
              top={10090}
              image1={image3}
              image2={image4}
              image3={image1}
            />
            <Brenna image={image4} top={11200} />
            <Amoeba
              top={11200}
              image1={image3}
              image2={image4}
              image3={image1}
            /> */
  }
  {
    /* <div className="view-all-projects" style={{ top: 12500 }}></div>
          </div>
        );
      })} */
  }
  {
    /* </div>
  ); */
  }
}

export default HomeMain;
