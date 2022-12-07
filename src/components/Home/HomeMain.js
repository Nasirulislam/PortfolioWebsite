import React, { useEffect, useMemo, useRef, useState } from "react";
import Amoeba from "../Amoeba/Amoeba";
import Auston from "../Auston/Auston";
import Fencher from "../Fencher/Fencher";
import HomeIndex from "./HomeIndex";
import Ballet from "../Ballet/Ballet";
import BeatsBy from "../BeatsBy/Beatsby";
import Brenna from "../Brenna/Brenna";
import BabyYorus from "../BabyYorus/BabyYorus";
import BufferData from "../Buffer";
import "./Home.css";
import "./index.css";
import base_url from "../../constants/url";
import axios from "axios";
import { motion } from "framer-motion";
import ViewAll from "./ViewAll";
import {
  Animator,
  batch,
  Fade,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  ZoomIn,
} from "react-scroll-motion";

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

  const portfolioAnimation = {
    hidden: {
      opacity: 0,
      y: 100
    },
    visible: {
      y: 0,
      opacity: 1
    }
  };


  return (
    <>
      <motion.div
        className="card-wrapper mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={(el) => (GrouRef.current[0] = el)}
        data-bgcolor="white"
      >
        <HomeIndex
          randomIndex={randomIndex}
          projectsData={projectsData}
          onChange={handleChange}
        />
      </motion.div>
      {/* <ScrollContainer> */}
      {projectsData.map((project, index) => {

        return (<motion.div
          className="card-wrapper my-4"
          variants={portfolioAnimation}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ type: "spring", duration: 2 }}
          ref={(el) => (GrouRef.current[1] = el)}
          data-bgcolor={project.color}
        >
          {/* <ScrollPage> */}
          {parseInt(project.template) === 1 ? (
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
          }
          {/* </ScrollPage> */}
        </motion.div>)
      })}


      <div
        style={{
          paddingTop: "1px",
          height: "100vh",
          width: "100vw",
          background: "white",
        }}
        data-bgcolor={"white"}
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
