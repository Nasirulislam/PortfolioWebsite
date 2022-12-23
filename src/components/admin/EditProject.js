import axios from "axios";
import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Admin.css";
import base_url from "../../constants/url";
import { useState } from "react";
import FileUploader from "../admin/FileUploder";
import { BsFillTrashFill } from "react-icons/bs";

function EditProject(props) {
  const [title, setTitle] = useState("");
  const [P_id, setPId] = useState("");
  const [index, setIndex] = useState("");
  const [template, setTemplate] = useState("");
  const [Slug, setSlug] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [uploadImg, setUploadImg] = useState(false);
  const [displayImage, setdisplayImage] = useState([]);
  const [imageToSend, setimageToSend] = useState([]);
  const [delteIcon, setDeleteIcon] = useState(false);

  const handleSelectedProject = (name) => {
    if (name === "Projects") {
      setTitle("");
      setIndex("");
      setTemplate("");
      setSlug("");
      setPId("");
      setSelectedImages([]);
      setDeleteIcon(false);
      return;
    }
    projectsData.map((project, index) => {
      if (project.name === name) {
        setTitle(project.name);
        setIndex(project.index);
        setTemplate(project.template);
        setSlug(project.slug);
        setPId(project._id);
        setSelectedImages(project.images);
        console.log("Value Updated");
        console.log(project);
        setDeleteIcon(true);
      }
    });
    setUploadImg(true);
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

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    // setSelectedImages(selectedFiles)
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setdisplayImage((previousImages) => previousImages.concat(imagesArray));

    const files = event.target.files;
    let imagesFile = [];
    Array.from(files).forEach((file) => imagesFile.push(file));
    setimageToSend(imagesFile);
  };

  const deleteProduct = async () => {
    await axios.delete(`${base_url}/project/${P_id}`).then((response) => {
      window.location.reload();
    });
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }
  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", title);
    formData.append("index", index);
    formData.append("template", template);
    formData.append("slug", Slug);
    let imagesTo = [];

    console.log(imageToSend);

    Array.from(imageToSend).forEach((file) => {
      imagesTo.push(file);
    });
    Array.from(selectedImages).forEach((file) => {
      imagesTo.push(file);
    });
    setSelectedImages(imageToSend);

    Array.from(selectedImages).forEach((file) => {
      formData.append("images", file);
    });

    await axios
      .put(`${base_url}/project/${P_id}`, formData, {
        "Content-Type": "multipart/form-data",
      })
      .then((response) => {
        console.log(response);
        setPId("");
        setTitle("");
        //   window.location.reload();
      });
  };

  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <Card className="p-3 my-5 form-card">
        <Form>
          <Form.Label className="mb-0">Select any Project</Form.Label>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handleSelectedProject(e.target.value)}
            >
              <option>Projects</option>
              {projectsData.map((project, index) => {
                return <option key={index}>{project.name}</option>;
              })}
            </Form.Select>
            <Button
              className={delteIcon ? "delete-icon m-2" : "d-none"}
              onClick={() => deleteProduct()}
            >
              <BsFillTrashFill />
            </Button>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Index</Form.Label>
            <Form.Control
              type="number"
              placeholder="Detail"
              value={index}
              onChange={(e) => {
                setIndex(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Templates</Form.Label>
            <Form.Control
              type="number"
              placeholder="Detail"
              value={template}
              onChange={(e) => {
                setTemplate(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Slug</Form.Label>
            <Form.Control
              type="text"
              placeholder="Detail"
              value={Slug}
              onChange={(e) => {
                setSlug(e.target.value);
              }}
            />
          </Form.Group>
          <section>
            {/* <label
              className="img-label"
              onClick={() => {
                setUploadImg(false);
              }}
            >
              + Add Images
              <br />
              <span>up to 10 images</span>
              <input
                type="file"
                name="images"
                onChange={onSelectFile}
                multiple
                accept="image/png , image/jpeg, image/webp"
              />
            </label>
            <br />

            <input type="file" multiple /> */}

            <div className="images">
              {selectedImages &&
                selectedImages.map((image, index) => {
                  return (
                    <div key={image} className="image">
                      <img
                        src={`${base_url}` + "/img/projects/" + image}
                        width="150"
                        alt="upload"
                      />
                      <button onClick={() => deleteHandler(image)}>
                        delete image
                      </button>
                      <p>{index + 1}</p>
                    </div>
                  );
                })}
            </div>
            <div className="images">
              {displayImage &&
                displayImage.map((image, index) => {
                  return (
                    <div key={image} className="image">
                      <img src={image} width="150" alt="upload" />
                      <button onClick={() => deleteHandler(image)}>
                        delete image
                      </button>
                      <p>{index + 1}</p>
                    </div>
                  );
                })}
            </div>
            {
              selectedImages.length > 0 && (
                <label className="img-label">
                  + Add Images
                  <br />
                  <span>up to 10 images</span>
                  <input
                    type="file"
                    name="images"
                    onChange={onSelectFile}
                    multiple
                    accept="image/png , image/jpeg, image/webp"
                  />
                </label>
              )
            }
          </section>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => submitData(e)}
          >
            Update
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default EditProject;
