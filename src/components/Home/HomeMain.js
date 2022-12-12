import React, { useEffect, useMemo, useRef, useState } from "react";
import Fencher from "../Fencher/Fencher";
import HomeIndex from "./HomeIndex";
import "./Home.css";
import "./index.css";
import base_url from "../../constants/url";
import axios from "axios";
import { motion } from "framer-motion";
import ViewAll from "./ViewAll";
import ReactTextTransition, { presets } from "react-text-transition";
import { useNavigate } from "react-router-dom";
import Auston from "../Auston/Auston";
import Amoeba from "../Amoeba/Amoeba";
import Brenna from "../Brenna/Brenna";


function HomeMain(props) {
  const [projectsData, setProjectsData] = useState([]);
  const [randomIndex, setRandomIndex] = useState([]);
  const [changeClass, setChangeClass] = useState(false);
  const [slug, setSlug] = useState();


  const GrouRef = useRef([]);
  const navigate = useNavigate();
  const onScroll = (el) => {

    const styles = GrouRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect();
        return { group, rect };
      })
      .find((group) => group.rect.bottom >= window.innerHeight * 0.5);

    document.body.style.backgroundColor = `${styles.group.dataset.bgcolor}`;
    // document.getElementById("portfolio-title").classList.add("change-title");
    if (`${styles.group.dataset.title}` !== "View All Projects") {
      setValue(`${styles.group.dataset.title}`);
      setSlug(`${styles.group.dataset.slug}`);
    } else {
      setValue("");
      setSlug("");
    }

  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let x = 0; x < 4; x++) {
    randomIndex.push(randomNumberInRange(0, projectsData.length - 1));
  }

  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get(`${base_url}/project/`).then((response) => {
        console.log(response.data.data.sortedProjects);
        setProjectsData(response.data.data.sortedProjects);
      });
    };
    fetchProducts();
  }, []);

  const [value, setValue] = useState("David Ellis");

  const ViewAllClick = () => {
    if (changeClass) {
      props.indexBtn();
    }
  };

  const txtAnimation = {
    hidden: {
      y: 100
    },
    visible: {
      y: 0
    }
  }

  const handleSlug = () => {
    if (value === "View All Projects") {
      props.indexBtn();
    } else {
      navigate(slug);
    }
  }

  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [mediumCircle, setMediumCircle] = useState({ x: 0, y: 0 });

  const mousemove = (e) => {
    setLargeCircle({ x: (e.clientX / 30) * -1, y: (e.clientY / 30) * -1 });
    setMediumCircle({ x: (e.clientX / 80) * -1, y: (e.clientY / 80) * -1 });
  };
  useEffect(() => {
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <>
      <div className="container" style={{height: '100%'}}>
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
          <div className="home-title change-title">
            <h1 style={{ cursor: 'pointer' }} onClick={handleSlug} data-text="View All Projects" id="homeTitle"><ReactTextTransition springConfig={presets.gentle} className="indexitem-button"
            >
              {value}
            </ReactTextTransition></h1>
          </div>
          <div
            className="card-wrapper my-4"
            ref={(el) => (GrouRef.current[0] = el)}
            data-bgcolor="white"
            data-title="David Ellis"
            data-slug="/"
          >
            <HomeIndex
              randomIndex={randomIndex}
              projectsData={projectsData}
            />
          </div>
        </div>
        {projectsData.map((project, index) => {
          
         var e=parseInt(project.template);
          return(
            <>
            {e==1?
            <div
            className="" style={{ width: '100%', height: '100vh', position: 'relative' }}
            ref={(el) => (GrouRef.current[index + 1] = el)}
            data-bgcolor={project.color}
            data-title={project.name}
            data-slug={project.slug}
            key={index}
          >
            <Auston
              name={project.name}
              images={(index % 2 == 0) ? project.images.slice(0, 2) : project.images.slice(0, 3)}
              slug={"/".concat(project.slug)}
              setCount={props.setCount}
              nextProject={project[index + 1]}
              coords={largeCircle}
              slowCoords={mediumCircle}
            />
          </div>:e==2?
          <div
          className="col-md-12" style={{ width: '100%', height: '130vh', position: 'relative' }}
          ref={(el) => (GrouRef.current[index + 1] = el)}
          data-bgcolor={project.color}
          data-title={project.name}
          data-slug={project.slug}
          key={index}
        >
          <Amoeba
            name={project.name}
            images={(index % 2 == 0) ? project.images.slice(0, 2) : project.images.slice(0, 3)}
            slug={"/".concat(project.slug)}
            setCount={props.setCount}
            nextProject={project[index + 1]}
            coords={largeCircle}
            slowCoords={mediumCircle}
          />
        </div>:
       <div
       className="col-md-8" style={{ width: '100%', height: '180vh', position: 'relative' }}
       ref={(el) => (GrouRef.current[index + 1] = el)}
       data-bgcolor={project.color}
       data-title={project.name}
       data-slug={project.slug}
       key={index}
     >
       {<Brenna
         name={project.name}
         images={(index % 2 == 0) ? project.images.slice(0, 2) : project.images.slice(0, 3)}
         slug={"/".concat(project.slug)}
         setCount={props.setCount}
         nextProject={project[index + 1]}
         coords={largeCircle}
         slowCoords={mediumCircle}
       />}
     </div>
          }
            </>
          )

          // if (parseInt(project.template) == 1) {
            // return (
            // <div
            //   className="" style={{ width: '100%', height: '100vh', position: 'relative' }}
            //   ref={(el) => (GrouRef.current[index + 1] = el)}
            //   data-bgcolor={project.color}
            //   data-title={project.name}
            //   data-slug={project.slug}
            //   key={index}
            // >
            //   <Auston
            //     name={project.name}
            //     images={(index % 2 == 0) ? project.images.slice(0, 2) : project.images.slice(0, 3)}
            //     slug={"/".concat(project.slug)}
            //     setCount={props.setCount}
            //     nextProject={project[index + 1]}
            //     coords={largeCircle}
            //     slowCoords={mediumCircle}
            //   />
            // </div>
            // )
          // }
          // else if (parseInt(project.template) == 2) {
          //   return (
            // <div
            //   className="col-md-12" style={{ width: '100%', height: '100vh', position: 'relative' }}
            //   ref={(el) => (GrouRef.current[index + 1] = el)}
            //   data-bgcolor={project.color}
            //   data-title={project.name}
            //   data-slug={project.slug}
            //   key={index}
            // >
            //   <Amoeba
            //     name={project.name}
            //     images={(index % 2 == 0) ? project.images.slice(0, 2) : project.images.slice(0, 3)}
            //     slug={"/".concat(project.slug)}
            //     setCount={props.setCount}
            //     nextProject={project[index + 1]}
            //     coords={largeCircle}
            //     slowCoords={mediumCircle}
            //   />
            // </div>)
          // } else if (parseInt(project.template) == 3) {
            // return (<div
            //   className="col-md-8" style={{ width: '100%', height: '100vh', position: 'relative' }}
            //   ref={(el) => (GrouRef.current[index + 1] = el)}
            //   data-bgcolor={project.color}
            //   data-title={project.name}
            //   data-slug={project.slug}
            //   key={index}
            // >
            //   {<Brenna
            //     name={project.name}
            //     images={(index % 2 == 0) ? project.images.slice(0, 2) : project.images.slice(0, 3)}
            //     slug={"/".concat(project.slug)}
            //     setCount={props.setCount}
            //     nextProject={project[index + 1]}
            //     coords={largeCircle}
            //     slowCoords={mediumCircle}
            //   />}
            // </div>)
          // }
        })}
      </div>

      <div
        style={{
          paddingTop: "1px",
          height: "100vh",
          width: "100vw",
          overflowY: "hidden",
          cursor: 'pointer'
        }}
        ref={(el) => (GrouRef.current[projectsData.length + 1] = el)}
        data-bgcolor="white"
        data-title="View All Projects"
        onClick={props.indexBtn}
      >

        <ViewAll
          name="View All Projects"
          slug="viewAll"
          indexBtn={ViewAllClick}
        />
      </div>
    </>
  );
}

export default HomeMain;
