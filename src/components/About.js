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
    const [textColors, setTextColors] = useState();

    const navigate = useNavigate();

    //Update Details Section
    const [details, setDetails] = useState([{ summary: '' }]);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.get(`${url}/project/getDetail`);

                if (response.data) {
                    // console.log('yes', response.data.details)
                    setDetails(response?.data?.details);
                    setTextColors(response?.data)
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
                // console.log(response.data.images)
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
                // console.log(response.data.images)
            })
            .catch((error) => {
                console.error('Error retrieving about images:', error);
            });
    };

    function extractRGBAs(gradientString) {
        const rgbaRegex = /rgba?\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/gi;
        const rgbaValues = [];

        let match;
        while ((match = rgbaRegex.exec(gradientString)) !== null) {
            const r = parseInt(match[1], 10);
            const g = parseInt(match[2], 10);
            const b = parseInt(match[3], 10);
            const a = parseFloat(match[4]);

            rgbaValues.push(`RGBA(${r},${g},${b},${a})`);
        }

        // console.log('-------', rgbaValues)
        return rgbaValues;
    }
    return (
        <div className="about-wrapper text-white" style={{ height: '100% !important', display: props.showAbout ? 'block' : 'none', backgroundColor: 'black', zIndex: '10000' }}>
            <div className="about-section">
                {title !== "" && (
                    <div className="index-innersection h-100">
                        {
                            props.fromAbout && (
                                <>
                                    <h1 style={{
                                        background: `-webkit-${textColors?.titleColor}`,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        textFillColor: 'transparent',
                                        fontWeight: '1000',
                                        backgroundPosition: 'center'
                                    }}
                                    >{title}</h1>
                                    <h1 style={{
                                        background: `-webkit-${textColors?.detailColor}`,
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
                                            // background: '-webkit- #0033ff, #717171)',
                                            background: `-webkit-${data?.color}`,

                                            // background: `- webkit - ${data.color}`,
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
                                    background: `-webkit-${textColors?.emailColor}`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    fontWeight: '1000',
                                    backgroundPosition: 'center'
                                }}
                                className='my-gradients-colors'
                            >{email}</h1>
                            <h1 style={{
                                background: `-webkit-${textColors?.phoneColor}`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                                fontWeight: '1000',
                                backgroundPosition: 'center'
                            }}
                                className='my-gradients-colors'
                            >{locTxt}</h1>
                            <br /><br />

                            <br /><br />
                            <h1
                                style={{
                                    background: `-webkit-${textColors?.instaColor}`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    fontWeight: '1000',
                                    backgroundPosition: 'center'
                                }}
                                className='my-gradients-colors'
                            >

                                <a href={instUrl} target="_blank"
                                    style={{
                                        textDecoration: 'none',
                                        fontWeight: '1000',
                                    }}
                                >INSTAGRAM</a>
                            </h1>
                            <br />
                            <a href={repName} target="_blank" style={{ textDecoration: 'none', fontWeight: '1000' }}

                            >
                                <h1
                                    style={{
                                        background: `-webkit-${textColors?.linkedColor}`,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        textFillColor: 'transparent',
                                        fontWeight: '1000',
                                        backgroundPosition: 'center'
                                    }}
                                    className='my-gradients-colors'
                                >

                                    LINKEDIN
                                </h1>
                            </a>
                            {/* <br /><br /> */}
                            {/* <h1
                                style={{
                                    background: '-webkit-#FF1366, #0033ff)',
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
                <div className='p-4 mb-10 sm:p-6 md:p-8 lg:p-20'>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-2">
                        {aboutImages &&
                            aboutImages.map((data, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div className='w-full my-auto'>

                                        <img
                                            src={`${url}/about/${data?.image}`}
                                            alt={`About Image ${index + 1}`}
                                            className="h-full w-full my-auto object-cover"
                                        />
                                    </div>
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
        </div >
    )
}
