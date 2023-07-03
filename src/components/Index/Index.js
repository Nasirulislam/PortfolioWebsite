import React, { useEffect, useState } from "react";
import "./Index.css";
import axios from "axios";
import base_url from "../../constants/url";
import IndexItem from "./indeItem";
import { useLocation, useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export default function Index({ projectData, indexBackground, setOptions,  setprojChanged, setselProj }) {
  const [isAnimating, setIsAnitmating] = useState(false);
  const [id, setId] = useState(-1);
  const [redHome, setRedHome] = useState(false);
  const [images, setIndexImages] = useState([]);
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();
  const { path } = useLocation();

  const handleClick = (itemId) => {
    setIsAnitmating(!isAnimating);
    setId(id);
  };

  const SendHome = () => {
    if (redHome) {
      navigate("/");
    }
  };

  const handleOnIndexLeave = () => {
    setOptions(false);
  }

  useEffect(() => {
    setOptions(true);
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get(`${base_url}/project/`).then((response) => {
        setProjects(response.data.data.sortedProjects);
      });
    };
    const getHomeIndex = async () => {
      const response = await axios.get(base_url + "/project/home");
      if (response.status === 210) {
        setIndexImages(response.data.data.home[1]?.images || []);
        console.log(response.data.data.home[1]?.images)
      } else {
        console.log(response.message);
      }
    }
    if (typeof indexBackground === "undefined" || indexBackground.length === 0) {
      getHomeIndex();
    } else {
      setIndexImages(indexBackground);
    }

    if (typeof projectData === "undefined" || projectData.length === 0) {
      fetchProducts();
    } else {
      setProjects(projectData);
    }

  }, []);

  return (
    <div className="w-100 h-100" style={{position: 'fixed', maxHeight: '100vh', overflowY: 'hidden', top:"0", zIndex:"1000" }}>
      {
        images.length > 0 ?
          <div className="index-section-main-wrap" style={{
            background: `url(${images?.length > 0 ? `${base_url}/home/${images[0]}` : '../../Assets/images/background4.jpg'})`, backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', backgroundPosition: 'center'
          }}>
            <div className="index-section">
              <div className="index-innersection" style={{ overflowY: 'scroll' }}>
                {projects.map((item, index) => {
                  return (
                    <IndexItem
                      projects={projects}
                      currentProject={item}
                      nextProject={projects[index + 1]}
                      text={item.name}
                      color={typeof item.titleColor !== "undefined" ? item.titleColor : item.color}
                      image={item.imagesAndThumb}
                      // closeIndex={closeIndex}
                      setRedHome={setRedHome}
                      handleOnIndexLeave={handleOnIndexLeave}
                      key={index}
                      index={index}
                      
                      setprojChanged={ setprojChanged}
              setselProj={setselProj}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          : <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh' }}>
            <Spinner
              style={{
                width: "100px",
                height: "100px",
              }}
              animation="border"
            />
            <h1>Loading</h1>
          </div>
      }

    </div>
  );
}
