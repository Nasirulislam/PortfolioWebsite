import React, { useEffect, useMemo, useRef, useState } from "react";
import Fencher from "../Fencher/Fencher";
import HomeIndex from "./HomeIndex";
import "./Home.css";
import "./index.css";
import base_url from "../../constants/url";
import axios from "axios";
import { motion } from "framer-motion";
import ViewAll from "./ViewAll";
import AnimatedText from "../AnimatedText";


function HomeMain(props) {
  const [projectsData, setProjectsData] = useState([]);
  const [randomIndex, setRandomIndex] = useState([]);
  const [changeClass, setChangeClass] = useState(false);

  const GrouRef = useRef([]);
  const onScroll = (el) => {

    const styles = GrouRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect();
        return { group, rect };
      })
      .find((group) => group.rect.bottom >= window.innerHeight * 0.5);

    document.body.style.backgroundColor = `${styles.group.dataset.bgcolor}`;
    document.getElementById("portfolio-title").innerText = `${styles.group.dataset.title}`;
    // setValue(`${styles.group.dataset.title}`);
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

  const [value, setValue] = useState("");

  function handleChange(newValue) {
    setValue(newValue.name);
    if (newValue.name === "View All Projects") {
      setChangeClass(true);
    } else {
      setChangeClass(false);
    }
    let index = projectsData.findIndex(
      (item) => `/${item.slug}` == newValue.slug
    );
    props.onChange(index);
  }

  const ViewAllClick = () => {
    if (changeClass) {
      props.indexBtn();
    }
  };

  return (
    <>

      <motion.div className="home-title">
        <motion.h1 className="indexitem-button" id="portfolio-title"><AnimatedText {...{ type: "heading", text: value }} /></motion.h1>
      </motion.div>
      <div
        className="card-wrapper mb-4"
        ref={(el) => (GrouRef.current[0] = el)}
        data-bgcolor="white"
        data-title="David Ellis"
      >
        <HomeIndex
          randomIndex={randomIndex}
          projectsData={projectsData}
          onChange={handleChange}
        />
      </div>

      {/* <ScrollContainer> */}
      {projectsData.map((project, index) => {

        return (<div
          className="card-wrapper my-4 py-4"
          ref={(el) => (GrouRef.current[index + 1] = el)}
          data-bgcolor={project.color}
          data-title={project.name}
          key={index}
        >
          <Fencher
            name={project.name}
            images={(index%2==0) ? project.images.slice(0,2) : project.images.slice(0,3)}
            slug={"/".concat(project.slug)}
            setCount={props.setCount}
            nextProject={project[index + 1]}
            onChange={handleChange}
          />
          {/* <ScrollPage> */}
          {/* {parseInt(project.template) === 1 ? (
            <Fencher
              name={project.name}
              images={project.images}
              slug={"/".concat(project.slug)}
              setCount={props.setCount}
              nextProject={project[index + 1]}
              onChange={handleChange}
            />
          ) :
            parseInt(project.template) === 2 ? (
              <Auston
                slug={"/".concat(project.slug)}
                name={project.name}
                images={project.images}
                nextProject={project[index + 1]}
                onChange={handleChange}
              />
            ) :
              parseInt(project.template) === 3 ? (
                <Amoeba
                  slug={"/".concat(project.slug)}
                  name={project.name}
                  images={project.images}
                  nextProject={project[index + 1]}
                  onChange={handleChange}
                />
              ) :
                <Ballet
                  slug={"/".concat(project.slug)}
                  name={project.name}
                  images={project.images}
                  nextProject={project[index + 1]}
                  onChange={handleChange}
                />
          } */}
          {/* </ScrollPage> */}
        </div>)
      })}


      <div
        style={{
          paddingTop: "1px",
          height: "100vh",
          width: "100vw",
          overflowY: "hidden"
        }}
        ref={(el) => (GrouRef.current[projectsData.length + 1] = el)}
        data-bgcolor="white"
        data-title="View All Projects"
      >
        <ViewAll
          name="View All Projects"
          slug="viewAll"
          onChange={handleChange}
          indexBtn={props.indexBtn}
        />
      </div>
    </>
  );
}

export default HomeMain;
