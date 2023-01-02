import axios from "axios";
import React, { useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Admin.css";
import base_url from "../../constants/url";
import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { toast } from "react-toastify";
import API from "../../services/API";

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
  const [loading, setLoading] = useState(false);
  const [loadingDel, setDelLoading] = useState(false);
  const MAX_LENGTH = 25;

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
        setdisplayImage(project.images);
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

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      }
    });
  }


  const onSelectFile = (e) => {
    let selectedFileLength = Array.from(e.target.files).length;
    let uploadedFileLength = Array.from(displayImage).length;

    if (selectedFileLength > MAX_LENGTH) {
      e.preventDefault();
      alert(`Cannot upload files more than ${MAX_LENGTH}`);
      return;
    }

    let promises = [];
    [...e.target.files].forEach(file => {
      promises.push(convertToBase64(file));
    });

    Promise.all(promises).then(result => {
      setdisplayImage((old => [...old, ...result]));
    })

    let imagesFile = []
    Array.from(e.target.files).forEach(file => imagesFile.push(file));
    setSelectedImages(imagesFile);
  };

  const deleteProduct = async () => {
    setDelLoading(true);
    await axios.delete(`${base_url}/project/${P_id}`).then((response) => {
      toast("Deleted successfully");
      setDelLoading(false);
      window.location.reload();
    });
  };

  function deleteHandler(index) {
    let filteredImages = [];
    let selectedMedia = [];
    displayImage.forEach((item, key) => {
      if (key !== index) {
        filteredImages.push(item);
      }
    });

    selectedImages.forEach((item, key) => {
      if (key !== index) {
        selectedMedia.push(item);
      }
    });

    if (typeof filteredImages[0] == "undefined") {
      filteredImages = [];
    }
    setdisplayImage(filteredImages);
    setSelectedImages(selectedMedia);
  }
  const submitData = async (e) => {
    e.preventDefault();
    setLoading(true);
    let imagesArr = [];
    let selectedImagesArr = [...selectedImages];
    for (let i = 0; i < displayImage.length; i++) {
      if (displayImage[i].split(":")[0] !== "data") {
        imagesArr[i] = displayImage[i];
      }
    }
    const payload = {
      title: title,
      slug: Slug,
      template: template,
      index: index,
      images: imagesArr,
      imagess: selectedImagesArr
    }

    console.log(payload);
    const response = await API.put(`project/${P_id}`, payload).then((response) => {
      if (response.status == 225) {
        toast("Uploaded successfully");
        setSelectedImages([]);
      } else {
        toast(JSON.stringify(response));
      }

    }).catch(err => {
      toast(JSON.stringify(err));
    })
    setLoading(false);
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
              className={"d-flex align-items-center " + delteIcon ? "delete-icon m-2" : "d-none"}
              onClick={() => deleteProduct()}
              disabled={loadingDel || !uploadImg ? true : false}
            >
              {loadingDel ? <Spinner animation="border" variant="light" className={loadingDel ? "" : "d-none"} /> : <BsFillTrashFill />}

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
            <div className="images">
              {displayImage &&
                displayImage.map((image, index) => {
                  // <div key={image} className="image">
                  {
                    return image.includes("mp4") ?
                      <div key={image} className="image">
                        <video autoPlay loop muted>
                          <source src={image.split("/")[0] === "data:video" ? image : base_url + "/projects/" + image} type="video/mp4" />
                          <source src={image.split("/")[0] === "data:video" ? image : base_url + "/projects/" + image} type="video/ogg" />
                        </video>
                        <button type="button" onClick={() => deleteHandler(index)}>
                          delete video
                        </button>
                        <p>{index + 1}</p>
                      </div>
                      :
                      <div key={image} className="waheed">
                        <img src={image.split("/")[0] === "data:image" ? image : (base_url + "/projects/" + image)} width="150" alt="upload" />
                        <button type="button" onClick={() => deleteHandler(index)}>
                          delete image
                        </button>
                        <p>{index + 1}</p>
                      </div>

                  }
                  // </div>


                })}
            </div>
            {
              displayImage.length < MAX_LENGTH && (
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
            className="d-flex align-items-center"
            onClick={(e) => submitData(e)}
            disabled={loading || !uploadImg ? true : false}
          >
            <Spinner animation="border" variant="light" className={loading ? "me-2" : "d-none"} />
            {loading ? "Updating..." : "Update"}
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default EditProject;
