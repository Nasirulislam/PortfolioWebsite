import "./App.css";
import Index from "./components/Index/Index";
import { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeMain from "./components/Home/HomeMain";
import Spinner from "react-bootstrap/Spinner";
import { useEffect } from "react";
import axios from "axios";
import base_url from "./constants/url";
import Template1 from "./components/pageTemplates/Template1";
import Admin from "./components/admin/Admin";
import NewLogin from "./components/admin/NewLogin";
import ScrollToTop from "./components/ScrollToTop";
import { useNavigate } from "react-router-dom";

import { ProjectContext } from "./services/ProjectContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import HomeIndex from "./components/admin/HomeIndex";
import VideoUpload from "./VideoUpload";
import { useLocation } from "react-router-dom";

function App() {
  const [projectsData, setProjectsData] = useState([]);
  const [IndexText, setIndexText] = useState("INDEX");
  const [aboutText, setAboutText] = useState("ABOUT");
  const [METext, setMEText] = useState("START");
  const [Text00, set00Text] = useState("CONTACT");
  const [clicked, setClicked] = useState(true);
  const [Redhome, setHome] = useState(false);
  const [dataFetc, setDataFetch] = useState(false);
  const [homeIndexImages, setHomeIndexImages] = useState([]);
  const [homeIndexCanvas, setHomeIndexCanvas] = useState(null);
  const [hom, setHom] = useState(null);
  const [originalX, setOriginalX] = useState("");
  const [originalY, setOriginalY] = useState("");
  const [landscapeHomeIndexImages, setLandscapeHomeIndexImages] = useState([]);
  const [indexBackground, setIndexImages] = useState([]);
  const [showAbout, setShowAbout] = useState(false);
  const [hideOptions, setOptions] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [fromAbout, setFromAbout] = useState(false);
  const [homeIndexId, setHomeIndexId] = useState(null);
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loc, setLoc] = useState();
  const location = useLocation();
  const { selectedProj, setSelectedProj, projChanged, setProjChanged } = useContext(ProjectContext);
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    setLoc(location.pathname);
    if (location.pathname === "/" && projChanged === true) {
      setLoading(true)
      setProjChanged(false);
      setTimeout(() => {
        const element = document.getElementById(selectedProj);
        // console.log(selectedProj)
        // console.log(element);
        if (element) {
          // element.scrollIntoView({ behavior: 'smooth' });
          element.scrollIntoView({ behavior: 'instant' });
        } else {
          window.scrollTo(0, 0);
          setLoading(false)
        }
        setTimeout(() => { setLoading(false) }, 500)
      }, 200);
    } else if (location.pathname === "/") {
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollPosition));
      }, 100);
    }
  }, [location]);

  const handleClick = () => {
    setScrollPosition(window.scrollY);
    navigate("/index");
  };

  function changeIndex(index) {
    if (index < 0) {
      index = "00";
    }
    if (parseInt(index) < 10 && index !== "00") {
      index = `0${index}`;
    }
    // set00Text(index);
  }

  const setRedHome = () => {
    setHome(true);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get(`${base_url}/project/`).then((response) => {
        setProjectsData(response.data.data.sortedProjects);
        setDataFetch(true);
      });
    };

    const getHomeIndex = async () => {
      const response = await axios.get(base_url + "/project/home");
      if (response.status === 210) {
        // console.log('main page', response.data.data.home[2])
        setHomeIndexImages(response.data.data.home[0]?.images || []);
        setIndexImages(response.data.data.home[1]?.images || []);
        setLandscapeHomeIndexImages(response.data.data.home[2]?.images || []);
        setHomeIndexCanvas(response.data.data.home[2]?.canvas || null);
        setOriginalX(response.data.data.home[2]?.originalX);
        setOriginalY(response.data.data.home[2]?.originalY);
        setHomeIndexId(response.data.data.home[2]?._id || null);
        setHom(response.data.data.home[2] || null);
      } else {
        // console.log(response.message);
      }
    };
    getHomeIndex();
    fetchProducts();
  }, []);

  const makeNull = () => {
    setIndexText("");
    setAboutText("");
    setMEText("");
    set00Text("");
  };

  const setValues = () => {
    setIndexText("INDEX");
    setAboutText("ABOUT");
    setMEText("START");
    set00Text("CONTACT");
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
    if (!showAbout) {
      setAboutText("CLOSE");
      setIndexText("");
      setMEText("");
      set00Text("");
    } else {
      setValues();
    }
    setIsShow(!isShow);
    setClicked(true);
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

  useEffect(() => { }, [hideOptions]);

  const handleEvent = () => {
    let uri = window.location.pathname;
    if (uri === "/") setMEText("START");
  };

  useEffect(() => {
    window.addEventListener("popstate", handleEvent);
    return () => window.removeEventListener("popstate", handleEvent);
  }, []);

  const handleClose = () => {
    setOptions(false);
    // window.history.scrollRestoration = "manual";
    window.history.go(-1);
  };

  const handleME = (e) => {
    e.preventDefault();
    if (METext === "START") {
      window.scrollTo(0, 0);
    }
    else {
      // console.log('=........................ location', location.pathname)
      // window.history.go(-1);
      navigate("/");
      setMEText("START");

    }
  };

  return (
    // 
    <div>
      {/* <ScrollToTop /> */}
      <div className="App" style={{ position: "relative" }}>
        {path !== "/admin" && path !== "/admin-login" ? (
          <>
            <div className="main-button">
              <h3 className="index-button">
                {!isShow ? (
                  !hideOptions ? (
                    // <Link id="style-2" to="/index">
                    <a id="style-2" onClick={handleClick}>
                      <span>INDEX</span>
                    </a>
                  ) : (
                    //  </Link>

                    <a
                      id=""
                      onClick={handleClose}
                      style={{ textDecoration: "none" }}
                    >
                      <span>CLOSE</span>
                    </a>
                  )
                ) : (
                  <></>
                )}
              </h3>
            </div>

            {!hideOptions && (
              <div className="main-button">
                <h3
                  onClick={() => {
                    setShowAbout(!showAbout);
                    setFromAbout(true);
                    AboutToogle();
                  }}
                  className="about-button"
                >
                  <Link to="/" id="style-2" data-replace={aboutText}>
                    <span>{aboutText}</span>
                  </Link>
                </h3>
              </div>
            )}
            {!hideOptions && (
              <div className="main-button">
                <h3 onClick={METoogle} className="ME-button">
                  <Link
                    onClick={handleME}
                    to="/"
                    id="style-2"
                    data-replace={METext}
                  >
                    <span>{METext}</span>
                  </Link>
                </h3>
              </div>
            )}
            {!hideOptions && (
              <div className="main-button">
                <h3
                  className="null-button"
                  onClick={() => {
                    setShowAbout(!showAbout);
                    setFromAbout(false);
                    AboutToogle();
                  }}
                >
                  <Link to="/" id="style-2">
                    <span>{Text00}</span>
                  </Link>
                </h3>
              </div>
            )}
          </>
        ) : null}

        {dataFetc ? (
          // <div style={{ display: (loc === "/" || loc === "/index") ? "block" : "none" }}>
          <div style={{ display: (loc === "/" && !showAbout) ? "block" : "none" }}>
            <HomeMain
              projectsData={projectsData}
              onChange={changeIndex}
              indexBtn={buttonToogle}
              homeIndexImages={homeIndexImages}
              landscapeHomeIndexImages={landscapeHomeIndexImages}
              indexBackground={indexBackground}
              homeIndexCanvas={homeIndexCanvas}
              hom={hom}
              originalX={originalX}
              originalY={originalY}
              loading={loading}
            />
          </div>
        ) : (
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ height: "100vh" }}
          >
            <Spinner
              style={{
                width: "100px",
                height: "100px",
              }}
              animation="border"
            />
            <h1>Loading</h1>
          </div>
        )}

        {clicked ? (
          <div className={showAbout ? "d-none" : ""} >
            {/* <Template1 /> */}
            <Routes>
              {/* <Route
                exact
                path="/"
                element={
                  dataFetc ? (
                    <HomeMain
                      projectsData={projectsData}
                      onChange={changeIndex}
                      indexBtn={buttonToogle}
                      homeIndexImages={homeIndexImages}
                      landscapeHomeIndexImages={landscapeHomeIndexImages}
                      indexBackground={indexBackground}
                      homeIndexCanvas={homeIndexCanvas}
                      hom={hom}
                      originalX={originalX}
                      originalY={originalY}
                    />
                  ) : (
                    <div
                      className="d-flex justify-content-center align-items-center flex-column"
                      style={{ height: "100vh" }}
                    >
                      <Spinner
                        style={{
                          width: "100px",
                          height: "100px",
                        }}
                        animation="border"
                      />
                      <h1>Loading</h1>
                    </div>
                  )
                }
              /> */}
              {projectsData.map((project, pindex) => {
                return (
                  <Route
                    key={pindex}
                    exact
                    path={"/".concat(project.slug)}
                    element={
                      <Template1
                        projectData={projectsData}
                        index={pindex}
                        setMEText={setMEText}
                      />
                    }
                  />
                );
              })}
              <Route
                exact
                path="/index"
                element={
                  <Index
                    projectData={projectsData}
                    indexBackground={indexBackground}
                    setOptions={setOptions}
                  />
                }
              />
              <Route exact path="/admin" element={<NewLogin />} />
              <Route
                exact
                path="/admin/home-index"
                element={
                  <HomeIndex
                    homeIndexCanvas={homeIndexCanvas}
                    hom={hom}
                    homeIndexId={homeIndexId}
                  />
                }
              />
              <Route
                exact
                path="/admin-login"
                element={
                  JSON.parse(localStorage.getItem("Status")) === "ok" ? (
                    <Admin projectData={projectsData} />
                  ) : (
                    <NewLogin />
                  )
                }
              />
              <Route exact path="/video" element={<VideoUpload />} />
            </Routes>
          </div>
        ) : (
          <></>
        )}
        <About
          showAbout={showAbout}
          changeAboutStatus={AboutToogle}
          setShowAbout={setShowAbout}
          fromAbout={fromAbout}
        />
      </div>
    </div>
  );
}

export default App;
