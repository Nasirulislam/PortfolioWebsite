import axios from "axios";
import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Admin.css";
import base_url from "../../constants/url";
import { useState } from "react";
import FileUploader from "../admin/FileUploder";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function AddProject(props) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [index, setIndex] = useState("");
  const [template, setTemplate] = useState("");
  const [Slug, setSlug] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [displayImage, setdisplayImage] = useState([]);
  let selectedFilesArray = [];

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setdisplayImage((previousImages) => previousImages.concat(imagesArray));


    const files = event.target.files;
    let imagesFile = []
    Array.from(files).forEach(file=>imagesFile.push(file));
    setSelectedImages(imagesFile);

    // const selectedFilesArray = Array.from(selectedFiles);
    // const imagesArray = selectedFilesArray.map((file) => {
    //   return URL.createObjectURL(file);
    // });

    // setSelectedImages(selectedFilesArray);

    console.log("Selected Files");
    console.log(displayImage);

    // FOR BUG IN CHROME
    // event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }
  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", title);
    // formData.append("detail", detail);
    formData.append("index", index);
    formData.append("template", template);
    formData.append("slug", Slug);
    Array.from(selectedImages).forEach((file)=>{formData.append("images",file)});
    console.log(selectedImages)


    await axios.post(`${base_url}/project/new`, formData,{'Content-Type': 'multipart/form-data' }).then((response) => {
      console.log(response);
      setDetail('');
      setTitle('');
      window.location.reload();
    });
    // setSelectedImages([]);
  };

  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <Card className="p-3 my-5 form-card">
        <Form>
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

          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Detail</Form.Label>
            <Form.Control
              type="text"
              placeholder="Detail"
              value={detail}
              onChange={(e) => {
                setDetail(e.target.value);
              }}
            />
          </Form.Group> */}
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
            <br />

            <input type="file" multiple />

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
          </section>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => submitData(e)}
          >
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default AddProject;
