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

    //Update Details Section
    const [details, setDetails] = useState([{ summary: '' }]);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.get(`${url}/project/getDetail`);

                if (response.data) {
                    console.log(response.data.details)
                    setDetails(response?.data?.details);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchDetails();
    }, []);


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
                console.log(response.data.images)
            })
            .catch((error) => {
                console.error('Error retrieving about images:', error);
            });
    };
    const fetchDetails = () => {
        axios
            .patch(`${url}/project/updateDetail`)
            .then((response) => {
                setAboutImages(response.data.images);
                console.log(response.data.images)
            })
            .catch((error) => {
                console.error('Error retrieving about images:', error);
            });
    };
    return (
        <div className="about-wrapper text-white" style={{ height: '100% !important', display: props.showAbout ? 'block' : 'none', backgroundColor: 'black', zIndex: '10000' }}>
            <div className="about-section">
                {title !== "" && (
                    <div className="index-innersection h-100">
                        {
                            props.fromAbout && (
                                <>
                                    <h1>{title}</h1>
                                    <h1 style={{
                                        background: '-webkit-linear-gradient(#FF1366, #0033ff)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        textFillColor: 'transparent',
                                        fontWeight: '1000',
                                        backgroundPosition: 'center'
                                    }}>
                                        {detail}
                                    </h1>

                                    {details?.map((data, index) =>
                                        <h1 style={{
                                            background: index < 4
                                                ? (index === 0
                                                    ? '-webkit-linear-gradient( #0033ff, #717171)'
                                                    : index === 1
                                                        ? '-webkit-linear-gradient(#0033ff, #FED800)'
                                                        : index === 2
                                                            ? '-webkit-linear-gradient(#FED800, #FED800)'
                                                            : index === 3
                                                                ? '-webkit-linear-gradient(#FED800, #0033ff)'
                                                                : '')
                                                : index > 3
                                                    ? (index % 2 === 0
                                                        ? '-webkit-linear-gradient(#FF1366, #0033ff)'
                                                        : '-webkit-linear-gradient(#80FE00, #0033ff)')
                                                    : '-webkit-linear-gradient(#FF1366, #0033ff)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            textFillColor: 'transparent',
                                            fontWeight: '1000',
                                            backgroundPosition: 'center'
                                            ,
                                            width: "80%",
                                            marginTop: "50px"
                                        }}>
                                            {data?.summary}
                                        </h1>
                                    )}
                                    <br /><br />
                                </>
                            )
                        }
                        <>
                            <br /><br />
                            <h1
                                style={{
                                    background: '-webkit-linear-gradient(#FF1366, #0033ff)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    fontWeight: '1000',
                                    backgroundPosition: 'center'
                                }}
                            >{email}</h1>
                            <h1 style={{
                                background: '-webkit-linear-gradient(#FF1366, #00FF98)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                                fontWeight: '1000',
                                backgroundPosition: 'center'
                            }}>{locTxt}</h1>
                            <br /><br />

                            <br /><br />
                            <a href={instUrl} target="_blank"
                                style={{
                                    background: '-webkit-linear-gradient(#00FE89, #898989)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    fontWeight: '1000',
                                    backgroundPosition: 'center'
                                }}
                            >INSTAGRAM</a>
                            <br />
                            <a href={repName} target="_blank"
                                style={{
                                    background: '-webkit-linear-gradient(#CDCDCD, #FF4E00)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    fontWeight: '1000',
                                    backgroundPosition: 'center'
                                }}
                            >LINKEDIN</a>
                            {/* <br /><br /> */}
                            {/* <h1
                                style={{
                                    background: '-webkit-linear-gradient(#FF1366, #0033ff)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    fontWeight: '1000',
                                    backgroundPosition: 'center'
                                }}
                            >{repName}</h1> */}
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
