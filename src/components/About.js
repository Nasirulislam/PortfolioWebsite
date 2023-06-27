import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Index/Index.css";
import url from '../constants/url';
import { useNavigate } from 'react-router-dom';
import AboutImage from '../Assets/images/WEB_LOGO_LAYOUT.jpg';

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
    const [aboutImages, setAboutImages] = useState([]);

    const navigate = useNavigate();

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
    useEffect(() => {
        fetchAboutImages();
    }, []);

    const fetchAboutImages = () => {
        axios
            .get(`${url}/project/about-image/get`)
            .then((response) => {
                setAboutImages(response.data.images);
                // console.log(response.data.images)
            })
            .catch((error) => {
                console.error('Error retrieving about images:', error);
            });
    };
    return (
        <div className="about-wrapper text-white" style={{ height: '100% !important', display: props.showAbout ? 'block' : 'none', backgroundColor: 'black' }}>
            <div className="about-section">
                {title !== "" && (
                    <div className="index-innersection h-100">
                        {
                            props.fromAbout && (
                                <>
                                    <h1>{title}</h1>
                                    <h1 style={{ whiteSpace: 'pre-line' }}>{detail}</h1>
                                    <br /><br />
                                </>
                            )
                        }
                        <>
                            <br /><br />
                            <h1>{locTxt}</h1>
                            <br /><br />
                            <h1>{email}</h1>
                            <br /><br />
                            <a href={instUrl} target="_blank">Instagram</a>
                            <br /><br />
                            <h1>{repName}</h1>
                        </>
                    </div>
                )}

                {/* <img src={AboutImage} className="w-100" /> */}
                <div className='p-20  py-20 px-44'>
                    <div className="grid grid-cols-5 gap-6 mt-2">
                        {aboutImages &&
                            aboutImages.map((data, index) => (
                                <div key={index} className="flex flex-col items-center">

                                    <img
                                        src={`${url}/about/${data?.image}`}
                                        alt={`About Image ${index + 1}`}
                                        className="h-[150px] w-[150px] object-cover"
                                    />
                                </div>
                            ))}
                    </div>
                </div>
                {/* {props.portfolios.length > 0 && (
                    <ul id="about-portfolio">
                        {
                            props.portfolios.map((item, index) => {
                                return (
                                    <li key={index} style={{ color: 'blue' }}><a href="#" onClick={(e) => gotoPortfolio(e,item.slug)}>{item.name}</a></li>
                                )
                            })
                        }
                    </ul>
                )} */}

            </div>
        </div>
    )
}
