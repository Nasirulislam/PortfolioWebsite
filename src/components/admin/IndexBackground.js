import React, { useEffect, useState } from 'react';
import { Card, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from 'react-toastify';
import "./Admin.css";
import base_url from "../../constants/url";
import API from '../../services/API';


export default function IndexBackground() {
    const [loading, setLoading] = useState(false);
    const [homeIndexId, setHomeIndexId] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const MAX_LENGTH = 1;

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
        let uploadedFileLength = Array.from(imagesPreview).length;

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
            setImagesPreview((old => [...old, ...result]));
        })

        let imagesFile = []
        Array.from(e.target.files).forEach(file => imagesFile.push(file));
        setSelectedFiles(imagesFile);
    }

    const removePreviewImage = (index) => {
        let filteredImages = [];
        let selectedImages = [];
        imagesPreview.forEach((item, key) => {
            if (key !== index) {
                filteredImages.push(item);
            }
        });

        selectedFiles.forEach((item, key) => {
            if (key !== index) {
                selectedImages.push(item);
            }
        });

        if (typeof filteredImages[0] == "undefined") {
            filteredImages = [];
        }
        setImagesPreview(filteredImages);
        setSelectedFiles(selectedImages);
    }

    const submit = async (event) => {
        event.preventDefault();
        setLoading(true);
        let imagesArr = [];
        let selectedImagesArr = [...selectedFiles];
        for (let i = 0; i < imagesPreview.length; i++) {
            if (imagesPreview[i].split(":")[0] !== "data") {
                imagesArr[i] = imagesPreview[i];
            }
        }
        const payload = {
            images: imagesArr,
            imagess: selectedImagesArr
        }
        if (homeIndexId == 0) {
            await API.upload(`project/home`, payload).then((response) => {
                if (response.status == 225) {
                    toast("Uploaded successfully");
                    setImagesPreview([]);
                }

            }).catch(err => {
                toast(JSON.stringify(err));
            })
            setLoading(false);
        } else {
            const response = await API.patch(`project/home/${homeIndexId}`, payload);
            if (response.status == 225) {
                toast("Uploaded successfully");
                setSelectedFiles([]);
            } else {
                toast(JSON.stringify(response));                
            }
            setLoading(false);
        }
    }

    useEffect(() => {
        const loadIndexBackground = async () => {
            const response = await axios.get(`${base_url}/project/home`);
            if (response.status == 210) {
                setImagesPreview(response.data.data.home[1]?.images || []);
                setHomeIndexId(response.data.data.home[1]?._id || 0);
            } else {
                console.log(response.message);
            }
        }

        loadIndexBackground();
    }, [])

    return (
        <div className="d-flex align-items-center justify-content-center h-100">
            <Card className="p-3 my-5 form-card">
                <Form>
                    <section>
                        <div className="images">
                            {(imagesPreview && imagesPreview.length > 0) &&
                                imagesPreview.map((image, index) => {
                                    {
                                        return (
                                            <div key={index} className="image">
                                                {
                                                    <img src={image.split(":")[0] === "data" ? image : (base_url + "/home/" + image)} width="150" alt="upload" />
                                                }
                                                <button type="button" onClick={() => removePreviewImage(index)}>
                                                    delete image
                                                </button>
                                                <p>{index}</p>
                                            </div>)
                                    }
                                })}
                            {
                                (imagesPreview && imagesPreview.length == 0 ) && (
                                    <label className="img-label">
                                        + Add Images
                                        <br />
                                        <span>up to 5 images</span>
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
                        <br />
                    </section>
                    <Button
                        variant="primary"                        
                        type="submit01"
                        className="d-flex align-items-center"
                        onClick={(e) => submit(e)}
                        disabled={loading ? true : false}
                    >
                        <Spinner animation="border" variant="light" className={loading ? "me-2" : "d-none"} />
                        {loading ? "Uploading..." : "Submit"}
                    </Button>
                </Form>
            </Card>
        </div>
    )
}
