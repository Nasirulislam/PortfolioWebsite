import React, { useEffect, useState } from 'react'
import { Card, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function HomeIndex() {
    const [loading, setLoading] = useState(false);
    const [imagesPreview, setImagesPreview] = useState([]);
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
    }

    const removePreviewImage = (index) => {

        let filteredImages = [];
        imagesPreview.forEach((item, key) => {
            if (key !== index) {
                filteredImages.push(item);
            }
        });
        if(typeof filteredImages[0] == "undefined") {
            filteredImages = [];
        }
        setImagesPreview(filteredImages);
    }

    return (
        <div className="d-flex align-items-center justify-content-center h-100">
            <Card className="p-3 my-5 form-card">
                <Form>                    
                    <section>
                        <div className="images">
                            {imagesPreview &&
                                imagesPreview.map((image, index) => {
                                    return (
                                        <div key={index} className="image">
                                            <img src={image} width="150" alt="upload" />
                                            <button type="button" onClick={() => removePreviewImage(index)}>
                                                delete image
                                            </button>
                                            <p>{index + 1}</p>
                                        </div>
                                    );
                                })}
                            {
                                imagesPreview.length < 5 && (
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
                    // onClick={(e) => submitData(e)}
                    // disabled={loading || displayImage.length === 0  ? true : false}
                    >
                        <Spinner animation="border" variant="light" className={loading ? "me-2" : "d-none"} />
                        {loading ? "Uploading..." : "Submit"}
                    </Button>
                </Form>
            </Card>
        </div>
    )
}
