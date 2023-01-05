import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
    const [loading, setLoading] = useState(false);

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
            </Card>
        </div>
    )
}
