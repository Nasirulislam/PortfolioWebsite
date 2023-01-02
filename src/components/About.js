import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Index/Index.css";
import url from '../constants/url';
import { Link } from 'react-router-dom';
import IndexItem from './Index/indeItem';


export default function About(props) {
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [locTxt, setLocTxt] = useState("");
    const [email, setEmail] = useState("");
    const [instUrl, setInstaUrl] = useState("");
    const [repTxt, setRepTxt] = useState("_Represented By");
    const [repName, setRepName] = useState("");
    const [repEmail, setRepEmail] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getAboutPayload = async () => {
            const response = await axios.get(`${url}/project/getAbout`);
            if (response.status == 210) {
                let payload = response.data.data;
                console.log(payload)
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
        <div className="bg-white" style={{ height: '100% !important',  display: props.showAbout ? 'block' : 'none' }}>
            <div className="about-section">
                {title !== "" && (
                    <div className="index-innersection h-100">
                        <h1>{title}</h1>
                        <h1>{detail}</h1>
                        <h1>{locTxt}</h1>
                        <h1>{email}</h1>
                        <h1>{instUrl}</h1>
                        <h1>{repName}</h1>
                    </div>
                )}

                {props.portfolios.length > 0 && (
                    <ul id="about-portfolio">
                        {
                            props.portfolios.map((item, index) => {
                                return (
                                    <li key={index} style={{ color: 'blue' }}><Link to={item.slug}>{item.name}</Link></li>
                                )
                            })
                        }
                    </ul>
                )}

            </div>
        </div>
    )
}
