import React, { useEffect, useRef, useState, useContext } from "react";
import HomeIndex from "./HomeIndex";
import "./Home.css";
import "./index.css";
import base_url from "../../constants/url";
import axios from "axios";
import ViewAll from "./ViewAll";
import ReactTextTransition, { presets } from "react-text-transition";
import { useNavigate } from "react-router-dom";
import Auston from "../Auston/Auston";
import Amoeba from "../Amoeba/Amoeba";
import Brenna from "../Brenna/Brenna";
import { ProjectContext } from "../../services/ProjectContext";

function HomeMain(props) {
  const [projectsData, setProjectsData] = useState([]);
  const [displayProjects, setProjectToDisplay] = useState([]);
  const [randomIndex, setRandomIndex] = useState([]);
  // const [changeClass, setChangeClass] = useState(false);
  const { selectedProj, setSelectedProj, projChanged, setProjChanged } = useContext(ProjectContext);
  const [slug, setSlug] = useState();
  const [name, setName] = useState();

  const GrouRef = useRef([]);
  const navigate = useNavigate();
  const onScroll = (el) => {
    // const styles = GrouRef.current
    //   .map((group, i) => {
    //     const rect = group.getBoundingClientRect();
    //     return { group, rect };
    //   })
    //   .find((group) => group.rect.bottom >= window.innerHeight * 0.5);

    const styles = GrouRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect();
        return { group, rect, key: i };
      })
      .find((group) => group.rect.bottom >= window.innerHeight * 0.5);

    document.body.style.backgroundColor = `${styles.group?.dataset?.bgcolor}`;

    if (`${styles.group.dataset.title}` !== "View All Projects") {
      setValue(`${styles.group.dataset.title}`);
      setSlug(`${styles.group.dataset.slug}`);
      setName(`${styles.group.dataset.title}`);
      props.onChange(`${styles.group.dataset.index}`);
    } else {
      setValue("");
      setSlug("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
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
        setProjectsData(response.data.data.sortedProjects);

        if (response.data.data.sortedProjects.length > 20) {
          setProjectToDisplay(response.data.data.sortedProjects.slice(0, 20));
        } else {
          setProjectToDisplay(response.data.data.sortedProjects);
        }
      });
    };
    fetchProducts();
  }, []);

  const [value, setValue] = useState("David Ellis");

  const handleSlug = (recName) => {
    if (value === "View All Projects") {
      props.indexBtn();
    } else {
      // console.log("recieved name", name)
      setSelectedProj(name)
      setProjChanged(true)
      navigate("/" + slug);
    }
  };

  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [mediumCircle, setMediumCircle] = useState({ x: 0, y: 0 });

  const mousemove = (e) => {
    setLargeCircle({ x: (e.clientX / 20) * -1, y: (e.clientY / 20) * -1 });
    setMediumCircle({ x: (e.clientX / 80) * -1, y: (e.clientY / 80) * -1 });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  const animateTxt = {
    hidden: {
      y: 200,
    },
    visible: {
      y: 0,
    },
  };

  return (
    <>
      {props.loading &&
        <div class='load'>
          <div class="loader"></div>
        </div>
      }

      <div className="" style={{ height: "100%" }}>
        <div
          style={{ position: "relative", width: "100%", height: "100%" }}
          id="homeIndex"
        >
          {value.toLowerCase() !== "david ellis" && (
            <div
              className="home-title change-title my--home--text"
              initial={"hidden"}
              animate={"visible"}
              variants={animateTxt}
              transition={{ y: 200, duration: 4 }}
            // style={{ width: '385px' }}
            >
              <h1 style={{ cursor: "pointer" }} onClick={() => handleSlug()} >
                <ReactTextTransition
                  springConfig={presets.gentle}
                  className="indexitem-button"
                >
                  {value}
                </ReactTextTransition>
              </h1>
            </div>
          )}
          <div
            className="card-wrapper mb-4"
            ref={(el) => (GrouRef.current[0] = el)}
            // data-bgcolor="white"
            data-title="David Ellis"
            data-slug="/"
            data-index="00"
            style={{ height: "100%", position: "relative" }}
          >
            <HomeIndex
              homeIndexCanvas={props.homeIndexCanvas}
              randomIndex={randomIndex}
              projectsData={projectsData}
              value={value}
              homeIndexImages={props.homeIndexImages}
              landscapeHomeIndexImages={props.landscapeHomeIndexImages}
              originalX={props.originalX}
              originalY={props.originalY}
              hom={props.hom}
            />
          </div>
        </div>
        {displayProjects.map((project, index) => {
          var e = parseInt(project.template);
          return (
            <div id={project.name} key={index}>
              {e === 1 ? (
                <div
                  className="mobile-view mt-5"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    marginBottom: "10rem",
                  }}
                  ref={(el) => (GrouRef.current[index + 1] = el)}
                  data-bgcolor={project.color}
                  data-title={project.name}
                  data-slug={project.slug}
                  key={index}
                  data-index={index}
                >
                  <Auston
                    name={project.name}
                    images={project.imagesAndThumb}
                    slug={"/".concat(project.slug)}
                    setCount={props.setCount}
                    nextProject={project[index + 1]}
                    coords={largeCircle}
                    slowCoords={mediumCircle}
                    handleSlug={handleSlug}
                  />
                </div>
              ) : e === 2 ? (
                <div
                  className="col-md-12 mobile-view"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    marginBottom: "10rem",
                  }}
                  ref={(el) => (GrouRef.current[index + 1] = el)}
                  data-bgcolor={project.color}
                  data-title={project.name}
                  data-slug={project.slug}
                  key={index}
                  data-index={index}
                >
                  <Amoeba
                    name={project.name}
                    images={project.imagesAndThumb}
                    slug={"/".concat(project.slug)}
                    setCount={props.setCount}
                    nextProject={project[index + 1]}
                    coords={largeCircle}
                    slowCoords={mediumCircle}
                    handleSlug={handleSlug}
                  />
                </div>
              ) : (
                <div
                  className="col-md-8 mobile-view"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    marginBottom: "10rem",
                  }}
                  ref={(el) => (GrouRef.current[index + 1] = el)}
                  data-bgcolor={project.color}
                  data-title={project.name}
                  data-slug={project.slug}
                  key={index}
                  data-index={index}
                >
                  <Brenna
                    name={project.name}
                    images={project.imagesAndThumb.slice(0, 3)}
                    slug={"/".concat(project.slug)}
                    setCount={props.setCount}
                    nextProject={project[index + 1]}
                    coords={largeCircle}
                    slowCoords={mediumCircle}
                    handleSlug={handleSlug}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div
        style={{
          paddingTop: "1px",
          height: "100vh",
          width: "100vw",
          overflowY: "hidden",
          cursor: "pointer",
        }}
        ref={(el) => (GrouRef.current[displayProjects.length + 1] = el)}
        data-bgcolor="white"
        data-title="View All Projects"
        // onClick={props.indexBtn}
        data-index={displayProjects.length}
      >
        <ViewAll
          name="View All Projects"
          slug="viewAll"
          // indexBtn={ViewAllClick}
          projectData={projectsData}
          indexBackground={props.indexBackground}
        />
      </div>
    </>
  );
}

export default HomeMain;
