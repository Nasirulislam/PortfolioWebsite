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

  const moveForward = () => {
    // console.log(selectedImages);
    for (var i = 0; i < selectedImages.length; i++) {
      if (selectedImages[i] === imgId) {
        temp.push(selectedImages[i + 1]);
        selectedImages[i + 1] = selectedImages[i];
        selectedImages[i] = temp[0];
        temp.pop();
        break;
      }
    }
    setting == true ? setSetting(false) : setSetting(true);
  };
  const moveBackward = () => {
    // console.log(selectedImages);
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
        setSelectedImages(project.images);
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
      images: selectedImages,
    };

    await axios
      .patch(`${base_url}/project/${projectId}`, body)
      .then((response) => {
        if (response.status === 225) {
          toast("Updated successfully");
        } else {
          toast("Please try later");
        }
        setLoading(false);
      });
  };

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    // setSelectedImages(selectedFiles)
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }
  //   function swapElements()
  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", title);
    formData.append("slug", Slug);
    formData.append("index", index);
    formData.append("template", template);
    formData.append("images", selectedImages);
    await axios.post(`${base_url}/project/new/`, formData).then((reponse) => {
      console.log(reponse);
    });
    setSelectedImages([]);
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
            <Button className={btnshow ? "edit-image-btn" : "invisible"} onClick={() => moveBackward()}>
              Prev
            </Button>
            <div className="edit-image-section">
              {selectedImages &&
                selectedImages.map((image, index) => {
                  return (
                    <div
                      key={image}
                      className="edit-image"
                      onClick={() => {
                        setImgId(image);
                      }}
                      style={{
                        outline: imgId == image
                          ? "5px solid green"
                          : "1px solid black",
                      }}
                    >
                      {image.split("/")[0] == "data:image" || !image.includes("mp4") ?
                        <img
                          src={`${base_url}` + "/projects/" + image}
                          width="150"
                          height="150"
                          alt="upload"
                        />
                        : <video autoPlay loop muted>
                          <source src={image.split(":")[0] === "data" ? image : base_url + "/projects/" + image} type="video/mp4" />
                          <source src={image.split(":")[0] === "data" ? image : base_url + "/projects/" + image} type="video/ogg" />
                        </video>
                      }
                      {/* <button onClick={() => deleteHandler(image)}>
                        delete image
                      </button> */}
                      <p>{index + 1}</p>
                    </div>
                  );
                })}
            </div>
            <Button
              className={btnshow ? "edit-image-btn" : "invisible"}
              onClick={() => {
                moveForward();
              }}
            >
              Next
            </Button>
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
            <Spinner animation="border" variant="light" className={loading ? "me-2" : "d-none"} />
            {loading ? "Updating..." : "Update index"}
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default EditImages;
