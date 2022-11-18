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
import base_url from "../../constants/url";
import axios from "axios";
import ViewAll from "./ViewAll";

function HomeMain(props) {
  const [projectsData, setProjectsData] = useState([]);

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
    let index = projectsData.findIndex(
      (item) => `/${item.slug}` == newValue.slug
    );
    props.onChange(index);
  }

  return (
    <div>
      <div>
        <div className="home-title">
          <h1>{projectsData.length > 0 && value === "" ? "David Ellis" : value}</h1>
        </div>
        <HomeIndex projectsData={projectsData} onChange={handleChange} />
        {projectsData.map((project, index1) => {
          let nextIndex = 0;
          if (index1 < projectsData.length - 2) {
            nextIndex = index1 + 1;
          }
          if (index1 < 14) {
            if (project.template == 1) {
              return (
                <Fencher
                  key={index1}
                  image1={project.images[2]}
                  image2={project.images[2]}
                  name={project.name}
                  images={[...project.images]}
                  slug={"/".concat(project.slug)}
                  setCount={props.setCount}
                  nextProject={projectsData[nextIndex]}
                  onChange={handleChange}
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
                  nextProject={projectsData[nextIndex]}
                  onChange={handleChange}
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
                  nextProject={projectsData[nextIndex]}
                  onChange={handleChange}
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
                  nextProject={projectsData[nextIndex]}
                  onChange={handleChange}
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
                  nextProject={projectsData[nextIndex]}
                  onChange={handleChange}
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
                  nextProject={projectsData[nextIndex]}
                  onChange={handleChange}
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
                  nextProject={projectsData[nextIndex]}
                  onChange={handleChange}
                />
              );
            }
          }
        })}
      </div>
      <ViewAll
        name="View All Projects"
        slug="viewAll"
        onChange={handleChange}
      />
      ;
    </div>
  );
}

export default HomeMain;
