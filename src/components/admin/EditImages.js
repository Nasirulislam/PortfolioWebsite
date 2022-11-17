import axios from "axios";
import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Admin.css";
import base_url from "../../constants/url";
import { useState } from "react";
import FileUploader from "../admin/FileUploder";

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
  const [imgId, setImgId] = useState([]);
  const [projectId, setProjectId] = useState("");
  const [setting, setSetting] = useState(false);
 

  const moveForward = () => {
    // console.log(selectedImages);
    for (var i=0;i<selectedImages.length; i++){
      if (selectedImages[i] === imgId) {
        console.log("Index 1 ");
        console.log(selectedImages[i]);
        console.log(selectedImages[i + 1]);
        console.log("Index 3 ");
        console.log("Ending");
        temp.push(selectedImages[i + 1]);
        selectedImages[i + 1] = selectedImages[i];
        selectedImages[i] = temp[0];
        temp.pop();
        break;
      }
    }
    window.location.reload();

    setting == true ? setSetting(false) : setSetting(true);
  };
  const moveBackward  = () => {
    // console.log(selectedImages);
    for (var i=1;i<selectedImages.length; i++){
      if (selectedImages[i] === imgId) {
        temp.push(selectedImages[i -1]);
        selectedImages[i - 1] = selectedImages[i];
        selectedImages[i] = temp[0];
        temp.pop();
        break;
      }
    }
    window.location.reload();

    setting == true ? setSetting(false) : setSetting(true);
  };
  const handleSelectedProject = (name) => {
    projectsData.map((project, index) => {
      if (project.name === name) {
        setProjectId(project._id);
        setTitle(project.name);
        setIndex(project.index);
        setTemplate(project.template);
        setSlug(project.slug);
        setSelectedImages(project.images);
        console.log("Value Updated");
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
    console.log("Inside Patch");
    const body = {
      images: selectedImages,
    };
    console.log(selectedImages);
    console.log(body);

    await axios
      .patch(`${base_url}/project/${projectId}`, body)
      .then((response) => {
        console.log(response);
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
    <div className="d-flex align-items-center justify-content-center h-100">
      <Card className="p-3 my-5 edit-form-card">
        <Form>
          <Form.Select
            aria-label="Default select example"
            className="my-4"
            onChange={(e) => handleSelectedProject(e.target.value)}
          >
            <option>Projects</option>
            {projectsData.map((project, index) => {
              return <option>{project.name}</option>;
            })}
          </Form.Select>

          <section className="edit-section">
            <Button className="edit-image-btn" onClick={()=>moveBackward()}>Prev</Button>
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
                        border: selectImg
                          ? "1px solid white"
                          : "1px solid black",
                      }}
                    >
                      <img
                        src={`${base_url}` + "/img/projects/" + image}
                        width="150"
                        height="150"
                        alt="upload"
                      />
                      {/* <button onClick={() => deleteHandler(image)}>
                        delete image
                      </button> */}
                      <p>{index + 1}</p>
                    </div>
                  );
                })}
            </div>
            <Button
              className="edit-image-btn"
              onClick={() => {
                moveForward();
              }}
            >
              Next
            </Button>
          </section>

          <Button
            variant="primary"
            // type="submit"
            className="button"
            onClick={() => {
              patchReq();
            }}
          >
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default EditImages;
