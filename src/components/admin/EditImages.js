import axios from "axios";
import React, { useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Admin.css";
import base_url from "../../constants/url";
import { useState } from "react";
import { toast } from "react-toastify";

function EditImages(props) {
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
  const [btnshow, setBtnShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const moveForward = (e) => {
    e.preventDefault();
    for (var i = 0; i < selectedImages.length; i++) {
      if (selectedImages[i] === imgId && selectedImages.length - 1 !== i) {
        temp.push(selectedImages[i + 1]);
        selectedImages[i + 1] = selectedImages[i];
        selectedImages[i] = temp[0];
        temp.pop();
        break;
      }
    }
    setting == true ? setSetting(false) : setSetting(true);
  };
  const moveBackward = (e) => {
    e.preventDefault();
    for (var i = 1; i < selectedImages.length; i++) {
      if (selectedImages[i] === imgId) {
        temp.push(selectedImages[i - 1]);
        selectedImages[i - 1] = selectedImages[i];
        selectedImages[i] = temp[0];
        temp.pop();
        break;
      }
    }

    setting == true ? setSetting(false) : setSetting(true);
  };
  const handleSelectedProject = (name) => {
    if (name === "Projects") {
      setTitle("");
      setIndex("");
      setTemplate("");
      setSelectedImages([]);
      setBtnShow(false);
      return;
    }
    projectsData.map((project, index) => {
      if (project.name === name) {
        setProjectId(project._id);
        setTitle(project.name);
        setIndex(project.index);
        setTemplate(project.template);
        setSlug(project.slug);
        setSelectedImages(project.imagesAndThumb);
        setBtnShow(true);
      }
    });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get(`${base_url}/project/`).then((response) => {
        console.log(response.data.data.sortedProjects);
        setProjectsData(response.data.data.sortedProjects);
      });
    };
    fetchProducts();
  }, []);

  const patchReq = async () => {
    setLoading(true);

    const body = {
      // images: selectedImages,
      imagesAndThumb: selectedImages,
    };
    // console.log(body.imagesAndThumb)
    await axios
      .patch(`${base_url}/project/${projectId}`, body)
      .then((response) => {
        // console.log(response.data.data.updated.imagesAndThumb)
        if (response.status === 225) {
          toast("Updated successfully");
        } else {
          toast("Please try later");
        }
        setLoading(false);
      });
  };

  return (
    <div className="d-flex align-items-center justify-content-center edit-images-section">
      <Card className="p-3 my-5 edit-form-card">
        <Form>
          <Form.Label className="mb-0">Select any Project</Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="mb-4 mt-2"
            onChange={(e) => handleSelectedProject(e.target.value)}
          >
            <option>Projects</option>
            {projectsData.map((project, index) => {
              return <option>{project.name}</option>;
            })}
          </Form.Select>

          <section className="edit-section">
            <button
              type="button12"
              className={btnshow ? "edit-image-btn" : "invisible"}
              onClick={moveBackward}
            >
              Prev
            </button>
            <div className="edit-image-section">
              {selectedImages &&
                selectedImages.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className="edit-image"
                      onClick={() => {
                        setImgId(image);
                      }}
                      style={{
                        outline:
                          imgId == image
                            ? "5px solid green"
                            : "1px solid black",
                      }}
                    >
                      {image.fileUrl.split("/")[0] == "data:image" ||
                      !image.fileUrl.includes("mp4") ? (
                        <img
                          src={image.fileUrl}
                          width="150"
                          height="150"
                          alt="upload"
                        />
                      ) : (
                        <video autoPlay loop muted>
                          <source src={image.fileUrl} type="video/mp4" />
                          <source src={image.fileUrl} type="video/ogg" />
                        </video>
                      )}
                      {/* <button onClick={() => deleteHandler(image)}>
                        delete image
                      </button> */}
                      <p>{index + 1}</p>
                    </div>
                  );
                })}
            </div>
            <button
              type="button12"
              className={btnshow ? "edit-image-btn" : "invisible"}
              onClick={moveForward}
            >
              Next
            </button>
          </section>

          <Button
            variant="primary"
            type="submit01"
            className="button d-flex align-items-center"
            onClick={() => {
              patchReq();
            }}
            disabled={loading ? true : false}
          >
            <Spinner
              animation="border"
              variant="light"
              className={loading ? "me-2" : "d-none"}
            />
            {loading ? "Updating..." : "Update index"}
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default EditImages;
