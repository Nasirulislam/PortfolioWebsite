import axios from "axios";
import React, { useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Admin.css";
import base_url from "../../constants/url";
import { useState } from "react";
import { toast } from "react-toastify";

function AddProject(props) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [detail, setDetail] = useState("");
  const [index, setIndex] = useState("");
  const [template, setTemplate] = useState("");
  const [Slug, setSlug] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [displayImage, setdisplayImage] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setdisplayImage((previousImages) => previousImages.concat(imagesArray));


    const files = event.target.files;
    let imagesFile = []
    Array.from(files).forEach(file => imagesFile.push(file));
    setSelectedImages(imagesFile);
  };

  function deleteHandler(imageIndex) {

    let filtered = selectedImages.filter((e, key) => {
      if (key !== imageIndex) {
        return e;
      }
    });

    setSelectedImages(filtered);
    setdisplayImage(filtered);
    // URL.revokeObjectURL(image);
  }
  const submitData = async (e) => {
    e.preventDefault();
    let imagesArr = [];
    const formData = new FormData();
    formData.append("name", title);
    formData.append("index", index);
    formData.append("template", template);
    formData.append("slug", Slug);
    formData.append("color", color);
    formData.append("images", imagesArr);
    Array.from(selectedImages).forEach((file) => { formData.append("imagess", file) });


    setLoading(true);
    await axios.post(`${base_url}/project/new`, formData, { 'Content-Type': 'multipart/form-data' }).then((response) => {
      setLoading(false);
      setDetail('');
      setTitle('');
      setColor('');
      setSlug('');
      setIndex('');
      setTemplate('');
      setSelectedImages([]);
      setdisplayImage([]);
      toast("Portfolio added successfully");
    }).catch(err => {
      setLoading(false);
      toast("an error occur please try again");
      console.log(err);
    });

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


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Index/Possition</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter project possition"
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
              placeholder="Enter between 1-7"
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
              placeholder="Enter project Slug"
              value={Slug}
              onChange={(e) => {
                setSlug(e.target.value);
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
                      {
                        image.includes("mp4")
                          ? <video src={image} />
                          :
                          <img src={image} width="150" alt="upload" />
                      }
                      <button type="button" onClick={() => deleteHandler(index)}>
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
            className="d-flex align-items-center"
            onClick={(e) => submitData(e)}
            disabled={loading || displayImage.length === 0 ? true : false}
          >
            <Spinner animation="border" variant="light" className={loading ? "me-2" : "d-none"} />
            {loading ? "Uploading..." : "Submit"}
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default AddProject;
