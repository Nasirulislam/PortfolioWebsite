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
import base_url from "../../constants/url";
import axios from "axios";

function HomeMain(props) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [homeState, setHomeState] = useState(true);
  const [projects, setProjects] = useState([]);
  const heroTitle = document.querySelector(".hero-title");

  const [projectsData, setProjectsData] = useState([]);
  // const [projectNames, setProjectNames] = useState([]);
  let projectNames = [];
  // const heroTitleOverlay = document.querySelector("span");

  // heroTitleOverlay.innerText = heroTitle.textContent

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${base_url}/project/`);
      // .then((response) => {
      // console.log(response.data.data.sortedProjects);
      setProjectsData(response.data.data.sortedProjects);
      console.log(projectsData);

      // });
    };
    fetchProducts();
    window.addEventListener("scroll", changeTitle, true);
  }, []);


  // const setNames = (nameArr) => {
  //   if (nameArr.length == 1) {
  //     setFirstName(nameArr[0]);
  //     console.log("Setting Title");
  //     setSecondName(" ");
  //   } else if (nameArr.length == 2) {
  //     setFirstName(nameArr[0]);
  //     setSecondName(nameArr[1]);
  //   } else if (nameArr.length == 3) {
  //     setFirstName(nameArr[0].concat(" ", nameArr[1]));
  //     setSecondName(nameArr[2]);
  //   }
  // };

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  const changeTitle = (firstPart, secondPart) => {

    var position = isInViewport(document.getElementById("index_02"));
    if(position){
      alert(position)
    }

    if(!projectsData.length > 0) {
      return;
    }
    const arr = BufferData[0].title.split(" ");
    setFirstName("MARCUS");
    if (window.scrollY < 400) {
      setFirstName("MARCUS");
    } else if (window.scrollY >= 400 && window.scrollY < 1000) {
      console.log(projectsData)
      setFirstName(projectsData[0].name);
    } else if (window.scrollY > 1000 && window.scrollY < 2300) {
      // setFirstName(projectsData[1].name);
    }
    // else if (window.scrollY >= 2300 && window.scrollY < 3300) {
    //   setFirstName(projectsData[2].name);
    // } else if (
    //   window.scrollY >= 3300 &&
    //   window.scrollY < 4300 &&
    //   projectsData.length > 3
    // ) {
    //   setFirstName(projectsData[3].name);
    // } else if (
    //   window.scrollY >= 4300 &&
    //   window.scrollY < 5300 &&
    //   projectsData.length > 4
    // ) {
    //   setFirstName(projectsData[4].name);
    // } else if (
    //   window.scrollY >= 5300 &&
    //   window.scrollY < 6300 &&
    //   projectsData.length > 5
    // ) {
    //   setFirstName(projectsData[5].name);
    // } else if (
    //   window.scrollY >= 6300 &&
    //   window.scrollY < 7300 &&
    //   projectsData.length > 6
    // ) {
    //   setFirstName(projectsData[6].name);
    // } else if (
    //   window.scrollY >= 7300 &&
    //   window.scrollY < 8300 &&
    //   projectsData.length > 7
    // ) {
    //   setFirstName(projectsData[7].name);
    // } else if (
    //   window.scrollY >= 8300 &&
    //   window.scrollY < 9300 &&
    //   projectsData.length > 8
    // ) {
    //   setFirstName(projectsData[8].name);
    // } else if (
    //   window.scrollY >= 9300 &&
    //   window.scrollY < 10300 &&
    //   projectsData.length > 9
    // ) {
    //   setFirstName(projectsData[9].name);
    // } else if (
    //   window.scrollY >= 10300 &&
    //   window.scrollY < 11300 &&
    //   projectsData.length > 10
    // ) {
    //   setFirstName(projectsData[10].name);
    // } else if (
    //   window.scrollY >= 11300 &&
    //   window.scrollY < 12300 &&
    //   projectsData.length > 11
    // ) {
    //   setFirstName(projectsData[11].name);
    // } else if (
    //   window.scrollY >= 13300 &&
    //   window.scrollY < 14300 &&
    //   projectsData.length > 12
    // ) {
    //   setFirstName(projectsData[12].name);
    // } else if (
    //   window.scrollY >= 14300 &&
    //   window.scrollY < 15300 &&
    //   projectsData.length > 13
    // ) {
    //   setFirstName(projectsData[13].name);
    // } else if (
    //   window.scrollY >= 16300 &&
    //   window.scrollY < 17300 &&
    //   projectsData.length > 14
    // ) {
    //   setFirstName(projectsData[14].name);
    // } else if (
    //   window.scrollY >= 17300 ) {
    //   setFirstName("ALL PROJECTS");
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeTitle, true);
    console.log("Scrolling");
    return () => window.removeEventListener("scroll", changeTitle);
  }, []);

  // const setNamesTitle = () => {
  //   projectsData.map((project) => {
  //     projectNames.push(project.name);
  //   });
  // };
  return (
    <div>
      {BufferData.map((item, index) => {
        return (
          <div key={index}>
            <div className="home-title">
              <h1>{firstName}</h1>
              {/* <h1 className="mx-5">{titleVal[1]}</h1> */}
            </div>

            <HomeIndex name={item.name} />
            {projectsData.map((project, index1) => {
              
              if (project.template == 1) {
                return (
                  <Fencher
                    key={index1}
                    image1={project.images[2]}
                    image2={project.images[2]}
                    name={project.name}
                    images={[...project.images]}
                    slug={"/".concat(project.slug)}
                    setCount = {props.setCount}
                  />
                );
              } else if (project.template == 2) {
                return (
                  <Auston
                    key={index1}
                    image1={project.images[0]}
                    image2={project.images[1]}
                    image3={project.images[2]}
                    slug={"/".concat(project.slug)}
                    name={project.name}
                    images={[...project.images]}
                  />
                );
              } else if (project.template == 3) {
                return (
                  <Amoeba
                    key={index1}
                    image1={project.images[0]}
                    image2={project.images[1]}
                    image3={project.images[2]}
                    slug={"/".concat(project.slug)}
                    name={project.name}
                    images={[...project.images]}
                  />
                );
              } else if (project.template == 4) {
                return (
                  <BeatsBy
                    key={index1}
                    image1={project.images[0]}
                    image2={project.images[1]}
                    slug={"/".concat(project.slug)}
                    name={project.name}
                    images={[...project.images]}
                  />
                );
              } else if (project.template == 5) {
                return (
                  <Brenna
                    key={index1}
                    image1={project.images[0]}
                    name={project.name}
                    slug={"/".concat(project.slug)}
                    images={[...project.images]}
                  />
                );
              } else if (project.template == 6) {
                return (
                  <BabyYorus
                    key={index1}
                    image1={project.images[0]}
                    image2={project.images[1]}
                    name={project.name}
                    slug={"/".concat(project.slug)}
                    images={[...project.images]}
                  />
                );
              } else if (project.template == 7) {
                return (
                  <Ballet
                    key={index1}
                    image1={project.images[0]}
                    image2={project.images[1]}
                    image3={project.images[2]}
                    slug={"/".concat(project.slug)}
                    images={[...project.images]}
                    name={project.name}
                  />
                );
              }
            })}
            {console.log(projectNames)}
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
