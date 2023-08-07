import axios from "axios";
import React, { useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Admin.css";
import base_url from "../../constants/url";
import { useState } from "react";
import { toast } from "react-toastify";
import API from "../../services/API";

function EditHomeIndex(props) {
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
  const [landscapeImgId, setLandscapeImgId] = useState(null);
  const [projectId, setProjectId] = useState("");
  const [setting, setSetting] = useState(false);
  const [btnshow, setBtnShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [landscapeLoading, setLandscapeLoading] = useState(false);
  const [homeIndexId, setHomeIndexId] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [landscapeHomeIndexId, setLandscapeHomeIndexId] = useState(0);
  const [landscapeImagesPreview, setLandscapeImagesPreview] = useState([]);

  const moveForward = (e) => {
    e.preventDefault();
    for (var i = 0; i < imagesPreview.length; i++) {
      if (imagesPreview[i] === imgId && i !== (imagesPreview.length - 1)) {
        temp.push(imagesPreview[i + 1]);
        imagesPreview[i + 1] = imagesPreview[i];
        imagesPreview[i] = temp[0];
        temp.pop();
        break;
      }
    }
    setting == true ? setSetting(false) : setSetting(true);
  };
  const moveBackward = (e) => {
    e.preventDefault();
    // console.log(selectedImages);
    for (var i = 1; i < imagesPreview.length; i++) {
      if (imagesPreview[i] === imgId) {
        temp.push(imagesPreview[i - 1]);
        imagesPreview[i - 1] = imagesPreview[i];
        imagesPreview[i] = temp[0];
        temp.pop();
        break;
      }
    }

    setting == true ? setSetting(false) : setSetting(true);
  };

  const moveForwardLandscape = (e) => {
    e.preventDefault();
    for (var i = 0; i < landscapeImagesPreview.length; i++) {
      if (landscapeImagesPreview[i] === landscapeImgId && i !== (landscapeImagesPreview.length - 1)) {
        temp.push(landscapeImagesPreview[i + 1]);
        landscapeImagesPreview[i + 1] = landscapeImagesPreview[i];
        landscapeImagesPreview[i] = temp[0];
        temp.pop();
        break;
      }
    }
    setting == true ? setSetting(false) : setSetting(true);
  };
  const moveBackwardLandscape = (e) => {
    e.preventDefault();
    // console.log(selectedImages);
    for (var i = 1; i < landscapeImagesPreview.length; i++) {
      if (landscapeImagesPreview[i] === landscapeImgId) {
        temp.push(landscapeImagesPreview[i - 1]);
        landscapeImagesPreview[i - 1] = landscapeImagesPreview[i];
        landscapeImagesPreview[i] = temp[0];
        temp.pop();
        break;
      }
    }

    setting == true ? setSetting(false) : setSetting(true);
  };

  useEffect(() => {
    const loadHomeIndexImages = async () => {
      const response = await API.get(`project/home`);
      if (response.status == 210) {
        setImagesPreview(response.data.home[0]?.images || []);
        setHomeIndexId(response.data.home[0]?._id || 0);
        setLandscapeImagesPreview(response.data.home[2]?.images || []);
        setLandscapeHomeIndexId(response.data.home[2]?._id || 0);
      } else {
        // console.log(response.message);
      }
    }

    loadHomeIndexImages();
  }, [])

  const updateLandscapeIndex = async (e) => {
    e.preventDefault();
    setLandscapeLoading(true);

    const payload = {
      images: landscapeImagesPreview
    }

    const response = await API.patch(`project/home/${landscapeHomeIndexId}`, payload);
    if (response.status == 225) {
      toast("Uploaded successfully");
    } else {
      toast(JSON.stringify(response));
    }

    setLandscapeLoading(false);
  }

  const updatePortraitIndex = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      images: imagesPreview
    }

    const response = await API.patch(`project/home/${homeIndexId}`, payload);
    if (response.status == 225) {
      toast("Uploaded successfully");
    } else {
      toast(JSON.stringify(response));
    }

    setLoading(false);
  }

  return (
    <div className="d-flex align-items-center justify-content-center edit-images-section">
      <Card className="p-3 my-5 edit-form-card">
        <Form>
          <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}><strong>Landscape Images</strong></h1>
          <section className="edit-section d-flex justify-content-center">
            <button type="button12" className={"btn btn-primary " + (btnshow ? "edit-image-btn" : "invisible")} onClick={moveBackwardLandscape}>
              Prev
            </button>
            <div className="edit-image-section">
              {landscapeImagesPreview &&
                landscapeImagesPreview.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className="edit-image"
                      onClick={() => {
                        setLandscapeImgId(image);
                      }}
                      style={{
                        outline: landscapeImgId === image
                          ? "5px solid green"
                          : "1px solid black",
                        cursor: 'pointer'
                      }}
                    >
                      {image.split("/")[0] == "data:image" || !image.includes("mp4") ?
                        <img
                          src={`${base_url}` + "/home/" + image}
                          width="150"
                          height="150"
                          alt="upload"
                        />
                        : <video autoPlay loop muted>
                          <source src={image.split(":")[0] === "data" ? image : base_url + "/home/" + image} type="video/mp4" />
                          <source src={image.split(":")[0] === "data" ? image : base_url + "/home/" + image} type="video/ogg" />
                        </video>
                      }
                      {/* <button onClick={() => deleteHandler(image)}>
                        delete image
                      </button> */}
                      <p>{index}</p>
                    </div>
                  );
                })}
            </div>
            <button
              type="button12"
              className={"btn btn-primary ms-2 " + (btnshow ? "edit-image-btn" : "invisible")}
              onClick={moveForwardLandscape}
            >
              Next
            </button>
          </section>

          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              type="submit01"
              className="button d-flex align-items-center"
              onClick={(e) => {
                updateLandscapeIndex(e);
              }}
              disabled={landscapeLoading ? true : false}
            >
              <Spinner animation="border" variant="light" className={landscapeLoading ? "me-2" : "d-none"} />
              {landscapeLoading ? "Updating..." : "Update Landscape index"}
            </Button>
          </div>

          <hr />

          <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}><strong>Portrait Images</strong></h1>
          <section className="edit-section d-flex justify-content-center">
            <button type="button12" className={"btn btn-primary " + (btnshow ? "edit-image-btn" : "invisible")} onClick={moveBackward}>
              Prev
            </button>
            <div className="edit-image-section">
              {imagesPreview &&
                imagesPreview.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className="edit-image"
                      onClick={() => {
                        setImgId(image);
                      }}
                      style={{
                        outline: imgId === image
                          ? "5px solid green"
                          : "1px solid black",
                        cursor: 'pointer'
                      }}
                    >
                      {image.split("/")[0] == "data:image" || !image.includes("mp4") ?
                        <img
                          src={`${base_url}` + "/home/" + image}
                          width="150"
                          height="150"
                          alt="upload"
                        />
                        : <video autoPlay loop muted>
                          <source src={image.split(":")[0] === "data" ? image : base_url + "/home/" + image} type="video/mp4" />
                          <source src={image.split(":")[0] === "data" ? image : base_url + "/home/" + image} type="video/ogg" />
                        </video>
                      }
                      {/* <button onClick={() => deleteHandler(image)}>
                        delete image
                      </button> */}
                      <p>{index}</p>
                    </div>
                  );
                })}
            </div>
            <button
              type="button12"
              className={"btn btn-primary ms-2 " + (btnshow ? "edit-image-btn" : "invisible")}
              onClick={moveForward}
            >
              Next
            </button>
          </section>
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              type="submit01"
              className="button d-flex align-items-center"
              onClick={(e) => {
                updatePortraitIndex(e);
              }}
              disabled={loading ? true : false}
            >
              <Spinner animation="border" variant="light" className={loading ? "me-2" : "d-none"} />
              {loading ? "Updating..." : "Update Portrait index"}
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default EditHomeIndex;
