import React, { useEffect, useState } from 'react'
import { Card, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import base_url from "../../constants/url";
import { toast } from 'react-toastify';
import API from '../../services/API';

export default function HomeIndex() {
    const [loading, setLoading] = useState(false);
    const [homeIndexId, setHomeIndexId] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const MAX_LENGTH = 5;

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

        if (selectedFileLength > MAX_LENGTH || (uploadedFileLength + selectedFileLength) > MAX_LENGTH) {
            e.preventDefault();
            alert(`Cannot upload files more than ${MAX_LENGTH - 1}`);
            return;
        }

        let promises = [];
        [...e.target.files].forEach(file => {
            promises.push(convertToBase64(file));
        });

        Promise.all(promises).then(result => {
            setImagesPreview(current => [...current, ...result])
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
        let selectedArr = [...selectedFiles];

        for (let i = 0; i < imagesPreview.length; i++) {
            if (imagesPreview[i].split(":")[0] !== "data") {
                imagesArr.push(imagesPreview[i]);
            }
        }

        const payload = {
            images: imagesArr,
            imagess: selectedArr
        }

        if (homeIndexId === 0) {
            const response = await API.upload(`project/home`, payload);
            if (response.status == 200) {
                toast("Uploaded successfully");
                setSelectedFiles([]);
            } else {
                toast(JSON.stringify(response))
            }
        } else {
            const response = await API.patch(`project/home/${homeIndexId}`, payload);
            if (response.status == 225) {
                toast("Uploaded successfully");
                setSelectedFiles([]);
            } else {
                toast(JSON.stringify(response));
            }
        }
        setLoading(false);
    }

    useEffect(() => {
        const loadHomeIndexImages = async () => {
            const response = await API.get(`project/home`);
            console.log(response.data);
            if (response.status == 210) {
                setImagesPreview(response.data.home[0]?.images || []);
                setHomeIndexId(response.data.home[0]?._id || 0);
            } else {
                console.log(response.message);
            }
        }

        loadHomeIndexImages();
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
                                                {image.split("/")[0] == "data:image" || !image.includes("mp4") ?
                                                    <img src={image.split(":")[0] === "data" ? image : (base_url + "/home/" + image)} width="150" alt="upload" />
                                                    : <video autoPlay loop muted>
                                                        <source src={image.split(":")[0] === "data" ? image : base_url + "/home/" + image} type="video/mp4" />
                                                        <source src={image.split(":")[0] === "data" ? image : base_url + "/home/" + image} type="video/ogg" />
                                                    </video>
                                                }
                                                <button type="button" onClick={() => removePreviewImage(index)}>
                                                    delete image
                                                </button>
                                                <p>{index}</p>
                                            </div>)

                                    }
                                })}
                            {
                                (imagesPreview && imagesPreview.length < 6) && (
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
                        type="submit"
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
