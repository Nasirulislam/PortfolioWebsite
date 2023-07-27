import axios from "axios";
import React, { useEffect, useRef } from "react";
import { Card, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Admin.css";
import base_url from "../../constants/url";
import { useState } from "react";
import { toast } from "react-toastify";
import API from "../../services/API";

function AddProject({ projects }) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [titleColor, setTitleColor] = useState("");
  const [detail, setDetail] = useState("");
  const [index, setIndex] = useState("");
  const [template, setTemplate] = useState("");
  const [Slug, setSlug] = useState("");
  const [templateError, setTemplateError] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [displayImage, setdisplayImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const [titleError, setTitleError] = useState("");
  const [slugError, setSlugError] = useState("");

  const MAX_LENGTH = 15;
  const submitBtn = useRef();

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };

  const generateImgBlurHash = async (file) => {
    const baseUrl = base_url.replace("api", "");
    const res = await fetch(baseUrl + "blur/blur/blurhash", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image_url: file }),
    });
    const hash = await res.json();
    return hash.blurhash;
  };

  const onSelectFile = async (e) => {
    let selectedFileLength = Array.from(e.target.files).length;
    let uploadedFileLength = Array.from(displayImage).length;

    if (
      selectedFileLength > MAX_LENGTH ||
      uploadedFileLength + selectedFileLength > MAX_LENGTH
    ) {
      e.preventDefault();
      alert(`Cannot upload files more than ${MAX_LENGTH - 1}`);
      return;
    }

    let promises = [];
    [...e.target.files].forEach((file) => {
      promises.push(convertToBase64(file));
    });

    Promise.all(promises).then((result) => {
      setdisplayImage((current) => [...current, ...result]);
    });

    submitBtn.current.innerText = `Uploading (${percentage}% done)`;
    submitBtn.current.disabled = true;
    let imagesFile = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const response = await API.formData("project/v2/s3/upload", {
        file: e.target.files[i],
      });
      if (response.status === 200) {
        // response.hash = await generateImgBlurHash(response.thumbnailUrl);

        // get file dimensions
        var imageObj = new Image();
        imageObj.src = response.thumbnailUrl;
        imageObj.onload = function () {
          response.width = this.width;
          response.height = this.height;
          delete response.status;
          imagesFile.push(response);
          setSelectedImages((preState) => [...preState, response]);
          updateUploadProgress(selectedFileLength, imagesFile.length);
          if (i === e.target.files.length - 1) {
            submitBtn.current.innerText = "Submit";
            submitBtn.current.disabled = false;
          }
        };
        if (response.fileUrl.includes("mp4")) {
          delete response.status;
          imagesFile.push(response);
          setSelectedImages((preState) => [...preState, response]);
          if (i === e.target.files.length - 1) {
            submitBtn.current.innerText = "Submit";
            submitBtn.current.disabled = false;
          }
        }
      }
    }
  };

  useEffect(() => {
    if (percentage !== 0) {
      submitBtn.current.innerText = `Uploading (${percentage.toFixed()}% done)`;
    }
    if (percentage === 100) {
      submitBtn.current.innerText = `Submit`;
    }
  }, [percentage]);

  const updateUploadProgress = (totalFiles, uploadedFiles) => {
    const percentage = (uploadedFiles / totalFiles) * 100;
    setPercentage(percentage);
    console.log(
      `Uploaded: ${uploadedFiles}/${totalFiles} (${percentage.toFixed(2)}%)`
    );
    // Update the UI with the upload progress percentage
  };

  useEffect(() => {
    console.log(selectedImages);
  }, [selectedImages]);

  function deleteHandler(imageIndex) {
    let filtered = selectedImages.filter((e, key) => {
      if (key !== imageIndex) {
        return e;
      }
    });

    let filteredDisplay = displayImage.filter((e, key) => {
      if (key !== imageIndex) {
        return e;
      }
    });

    setSelectedImages(filtered);
    setdisplayImage(filteredDisplay);
  }
  const submitData = async (e) => {
    e.preventDefault();

    if (title === "") {
      setTitleError("Please enter a title");
      window.scrollTo(0, 0);
      return;
    }

    if (Slug === "") {
      setSlugError("Please enter a slug");
      window.scrollTo(0, 0);
      return;
    }

    if (Slug === "admin") {
      alert("cannot add admin preserved slug");
      return;
    }
    if (templateError !== "") return;

    let project = projects.filter((item) => item.slug == Slug);
    if (project[0]?.slug === Slug) {
      alert("slug already exit");
      return;
    }

    let count = 0;
    displayImage.filter((item, key) => {
      if (item.split("/")[0] === "data:image") {
        count += 1;
      }
    });

    if (count === 0) {
      alert("Atleast select any one image to continue");
      return;
    }

    setLoading(true);
    const payload = {
      name: title,
      description: detail,
      index: index,
      template: template,
      slug: Slug,
      color: color,
      titleColor: titleColor,
      imagess: [],
      imagesAndThumb: selectedImages,
      images: selectedImages,
    };

    const response = await API.post("project/new", payload);
    if (response.status === 200) {
      setDetail("");
      setTitle("");
      setColor("");
      setSlug("");
      setIndex("");
      setTemplate("");
      setSelectedImages([]);
      setdisplayImage([]);
      toast("Portfolio added successfully");
      // window.location.reload();
    } else {
      toast("please try again");
    }
    setLoading(false);
  };

  const handleTemplate = (e) => {
    e.preventDefault();
    if (e.target.value > 3 || e.target.value <= 0) {
      setTemplateError("template should between 1-3");
    } else {
      setTemplateError("");
    }
    setTemplate(e.target.value);
  };

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
    setTitleError("");
  };

  const handleSlug = (e) => {
    e.preventDefault();
    setSlug(e.target.value);
    setSlugError("");
  };

  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <Card className="p-3 my-5 form-card">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <strong className="text-danger"> {titleError}</strong>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={handleTitle}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              value={detail}
              onChange={(e) => {
                setDetail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Index/Possition</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter project possition"
              value={index}
              onChange={(e) => {
                setIndex(e.target.value);
              }}
              min="0"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Templates</Form.Label>
            <strong className="text-danger"> {templateError}</strong>
            <Form.Control
              type="number"
              placeholder="Enter between 1-3"
              value={template}
              onChange={handleTemplate}
              min="1"
              max="3"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Slug</Form.Label>
            <strong className="text-danger"> {slugError}</strong>
            <Form.Control
              type="text"
              placeholder="Enter project Slug"
              value={Slug}
              onChange={handleSlug}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Title Color</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter project title color"
              value={titleColor}
              onChange={(e) => {
                setTitleColor(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Template Color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </Form.Group>
          <section>
            <input type="file" multiple />

            <div className="images">
              {displayImage &&
                displayImage.map((image, index) => {
                  return (
                    <div key={image} className="image">
                      {image.split("/")[0] === "data:video" ? (
                        <>
                          <video autoPlay loop muted>
                            <source
                              src={
                                image.split("/")[0] === "data:video"
                                  ? image
                                  : base_url + "/home/" + image
                              }
                              type="video/mp4"
                            />
                            <source
                              src={
                                image.split("/")[0] === "data:video"
                                  ? image
                                  : base_url + "/home/" + image
                              }
                              type="video/ogg"
                            />
                          </video>
                          <button
                            type="button"
                            onClick={() => deleteHandler(index)}
                          >
                            delete video
                          </button>
                        </>
                      ) : (
                        <>
                          <img
                            src={
                              image.split("/")[0] === "data:image"
                                ? image
                                : base_url + "/home/" + image
                            }
                            width="150"
                            alt="upload"
                          />
                          <button
                            type="button"
                            onClick={() => deleteHandler(index)}
                          >
                            delete image
                          </button>
                        </>
                      )}
                      <p>{index + 1}</p>
                    </div>
                  );
                })}
              <label className="img-label">
                + Add Images
                <br />
                <span>up to 10 images</span>
                <input
                  type="file"
                  name="images"
                  onChange={onSelectFile}
                  multiple
                  accept="image/png , image/jpeg, image/webp video/* image/gif"
                />
              </label>
            </div>
          </section>
          <Button
            ref={submitBtn}
            variant="primary"
            type="submit12"
            className="d-flex align-items-center"
            onClick={(e) => submitData(e)}
            disabled={loading || displayImage.length === 0 ? true : false}
          >
            <Spinner
              animation="border"
              variant="light"
              className={loading ? "me-2" : "d-none"}
            />
            {loading ? "Uploading..." : "Submit"}
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default AddProject;
