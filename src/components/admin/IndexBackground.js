import React, { useEffect, useState } from 'react';
import { Card, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from 'react-toastify';
import base_url from "../../constants/url";


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
        const formData = new FormData();

        let counter = 0;
        for (let i = 0; i < imagesPreview.length; i++) {
            if (imagesPreview[i].split(":")[0] !== "data") {
                formData.append("images["+i+"]", imagesPreview[i]);
                counter++;
            }
        }

        Array.from(selectedFiles).forEach((file,index) => { formData.append("imagess", file) });
        // formData.append("imagess", selectedFiles)
        if(counter == 0) {
            formData.append("images", []);
        }
        if (homeIndexId == 0) {
            await axios.post(`${base_url}/project/home`, formData, { 'Content-Type': 'multipart/form-data' }).then((response) => {
                if (response.status == 210) {
                    toast("Uploaded successfully");
                    setSelectedFiles([]);
                    setImagesPreview([]);
                }

            }).catch(err => {
                toast(JSON.stringify(err));
            })
            setLoading(false);
        } else {
            await axios.patch(`${base_url}/project/home/${homeIndexId}`, formData, { 'Content-Type': 'multipart/form-data' }).then((response) => {
                if (response.status == 225) {
                    toast("Uploaded successfully");
                    setSelectedFiles([]);
                    setImagesPreview([]);
                }

            }).catch(err => {
                toast(JSON.stringify(err));
            })
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
                                                    // image.includes("mp4") ? <video src={base_url + "/home/" + image} />
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
