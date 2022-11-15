import axios from "axios";
import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Admin.css";
import base_url from "../../constants/url";
import { useState } from "react";
function Admin(props) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [index, setIndex] = useState("");
  const [template, setTemplate] = useState("");
  const [Slug, setSlug] = useState("");
  const [images, setImages] = useState([]);

  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("detail", detail);
    formData.append("index", index);
    formData.append("template", template);
    formData.append("slug", Slug);
    formData.append("images", images);
    await axios.post(`${base_url}/project/new`, formData).then((reponse) => {
      console.log(reponse);
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <Card className="p-3 form-card">
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
            <Form.Label>Detail</Form.Label>
            <Form.Control
              type="text"
              placeholder="Detail"
              value={detail}
              onChange={(e) => {
                setDetail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Index</Form.Label>
            <Form.Control
              type="text"
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
              type="text"
              placeholder="Detail"
              value={detail}
              onChange={(e) => {
                setDetail(e.target.value);
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
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Images</Form.Label>
            <Form.Control
              type="file"
              multiple
              onChange={(e) => {
                setImages(e.target.files);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(e)=>submitData(e)}>
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Admin;
