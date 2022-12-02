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
  return (
    <ScrollContainer>
      {/* <div
        className={changeClass ? "viewall" : "home-title"}
        onClick={() => ViewAllClick()}
      >
        <h1 data-text={value}>
          {projectsData.length > 0 && value === "" ? "David Ellis" : value}
        </h1>
      </div> */}
      <ScrollPage>
        <Animator
           animation={batch(
            Sticky(),
            MoveOut(0, -200),
            ZoomIn(),
            Fade()
          )}
        >
          <div
            ref={(el) => (GrouRef.current[0] = el)}
            style={{ height: "100vh", width: "100vw", background: "white" }}
            data-bgcolor={"white"}
          >
            <HomeIndex
              randomIndex={randomIndex}
              projectsData={projectsData}
              onChange={handleChange}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator
          animation={batch(
            Sticky(),
            MoveOut(0, -200),
            ZoomIn(),
            Fade()
          )}
        >
          <div
            ref={(el) => (GrouRef.current[0] = el)}
            style={{ height: "100vh", width: "100vw" }}
            data-bgcolor={projectsData[0]?.color}
          >
            <Fencher
              image1={projectsData[0]?.images[0]}
              image2={projectsData[0]?.images[1]}
              name={projectsData[0]?.name}
              images={projectsData[0]?.images}
              slug={"/".concat(projectsData[0]?.slug)}
              setCount={props.setCount}
              nextProject={projectsData[1]}
              onChange={handleChange}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator
          animation={batch(
            Sticky(),
            MoveOut(0, -200),
            ZoomIn(),
            Fade()
          )}
        >
          <div
            ref={(el) => (GrouRef.current[1] = el)}
            style={{ height: "100vh", width: "100vw" }}
            data-bgcolor={projectsData[1]?.color}
          >
            <Auston
              image1={projectsData[1]?.images[0]}
              image2={projectsData[1]?.images[1]}
              image3={projectsData[1]?.images[2]}
              slug={"/".concat(projectsData[1]?.slug)}
              name={projectsData[1]?.name}
              images={projectsData[1]?.images}
              nextProject={projectsData[2]}
              onChange={handleChange}
            />
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <Animator
          animation={batch(
            Sticky(),
            MoveOut(0, -200),
            ZoomIn(),
            Fade()
          )}
        >
          <div
            ref={(el) => (GrouRef.current[2] = el)}
            style={{ height: "100vh", width: "100vw" }}
            data-bgcolor={projectsData[2]?.color}
          >
            <Amoeba
              image1={projectsData[2]?.images[0]}
              image2={projectsData[2]?.images[1]}
              image3={projectsData[2]?.images[2]}
              slug={"/".concat(projectsData[2]?.slug)}
              name={projectsData[2]?.name}
              images={projectsData[2]?.images}
              nextProject={projectsData[3]}
              onChange={handleChange}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator
          animation={batch(
            Sticky(),

            MoveOut(0, -200),
            ZoomIn(),
            Fade()
          )}
        >
          <div
            ref={(el) => (GrouRef.current[3] = el)}
            style={{ height: "100vh", width: "100vw" }}
            data-bgcolor={projectsData[3]?.color}
          >
            <Fencher
              image1={projectsData[3]?.images[2]}
              image2={projectsData[3]?.images[2]}
              name={projectsData[3]?.name}
              images={projectsData[3]?.images}
              slug={"/".concat(projectsData[3]?.slug)}
              setCount={props.setCount}
              nextProject={projectsData[4]}
              onChange={handleChange}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator
          animation={batch(
            Sticky(),

            MoveOut(0, -200),
            ZoomIn(),
            Fade()
          )}
        >
          <div
            ref={(el) => (GrouRef.current[4] = el)}
            style={{ height: "100vh", width: "100vw" }}
            data-bgcolor={projectsData[4]?.color}
          >
            <Ballet
              image1={projectsData[2]?.images[0]}
              image2={projectsData[2]?.images[1]}
              image3={projectsData[2]?.images[2]}
              slug={"/".concat(projectsData[2]?.slug)}
              name={projectsData[2]?.name}
              images={projectsData[2]?.images}
              nextProject={projectsData[3]}
              onChange={handleChange}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator
          animation={batch(Sticky(), MoveOut(0, -200), ZoomIn(), Fade())}
        >
          <div
            // ref={(el) => (GrouRef.current[5] = el)}
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
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default HomeMain;
