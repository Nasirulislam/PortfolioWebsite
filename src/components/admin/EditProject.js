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
import ConfirmDelete from "../ConfirmDelete";

function EditProject(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [P_id, setPId] = useState("");
  const [index, setIndex] = useState("");
  const [template, setTemplate] = useState("");
  const [Slug, setSlug] = useState("");
  const [titleColor, setTitleColor] = useState("");
  const [color, setColor] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [uploadImg, setUploadImg] = useState(false);
  const [displayImage, setdisplayImage] = useState([]);
  const [selOldImages, setselOldImages] = useState([]);
  const [imageToSend, setimageToSend] = useState([]);
  const [fimages, setfimages] = useState([]);
  const [timages, settimages] = useState([]);
  const [delteIcon, setDeleteIcon] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingDel, setDelLoading] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [templateError, setTemplateError] = useState("");
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

      if (project.slug === name) {
        console.log(project)
        setTitle(project.name);
        setDescription(project.description);
        setIndex(project.index);
        setTemplate(project.template);
        setSlug(project.slug);
        setColor(project.color);
        setTitleColor(project.titleColor);
        setPId(project._id);
        //  const pics = extractUrls(project.imagesAndThumb)
        setselOldImages(project.imagesAndThumb)
        setdisplayImage(project.imagesAndThumb)
        setfimages(project.images)
        settimages(project.imagesAndThumb)
        setDeleteIcon(true);
      }
    });
    setUploadImg(false);
  };

  function extractUrls(images) {
    return images.map(image => image.fileUrl);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get(`${base_url}/project/`).then((response) => {
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


  const onSelectFile = async (e) => {
    let selectedFileLength = Array.from(e.target.files).length;
    let uploadedFileLength = Array.from(displayImage).length;

    if (selectedFileLength > MAX_LENGTH) {
      e.preventDefault();
      alert(`Cannot upload files more than ${MAX_LENGTH}`);
      return;
    }

    let imagesFile = []
    const newpics = []
    const newVids = []

    let promises = [];
    setUploadImg(true);

    [...e.target.files].forEach(file => {
      console.log(file)
      promises.push(convertToBase64(file));
      // if(!file.type.includes("video")){
      //   newpics.push({ fileUrl: URL.createObjectURL(file) });
      // }
    });

    Promise.all(promises).then(result => {
      // setdisplayImage((old => [...old, ...result]));
      // console.log("=====>>>>>new pics ", newpics)
      // setdisplayImage((old => [...old, ...newpics]));
    })

    for (let i = 0; i < e.target.files.length; i++) {
      const response = await API.formData('project/v2/s3/upload', { 'file': e.target.files[i] });
      console.log(response)
      if (response.status === 200) {
        console.log(response)
        // get file dimensions
        var imageObj = new Image();
        imageObj.src = response.thumbnailUrl;
        imageObj.onload = function () {
          response.width = this.width;
          response.height = this.height;
          delete response.status;
          imagesFile.push(response);
          newpics.push(response)
          setSelectedImages(preState => [...preState, response]);
          if (i === (e.target.files.length - 1)) {
            console.log("the last file is here files-=======>>>>>>")
            setdisplayImage((old => [...old, ...newVids, response]));
            setUploadImg(false);
          } else {
            setdisplayImage((old => [...old, response]));
            // newpics = [];
            // console.log("new pic =====>>>>", newpics)
          }
        };
        if (response.fileUrl.includes("mp4")) {
          delete response.status;
          newVids.push(response)
          imagesFile.push(response);
          setSelectedImages(preState => [...preState, response]);
          if (i === (e.target.files.length - 1)) {
            console.log("the last file is here files-=======>>>>>>")
            setdisplayImage((old => [...old, ...newVids]));
            setUploadImg(false);
          }
        }
      }
    }




    // Array.from(e.target.files).forEach(file => imagesFile.push(file));
    // setSelectedImages(imagesFile);
  };


  useEffect(() => {
    console.log("======>>>> selected Images", selectedImages)
  }, [selectedImages])

  const deleteProduct = async (e) => {
    e.preventDefault();
    setShowConfirmModal(true);
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
    if (templateError !== "") {
      window.scrollTo(0, 0)
      return;
    }
    setLoading(true);
    let imagesArr = [];
    let selectedImagesArr = [...selectedImages];
    for (let i = 0; i < displayImage.length; i++) {
      if (displayImage[i].fileUrl.split(":")[0] !== "data") {
        imagesArr[i] = displayImage[i].fileUrl;
      }
    }
    if (imagesArr.length < 2) {
      imagesArr.push('')
      imagesArr.reverse()
    }
    const payload = {
      name: title,
      description: description,
      slug: Slug,
      template: template,
      index: index,
      titleColor: titleColor,
      color: color,
      // images: ["",...selOldImages],
      imagess: [],
      // images: JSON.stringify([...fimages, ...selectedImagesArr]),
      // imagesAndThumb: JSON.stringify([...timages, ...selectedImagesArr])
      images: JSON.stringify([...displayImage]),
      imagesAndThumb: JSON.stringify([...displayImage])

    }
    console.log("payload======>>>>>", payload)

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await API.put(`project/${P_id}`, payload, config).then((response) => {
      // const response = await API.put(`project/${P_id}`, payload).then((response) => {
      if (response.status == 225) {
        toast("Uploaded successfully");
        setSelectedImages([]);
        window.location.reload();
      } else {
        toast(JSON.stringify(response));
      }

    }).catch(err => {
      toast(JSON.stringify(err));
    })
    setLoading(false);
  };

  const handleTemplate = (e) => {
    e.preventDefault();
    if (e.target.value > 3 || e.target.value <= 0) {
      setTemplateError("template should between 1-3")
    } else {
      setTemplateError("")
    }
    setTemplate(e.target.value)
  }

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
                return <option key={index} value={project.slug}>{project.name}</option>;
              })}
            </Form.Select>
            <Button
              type="submit"
              className={"d-flex align-items-center " + delteIcon ? "delete-icon m-2" : "d-none"}
              onClick={deleteProduct}
              disabled={loadingDel || uploadImg ? true : false}
              style={{ background: 'blue' }}
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

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
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
            <Form.Label>Title Color</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title color"
              value={titleColor}
              onChange={(e) => {
                setTitleColor(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Background Color</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Templates </Form.Label>
            <strong className="text-danger"> {templateError}</strong>
            <Form.Control
              type="number"
              placeholder="Template"
              value={template}
              onChange={handleTemplate}
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
            <div className="images justify-content-around flex-wrap">
              {displayImage &&
                displayImage.map((image, index) => {
                  {
                    return image?.fileUrl?.split("/")[0] === "data:image" || !image?.fileUrl?.includes("mp4") ?
                      <div key={image} className="waheed mx-1">
                        {/* <img src={image?.fileUrl?.split("/")[0] === "data:image" ? image : (base_url + "/projects/" + image)} width="150" alt="upload" /> */}
                        <img src={image.fileUrl} width="150" alt="upload" />
                        <button type="button" onClick={() => deleteHandler(index)}>
                          delete image
                        </button>
                        <p>{index + 1}</p>
                      </div>
                      :
                      <div key={image} className="image">
                        <video autoPlay loop muted>
                          {/* <source src={image?.fileUrl?.split("/")[0] === "data:video" ? image : base_url + "/projects/" + image} type="video/mp4" />
                          <source src={image?.fileUrl?.split("/")[0] === "data:video" ? image : base_url + "/projects/" + image} type="video/ogg" /> */}
                          <source src={image.fileUrl} type="video/mp4" />
                          <source src={image.fileUrl} type="video/ogg" />
                        </video>
                        <button type="button" onClick={() => deleteHandler(index)}>
                          delete video
                        </button>
                        <p>{index + 1}</p>
                      </div>
                  }
                })}
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
            </div>

          </section>
          <Button
            variant="primary"
            type="submit"
            className="d-flex align-items-center"
            onClick={(e) => submitData(e)}
            disabled={loading || uploadImg ? true : false}
            style={{ background: 'blue' }}
          >
            <Spinner animation="border" variant="light" className={loading ? "me-2" : "d-none"} />
            {loading ? "Updating..." : uploadImg ? "Uploading" : "Update"}
          </Button>
        </Form>
      </Card>
      {
        showConfirmModal ? <ConfirmDelete
          itemName={title} productId={P_id}
          show={showConfirmModal}
          onHide={() => setShowConfirmModal(false)}
        /> : <></>
      }

    </div>
  );
}

export default EditProject;
