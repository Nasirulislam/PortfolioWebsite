import logo from "./logo.svg";
import "./App.css";
import HomeIndex from "./components/Home/HomeIndex";
import BottomSlider from "./components/Home/BottomSlider";
import Index from "./components/Index/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeMain from "./components/Home/HomeMain";
import Scroller from "./components/Home/Scroller";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import FencerMain from "./components/Fencher/FencerMain";
import Fencher from "./components/Fencher/Fencher";
import BufferData from "./components/Buffer";
import { useEffect } from "react";
import axios from "axios";
import template1 from "./components/pageTemplates/Template1";
import base_url from "./constants/url";
import Template1 from "./components/pageTemplates/Template1";
import Template2 from "./components/pageTemplates/Template2";
import Admin from "./components/admin/Admin";
import Login from "./components/admin/Login";
function AppIndex() {
  const [projectsData, setProjectsData] = useState([]);
  const [IndexText, setIndexText] = useState("INDEX");
  const [aboutText, setAboutText] = useState("ABOUT");
  const [METext, setMEText] = useState("M-E");
  const [Text00, set00Text] = useState("00");
  const [clicked, setClicked] = useState(true);
  const [Redhome, setHome] = useState(false);

  function changeIndex(index) {
    if (index < 0) {
      index = "00";
    }
    if (parseInt(index) < 10 && index !== "00") {
      index = `0${index}`;
    }
    set00Text(index);
  }
  const setRedHome = () => {
    setHome(true);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get(`${base_url}/project/`).then((response) => {
        setProjectsData(response.data.data.sortedProjects);
      });
    };
    fetchProducts();
  }, []);
  const setValues = () => {
    setIndexText("INDEX");
    setAboutText("ABOUT");
    setMEText("M-E");
    set00Text("00");
  };
  const buttonToogle = () => {
    if (clicked) {
      setIndexText("CLOSE");
      setAboutText("");
      setMEText("");
      set00Text("");
    } else {
      setValues();
    }
    setClicked(!clicked);
    if (Redhome) {
      window.location.href = "/";
    }
  };
  const AboutToogle = () => {
    if (clicked) {
      setAboutText("CLOSE");
      setIndexText("");
      setMEText("");
      set00Text("");
    } else {
      setValues();
    }
    setClicked(!clicked);
  };
  const METoogle = () => {
    if (clicked) {
      // navigate("/");
    } else {
      setValues();
    }
  };
  const NullToogle = () => {
    if (clicked) {
      set00Text("CLOSE");
      setIndexText("");
      setAboutText("");
      setMEText("");
    } else {
      setValues();
    }
    setClicked(!clicked);
  };
  const path = window.location.pathname;
  const returnIndex = (index) => {
    if (index > projectsData.length - 1) {
      return index + 1;
    }
    return index;
  };

  return (
    <div>
      <div className="AppIndex">
        {path !== "/admin" && path !== "/admin-login" ? (
          <>
            <div className="main-button">
              <h3 onClick={buttonToogle} className="index-button">
                <a id="style-2" data-replace={IndexText}>
                  <span>{IndexText}</span>
                </a>
              </h3>
            </div>

            <div className="main-button">
              <h3 onClick={AboutToogle} className="about-button">
                <a id="style-2" data-replace={aboutText}>
                  <span>{aboutText}</span>
                </a>
              </h3>
            </div>
            <div className="main-button">
              <h3 onClick={METoogle} className="ME-button">
                <a href="/" id="style-2" data-replace={METext}>
                  <span>{METext}</span>
                </a>
              </h3>
            </div>
            <div className="main-button">
              <h3 onClick={NullToogle} className="null-button">
                <a id="style-2" data-replace={Text00}>
                  <span>{Text00}</span>
                </a>
              </h3>
            </div>
          </>
        ) : null}

        {clicked ? (
          <div>
            {/* <Template1/> */}
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <HomeMain
                    projectsData={projectsData}
                    onChange={changeIndex}
                    indexBtn={buttonToogle}
                  />
                }
              />
              {projectsData.map((project, pindex) => {
                // console.log(project.slug);
                return (
                  <Route
                    key={pindex}
                    exact
                    path={"/".concat(project.slug)}
                    element={
                      <Template1
                        projectData={projectsData}
                        index={pindex}
                        // nextProject={
                        //   pindex < projectsData.length - 1
                        //     ? projectsData[pindex + 1]
                        //     : projectsData[pindex]
                        // }
                      />
                    }
                  />
                );
              })}
              <Route exact path="/admin" element={<Login />} />
              <Route exact path="/testing" element={<Scroller />} />
              <Route
                exact
                path="/admin-login"
                element={
                  JSON.parse(localStorage.getItem("Status")) === "ok" ? (
                    <Admin />
                  ) : (
                    <Login />
                  )
                }
              />
            </Routes>
          </div>
        ) : (
          <Index
            projectData={projectsData}
            closeIndex={buttonToogle}
            RedHome={setRedHome}
          />
        )}
      </div>
    </div>
  );
}

export default AppIndex;
