import axios from "axios";
import React, { useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Admin.css";
import base_url from "../../constants/url";
import { useState } from "react";
import { toast } from "react-toastify";

function EditProjectIndex(props) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [index, setIndex] = useState("");
  const [template, setTemplate] = useState("");
  const [Slug, setSlug] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [selectImg, setSelectImg] = useState(false);
  const [temp, setTemp] = useState([]);
  const [imgId, setImgId] = useState(null);
  const [projectId, setProjectId] = useState("");
  const [setting, setSetting] = useState(false);
  const [btnshow, setBtnShow] = useState(true);
  const [loading, setLoading] = useState(false);

  const moveForward = (e) => {
    e.preventDefault();
    for (var i = 0; i < projectsData.length; i++) {
      if (projectsData[i]._id === imgId) {
        temp.push(projectsData[i + 1]);
        projectsData[i + 1] = projectsData[i];
        projectsData[i] = temp[0];
        temp.pop();
        break;
      }
    }
    setting == true ? setSetting(false) : setSetting(true);
  };
  const moveBackward = (e) => {
    e.preventDefault();
    // console.log(selectedImages);
    for (var i = 1; i < projectsData.length; i++) {
      if (projectsData[i]._id === imgId) {
        temp.push(projectsData[i - 1]);
        projectsData[i - 1] = projectsData[i];
        projectsData[i] = temp[0];
        temp.pop();
        break;
      }
    }

    setting == true ? setSetting(false) : setSetting(true);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get(`${base_url}/project/`).then((response) => {
        setProjectsData(response.data.data.sortedProjects);
      });
    };
    fetchProducts();
  }, []);


  const updateProjectIndex = async (e) => {
    e.preventDefault();
    setLoading(true);
    let tempArr = [];
    tempArr = projectsData.map((item,index) => {
      return {
        id: item._id,
        index: index.toString()
      }
    })

    const payload = {
      projects: tempArr
    }

    const response = await axios.post(`${base_url}/project/updateProjectIndexes`, payload);
    if(response.status === 262) {
      toast("Indexes updated successfully");
      setProjectsData(response.data.data);
    } else {
      toast("unable to process request");      
    }

    setLoading(false);
  }

  return (
    <div className="d-flex align-items-center justify-content-center edit-images-section">
      <Card className="p-3 my-5 edit-form-card">
        <Form>
          <Form.Label className="mb-0">Select any Project</Form.Label>
          {/* <Form.Select
            aria-label="Default select example"
            className="mb-4 mt-2"
            onChange={(e) => handleSelectedProject(e.target.value)}
          >
            <option>Projects</option>
            {projectsData.map((project, index) => {
              return <option>{project.name}</option>;
            })}
          </Form.Select> */}

          <section className="edit-section">
            <button type="button12" className={"btn btn-primary " +(btnshow ? "edit-image-btn" : "invisible")} onClick={moveBackward}>
              Prev
            </button>
            <div className="edit-image-section">
              {projectsData &&
                projectsData.map((project, index) => {
                  return (
                    <div
                      key={index}
                      className="edit-image"
                      onClick={() => {
                        setImgId(project._id);
                      }}
                      style={{
                        outline: imgId === project._id
                          ? "5px solid green"
                          : "1px solid black",
                      }}
                    >
                      {project.imagesAndThumb[0]?.fileUrl.split("/")[0] == "data:image" || !project.imagesAndThumb[0]?.fileUrl.includes("mp4") ?
                        <img
                          src={project.imagesAndThumb[0]?.fileUrl}
                          width="150"
                          height="150"
                          alt="upload"
                        />
                        : <video autoPlay loop muted>
                          <source src={project.imagesAndThumb[0]?.fileUrl.split(":")[0] === "data" ? project.imagesAndThumb[0]?.fileUrl : project.imagesAndThumb[0]?.fileUrl} type="video/mp4" />
                          <source src={project.imagesAndThumb[0]?.fileUrl.split(":")[0] === "data" ? project.imagesAndThumb[0]?.fileUrl : project.imagesAndThumb[0]?.fileUrl} type="video/ogg" />
                        </video>
                      }
                      {/* <button onClick={() => deleteHandler(image)}>
                        delete image
                      </button> */}
                      <p>{project.name}</p>
                    </div>
                  );
                })}
            </div>
            <button
              type="button12"
              className={"btn btn-primary ms-2 " +(btnshow ? "edit-image-btn" : "invisible")}
              onClick={moveForward}
            >
              Next
            </button>
          </section>

          <Button
            variant="primary"
            type="submit01"
            className="button d-flex align-items-center"
            onClick={(e) => {
              updateProjectIndex(e);
            }}
            disabled={loading ? true : false}
          >
            <Spinner animation="border" variant="light" className={loading ? "me-2" : "d-none"} />
            {loading ? "Updating..." : "Update index"}
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default EditProjectIndex;
