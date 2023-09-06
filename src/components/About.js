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
    const [sizes, setSizes] = useState()
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.get(`${url}/project/getDetail`);

                if (response.data) {
                    console.log('yes', response.data.details)
                    setSizes(response?.data?.sizes)
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
    // console.log('2222222222220', sizes?.Email.textSize)
    const backgroundStyleTitle = textColors?.titleColor?.includes("linear-gradient") ? `-webkit-${textColors?.titleColor}` : textColors?.titleColor;

    return (
        <div className="about-wrapper text-white" style={{ height: '100% !important', display: props.showAbout ? 'block' : 'none', backgroundColor: 'black', zIndex: '10000', }}>
            <div className="about-section">
                {title !== "" && (
                    <div className="index-innersection h-100">
                        {
                            props.fromAbout && (
                                <>
                                    <h1 style={{
                                        background: textColors?.titleColor?.includes("linear-gradient") ? `-webkit-${textColors?.titleColor}` : textColors?.titleColor,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        textFillColor: 'transparent',
                                        fontWeight: '1000',
                                        backgroundPosition: 'center',
                                        fontSize: `${sizes?.title1.textSize}vw`,
                                        marginBottom: `${sizes?.title1.spacing}px`
                                    }}
                                    >{title}</h1>
                                    <h1 style={{
                                        background:
                                            textColors?.detailColor?.includes("linear-gradient") ? `-webkit-${textColors?.detailColor}` : textColors?.detailColor,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        textFillColor: 'transparent',
                                        fontWeight: '1000',
                                        backgroundPosition: 'center',
                                        fontSize: `${sizes?.title2.textSize}vw`,
                                        marginTop: `${sizes?.title2.spacing}px`,
                                        marginBottom: `${sizes?.title2.spacing}px`
                                    }}>
                                        {detail}
                                    </h1>

                                    {details?.map((data, index) => {
                                        const isLink = data?.summary?.startsWith("WWW.") || data?.summary?.startsWith("http") || data?.summary?.startsWith("https") || data?.summary?.startsWith("www.")

                                        const link = isLink ? (data?.summary?.startsWith("http") ? data?.summary : `http://${data?.summary}`) : '';
                                        const backgroundStyle = data?.color?.includes("linear-gradient") ? `-webkit-${data?.color}` : data?.color;

                                        console.log('MYYYYYYYYYYYYYYYYYYY DATA', data.spacing)
                                        return isLink ? (
                                            <a
                                                href={link}
                                                style={{
                                                    display: 'block',
                                                    background: backgroundStyle,
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text',
                                                    textFillColor: 'transparent',
                                                    fontWeight: '1000',
                                                    backgroundPosition: 'center',
                                                    fontSize: `${Number(data?.textSize)}vw`,
                                                    // fontSize: data?.fontSize + "vw",
                                                    width: "100%",
                                                    marginTop: `${Number(data?.spacing)}px`,
                                                    marginBottom: `${Number(data?.spacing)}px`
                                                }}
                                                target='_blank'
                                            >
                                                {data?.summary}
                                            </a>
                                        ) : (
                                            <h1
                                                style={{
                                                    background: backgroundStyle,
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text',
                                                    textFillColor: 'transparent',
                                                    fontWeight: '1000',
                                                    backgroundPosition: 'center',
                                                    fontSize: `${Number(data?.textSize)}vw`,
                                                    width: "100%",
                                                    marginTop: `${Number(data?.spacing)}px`,
                                                    marginBottom: `${Number(data?.spacing)}px`
                                                }}
                                            >
                                                {data?.summary}
                                            </h1>
                                        );
                                    })}



                                </>
                            )
                        }
                        <>

                            <h1
                                style={{
                                    background:
                                        textColors?.emailColor?.includes("linear-gradient") ? `-webkit-${textColors?.emailColor}` : textColors?.emailColor,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    fontWeight: '1000',
                                    backgroundPosition: 'center',
                                    fontSize: `${sizes?.Email.textSize}vw`,
                                    marginBottom: `${sizes?.Email.spacing}px`,
                                    marginTop: `${sizes?.Email.spacing}px`
                                }}
                                className='my-gradients-colors'
                            >{email}</h1>
                            <h1 style={{
                                background:
                                    textColors?.phoneColor?.includes("linear-gradient") ? `-webkit-${textColors?.phoneColor}` : textColors?.phoneColor,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                                fontWeight: '1000',
                                backgroundPosition: 'center',
                                fontSize: `${sizes?.Phone.textSize}vw`,
                                marginBottom: `${sizes?.Phone.spacing}px`,
                                marginTop: `${sizes?.Phone.spacing}px`
                            }}
                                className='my-gradients-colors'
                            >{locTxt}</h1>



                            <a href={instUrl} target="_blank"
                                style={{
                                    textDecoration: 'none',
                                    fontWeight: '1000',
                                }}
                            >
                                <h1
                                    style={{
                                        background:
                                            textColors?.instaColor?.includes("linear-gradient") ? `-webkit-${textColors?.instaColor}` : textColors?.instaColor,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        textFillColor: 'transparent',
                                        fontWeight: '1000',
                                        backgroundPosition: 'center',
                                        fontSize: `${sizes?.InstagramUrl.textSize}vw`,
                                        marginBottom: `${sizes?.InstagramUrl.spacing}px`,
                                        marginTop: `${sizes?.InstagramUrl.spacing}px`
                                    }}
                                    className='my-gradients-colors'
                                >

                                    INSTAGRAM
                                </h1>
                            </a>

                            <a href={repName} target="_blank" style={{ textDecoration: 'none', fontWeight: '1000' }}

                            >
                                <h1
                                    style={{
                                        background:
                                            textColors?.linkedColor?.includes("linear-gradient") ? `-webkit-${textColors?.linkedColor}` : textColors?.linkedColor,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        textFillColor: 'transparent',
                                        fontWeight: '1000',
                                        backgroundPosition: 'center',
                                        fontSize: `${sizes?.LinkedInUrl.textSize}vw`,
                                        marginBottom: `${sizes?.LinkedInUrl.spacing}px`,
                                        marginTop: `${sizes?.LinkedInUrl.spacing}px`
                                    }}
                                    className='my-gradients-colors'
                                >

                                    LINKEDIN
                                </h1>
                            </a>
                            {/*  */}
                            {/* <h1
                                style={{
                                    background: '-webkit-#FF1366, #0033ff)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    fontWeight: '1000',
                                    backgroundPosition: 'center',
                                    fontSize: `${textColors?.fontSize}vw`,
                                    marginTop: `${textColors?.lineHeight}px`
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
