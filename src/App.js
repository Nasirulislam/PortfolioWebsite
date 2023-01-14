import "./App.css";
import Index from "./components/Index/Index";
import { useState } from "react";
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

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import About from "./components/About";

function App() {
  const [projectsData, setProjectsData] = useState([]);
  const [IndexText, setIndexText] = useState("INDEX");
  const [aboutText, setAboutText] = useState("ABOUT");
  const [METext, setMEText] = useState("START");
  const [Text00, set00Text] = useState("00");
  const [clicked, setClicked] = useState(true);
  const [Redhome, setHome] = useState(false);
  const [dataFetc, setDataFetch] = useState(false);
  const [homeIndexImages, setHomeIndexImages] = useState([]);
  const [indexBackground, setIndexImages] = useState([]);
  const [showAbout, setShowAbout] = useState(false);
  const [hideOptions, setOptions] = useState(false);


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
        setDataFetch(true);
      });
    };
    const getHomeIndex = async () => {
      const response = await axios.get(base_url + "/project/home");
      if (response.status === 210) {
        setHomeIndexImages(response.data.data.home[0]?.images || []);
        setIndexImages(response.data.data.home[1]?.images || []);

      } else {
        console.log(response.message);
      }
    }
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
    if (!showAbout) {
      setAboutText("CLOSE");
      setIndexText("");
      setMEText("");
      set00Text("");
    } else {
      setValues();
    }
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

  useEffect(() => {
    console.log(hideOptions)
  },[hideOptions])

  const handleClose = () => {
    setOptions(false);
    window.history.go(-1)
  }

  return (
    <div>
      <Router>
        <ScrollToTop />
        <div className="App">
          {path !== "/admin" && path !== "/admin-login" ? (
            <>
              <div className="main-button">
                <h3 className="index-button">
                  {
                    !hideOptions ?
                      <Link id="style-2" to="/index">
                        <span>INDEX</span>
                      </Link>
                      :
                      <a id="" onClick={handleClose}>
                        <span>CLOSE</span>
                      </a>
                  }
                </h3>
              </div>

              {
                !hideOptions && (
                  <div className="main-button">
                    <h3 onClick={() => {
                      setShowAbout(!showAbout)
                      AboutToogle()
                    }} className="about-button">
                      <a id="style-2" data-replace={aboutText}>
                        <span>{aboutText}</span>
                      </a>
                    </h3>
                  </div>
                )}
              {
                !hideOptions && (
                  <div className="main-button">
                    <h3 onClick={METoogle} className="ME-button">
                      <Link to="/" id="style-2" data-replace={METext}>
                        <span>{METext}</span>
                      </Link>
                    </h3>
                  </div>
                )
              }
              {
                !hideOptions && (
                  <div className="main-button">
                    <h3  className="null-button">
                      <a id="style-2" data-replace={Text00}>
                        <span>{Text00}</span>
                      </a>
                    </h3>
                  </div>
                )}
            </>
          ) : null}

          {clicked ? (
            <div className={showAbout ? "d-none" : ""}>
              {/* <Template1/> */}
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    dataFetc ? (
                      <HomeMain
                        projectsData={projectsData}
                        onChange={changeIndex}
                        indexBtn={buttonToogle}
                        homeIndexImages={homeIndexImages}
                      />
                    ) : (
                      <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh' }}>
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
                />
                {projectsData.map((project, pindex) => {
                  return (
                    <Route
                      key={pindex}
                      exact
                      path={"/".concat(project.slug)}
                      element={
                        <Template1 projectData={projectsData} index={pindex} />
                      }
                    />
                  );
                })}
                <Route exact path="/index" element={<Index
                  projectData={projectsData}
                  indexBackground={indexBackground}
                  setOptions={setOptions}
                />}
                />
                <Route exact path="/admin" element={<NewLogin />} />
                <Route
                  exact
                  path="/admin-login"
                  element={
                    JSON.parse(localStorage.getItem("Status")) === "ok" ? (
                      <Admin />
                    ) : (
                      <NewLogin />
                    )
                  }
                />
              </Routes>
            </div>
          ) :
            (
              // <Index
              //   projectData={projectsData}
              //   closeIndex={buttonToogle}
              //   RedHome={setRedHome}
              //   indexBackground={indexBackground}
              //   showAbout={showAbout}
              //   clicked={clicked}
              // />
              <></>
            )}
          <About portfolios={projectsData} showAbout={showAbout} changeAboutStatus={AboutToogle} setShowAbout={setShowAbout} />
        </div>
      </Router>
    </div>
  );
}

export default App;
