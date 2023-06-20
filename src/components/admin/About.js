import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Card, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Admin.css";
import { toast } from 'react-toastify';
import url from '../../constants/url';


export default function About() {
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [locTxt, setLocTxt] = useState("");
    const [email, setEmail] = useState("");
    const [instUrl, setInstaUrl] = useState("");
    const [repTxt, setRepTxt] = useState("_Represented By");
    const [repName, setRepName] = useState("");
    const [repEmail, setRepEmail] = useState("");
    // const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const [aboutImages, setAboutImages] = useState([]);

    useEffect(() => {
        fetchAboutImages();
    }, []);

    const fetchAboutImages = () => {
        axios
            .get(`${url}/project/about-image/get`)
            .then((response) => {
                setAboutImages(response.data.images);
                console.log(response.data.images)
            })
            .catch((error) => {
                console.error('Error retrieving about images:', error);
            });
    };
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // aboutImages.forEach((data) => {
    //     console.log("aobut -> ", data.image)
    // })

    const submitImage = (e) => {
        e.preventDefault();
        setLoading(true);
        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);

            axios
                .post(`${url}/project/upload/about`, formData)
                .then((response) => {
                    console.log('Image uploaded successfully!');
                    // Handle the response as needed
                    fetchAboutImages();
                    setSelectedFile(null)
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error uploading image:', error);
                    // Handle the error as needed
                    setLoading(false);
                });
        } else {
            console.warn('No file selected');
            setLoading(false);
        }
        setLoading(false);
    };

    const submitData = async (e) => {
        e.preventDefault();
        setLoading(true);
        const payload = {
            title: title,
            detail: detail,
            locTxt: locTxt,
            email: email,
            instaUrl: instUrl,
            repTxt: repTxt,
            repName: repName,
            repEmail: repEmail
        }
        const response = await axios.post(`${url}/project/updateAbout`, payload);
        if (response.status === 210) {
            toast("Updated successfully");
        } else {
            toast(JSON.stringify(response));
        }
        setLoading(false);
    }
    const handleImageDelete = async (id) => {
        console.log("ID : ", id)
        axios
            .delete(`${url}/project/about-image/delete/${id}`)
            .then((response) => {
                console.log(response.data.message);
                fetchAboutImages();
            })
            .catch((error) => {
                console.error('Error deleting about image:', error);
            });
    }


    useEffect(() => {
        const getAboutPayload = async () => {
            const response = await axios.get(`${url}/project/getAbout`);
            if (response.status == 210) {
                let payload = response.data.data;
                setTitle(payload.title);
                setDetail(payload.detail);
                setLocTxt(payload.locTxt);
                setEmail(payload.email);
                setInstaUrl(payload.instaUrl);
                setRepName(payload.repName);
                setRepEmail(payload.repEmail);
            }
        }
        getAboutPayload();
    }, [])
    const handleUploadClick = () => {
        fileInputRef.current.click();
    };
    let uploadStyle =
        { display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black', width: '110px', height: '100px', borderRadius: "10px", cursor: 'pointer', marginBottom: '10px' }

    return (
        <div className="d-flex align-items-center justify-content-center h-100 flex-col">
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
                        <Form.Label>Detail</Form.Label>
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
                        <Form.Label>Based In</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Location"
                            value={locTxt}
                            onChange={(e) => {
                                setLocTxt(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Instagram Url</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Instagram URL"
                            value={instUrl}
                            onChange={(e) => {
                                setInstaUrl(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Represented By</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Represented Name"
                            value={repName}
                            onChange={(e) => {
                                setRepName(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Represented Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Represented Email"
                            value={repEmail}
                            onChange={(e) => {
                                setRepEmail(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit01"
                        className="d-flex align-items-center"
                        onClick={(e) => submitData(e)}
                        disabled={loading ? true : false}
                    >
                        <Spinner animation="border" variant="light" className={loading ? "me-2" : "d-none"} />
                        {loading ? "Uploading..." : "Submit"}
                    </Button>
                </Form>
                <Form className='mt-5'>
                    <div >
                        <label htmlFor="fileInput">Choose an image:</label>
                        <input
                            type="file"
                            id="fileInput"
                            name="image"
                            className="file-input"
                            onChange={handleFileChange}
                            ref={fileInputRef}
                        />
                        <div style={uploadStyle} onClick={handleUploadClick}>
                            <p>Upload +</p>
                        </div>
                        {selectedFile && (
                            <div className='mb-2'>
                                {/* <p>Selected file: {selectedFile.name}</p> */}
                                <img
                                    src={URL.createObjectURL(selectedFile)}
                                    alt="Selected File"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            </div>
                        )}
                    </div>
                    <Button
                        variant="primary"
                        type="submit01"
                        className="d-flex align-items-center"
                        onClick={(e) => submitImage(e)}
                        disabled={loading ? true : false}
                    >
                        <Spinner animation="border" variant="light" className={loading ? "me-2" : "d-none"} />
                        {loading ? "Uploading..." : "Upload "}
                    </Button>
                </Form>
                <div className="grid grid-cols-4 gap-6 mt-2">
                    {aboutImages &&
                        aboutImages.map((data, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span
                                    className="mb-[-2px] bg-red-600 p-1 text-white border cursor-pointer"
                                    onClick={() => handleImageDelete(data._id)}
                                >
                                    Delete
                                </span>
                                <img
                                    src={`${url}/about/${data?.image}`}
                                    alt={`About Image ${index + 1}`}
                                    className="h-[150px] w-[150px]"
                                />
                            </div>
                        ))}
                </div>
            </Card>

        </div >
    )
}
