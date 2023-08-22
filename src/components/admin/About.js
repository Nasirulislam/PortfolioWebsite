import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Card, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Admin.css";
import { toast } from 'react-toastify';
import url from '../../constants/url';
import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker'



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
    const [showColor, setShowColor] = useState({ show: false, index: 0 });

    // color states 
    const [showTitleColor, setShowTitleColor] = useState(false);
    const [showDetailColor, setShowDetailColor] = useState(false);
    const [showEmailColor, setShowEmailColor] = useState(false);
    const [showPhoneColor, setShowPhoneColor] = useState(false);
    const [showInstaColor, setShowInstaColor] = useState(false);
    const [showLinkedinColor, setShowLinkedinColor] = useState(false);
    const [showRepresentedColor, setShowRepresentedColor] = useState(false);


    // single colors 
    const [titleColor, setTitleColor] = useState('');
    const [detailColor, setDetailColor] = useState('');
    const [emailColor, setEmailColor] = useState('');
    const [phoneColor, setPhoneColor] = useState('');
    const [instaColor, setInstaColor] = useState('');
    const [linkedColor, setLinkedColor] = useState('');
    const [resEmailColor, setresEmailColor] = useState('');

    // Choose Line height and font size 
    const [fontSize, setFontSize] = useState('');
    const [lineHeight, setLineHeight] = useState('');

    //Details summary section
    const [details, setDetails] = useState([{ summary: '', color: '',textSize:0, spacing:0 }]);
    // spacing 
    const [sizes,setSizes] = useState({
        title1: {
            textSize: 0,
            spacing: 0
        },
        title2: {
            textSize: 0,
            spacing: 0
        },
        
        Summary1: {
            textSize: 0,
            spacing: 0
        },
      
        Email: {
            textSize: 0,
            spacing: 0
        },
        Phone: {
            textSize: 0,
            spacing: 0
        },
        InstagramUrl: {
            textSize: 0,
            spacing: 0
        },
        LinkedInUrl: {
            textSize: 0,
            spacing: 0
        }
    })

    const handleCloseAllColorPickers = () => {
        setShowTitleColor(false);
        setShowDetailColor(false)
        setShowEmailColor(false);
        setShowPhoneColor(false);
        setShowInstaColor(false);
        setShowLinkedinColor(false);
        setShowRepresentedColor(false);
    };

    const handleChange = (index, event) => {
        const updatedDetails = [...details];
        updatedDetails[index].summary = event.target.value;
        setDetails(updatedDetails);
    };
    const handleSizeChange = (field, property, value) => {
        // Create a copy of the sizes state object to avoid mutating it directly
        const updatedSizes = { ...sizes };
        // Update the specified property for the given field
        updatedSizes[field][property] = value;
        // Update the state with the new sizes object
        setSizes(updatedSizes);
      };

    const handleChangeColor = (index, color) => {
        // console.log("Color Changed", index, color)
        const updatedDetails = [...details];
        updatedDetails[index].color = color;
        setDetails(updatedDetails);
    };

    const handleAdd = () => {
        setDetails([...details, { summary: '' }]);
    };

    const handleRemove = (index) => {
        const updatedDetails = [...details];
        updatedDetails.splice(index, 1);
        setDetails(updatedDetails);
    };

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.get(`${url}/project/getDetail`);

                if (response.data) {
                    console.log(response.data);
                    setFontSize(response?.data?.fontSize)
                    setLineHeight(response?.data?.lineHeight)
                    setDetails(response?.data?.details);
                    setTitleColor(response?.data?.titleColor);
                    setDetailColor(response?.data?.detailColor);
                    setEmailColor(response?.data?.emailColor);
                    setPhoneColor(response?.data?.phoneColor);
                    setInstaColor(response?.data?.instaColor);
                    setLinkedColor(response?.data?.linkedColor);

                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchDetails();
    }, []);

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
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };


    // useEffect(() =>{
    //     const h1Elements = document.getElementsById('summary');
    // },[details])

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
                    // console.log('Image uploaded successfully!');
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
            title: title || " ",
            detail: detail || " ",
            locTxt: locTxt || " ",
            email: email || "",
            instaUrl: instUrl || "",
            repTxt: repTxt || "",
            repName: repName || "",
            repEmail: repEmail || "",
        }

        const response = await axios.post(`${url}/project/updateAbout`, payload);

        if (response.status === 210) {
            toast("Updated successfully");
        } else {
            toast(JSON.stringify(response));
        }

        const payload2 = {
            fontSize: fontSize,
            lineHeight: lineHeight,
            titleColor: titleColor,
            detailColor: detailColor,
            details: details,
            emailColor: emailColor,
            phoneColor: phoneColor,
            instaColor: instaColor,
            linkedColor: linkedColor,
            resEmailColor: resEmailColor,

        }
        // console.log('here 123123123', payload2);

        setLoading(false);
        await axios.post(`${url}/project/updateDetail`, payload2).then(() => console.log('Success!')).catch(err => console.log);

        setLoading(false);
    }

    const handleImageDelete = async (id) => {
        // console.log("ID : ", id)
        axios
            .delete(`${url}/project/about-image/delete/${id}`)
            .then((response) => {
                // console.log(response.data.message);
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
                    {/* Choose Font Size */}
                    <Form.Group className="mb-3" style={{ position: 'relative' }} controlId="formBasicEmail">
                        <Form.Label style={{ fontWeight: '700' }} >Font Size in View Width (1 - 10):</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Font Size"
                            value={fontSize}
                            onChange={(e) => {
                                setFontSize(e.target.value);
                            }}
                        />

                    </Form.Group>
                    {/* Choose Line Height  */}
                    <Form.Group className="mb-3" style={{ position: 'relative' }} controlId="formBasicEmail">
                        <Form.Label style={{ fontWeight: '700' }} >Line Height in Pixles (0 - 100+)</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Line Height"
                            value={lineHeight}
                            onChange={(e) => {
                                setLineHeight(e.target.value);
                            }}
                        />

                    </Form.Group>


                    <Form.Group className="mb-3" style={{ position: 'relative' }} controlId="formBasicEmail">
                        <Form.Label style={{ fontWeight: '700' }} >Title:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Title"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                        <div style={{'display':'flex','gap':'20px',"align-items":"center","paddingTop":'1rem'}}>
                        <Button type="button" onClick={() => setShowTitleColor(!showTitleColor)} style={{ marginRight: "20px", backgroundColor: 'black', color: 'white' }}>
                            Color Picker
                        </Button>
                        {showTitleColor &&
                            <div style={{ position: "absolute", right: "5px", top: 0, backgroundColor: "white", border: "2px solid gray", borderRadius: "5px", textAlign: "center", fontWeight: "bold", boxShadow: "5px 10px 10px", zIndex: "100" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div></div><div>Color Picker for Title 1.</div><div style={{ cursor: "pointer", marginRight: "2px", color: "gray", fontWeight: "light" }} onClick={handleCloseAllColorPickers}>Close X</div>
                                </div>
                                <ColorPicker hideInputs hidePresets value={titleColor} onChange={(color) => setTitleColor(color)} />
                            </div>
                        }
                        <div style={{'display':'flex','gap':'1rem',"align-items":"center"}}>
                        <Form.Label style={{ fontWeight: '600','margin':'0px' }} >Size:</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter text size"
                            value={sizes.title1.textSize}
                            onChange={(e) =>
                            handleSizeChange('title1', 'textSize', e.target.value)
                            }
                           
                            />
                            <Form.Label style={{ fontWeight: '600','margin':'0px' }} >Spacing:</Form.Label>
                            <Form.Control
                            type="number"
                            placeholder="Enter spacing"
                            value={sizes.title1.spacing}
                            onChange={(e) =>
                            handleSizeChange('title1', 'spacing', e.target.value)
                            }
                          
                            />
                        </div>
                        </div>
                    </Form.Group>


                    <Form.Group className="mb-3" style={{ position: 'relative' }} controlId="formBasicPassword">
                    <Form.Label style={{ fontWeight: '600','margin':'0px' }} >Title:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Description"
                            value={detail}
                            onChange={(e) => {
                                setDetail(e.target.value);
                            }}
                        />
                        <div style={{'display':'flex','gap':'20px',"align-items":"center","paddingTop":'1rem'}}>
                        <Button type="button" onClick={() => setShowDetailColor(!showDetailColor)} style={{ marginRight: "20px", backgroundColor: 'black', color: 'white' }}>
                            Color Picker
                        </Button>
                        {showDetailColor &&
                            <div style={{ position: "absolute", right: "5px", top: 0, backgroundColor: "white", border: "2px solid gray", borderRadius: "5px", textAlign: "center", fontWeight: "bold", boxShadow: "5px 10px 10px", zIndex: "100" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div></div><div>Color Picker for Details 2.</div><div style={{ cursor: "pointer", marginRight: "2px", color: "gray", fontWeight: "light" }} onClick={handleCloseAllColorPickers}>Close X</div>
                                </div>
                                <ColorPicker hideInputs hidePresets value={detailColor} onChange={(color) => setDetailColor(color)} />
                            </div>
                        }
                        <div style={{'display':'flex','gap':'1rem',"align-items":"center"}}>
                        <Form.Label style={{ fontWeight: '600','margin':'0px' }} >Size:</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter text size"
                            value={sizes.title2.textSize}
                            onChange={(e) =>
                            handleSizeChange('title2', 'textSize', e.target.value)
                            }
                          
                            />
                            <Form.Label style={{ fontWeight: '600','margin':'0px' }} >Spacing:</Form.Label>
                            <Form.Control
                            type="number"
                            placeholder="Enter spacing"
                            value={sizes.title2.spacing}
                            onChange={(e) =>
                            handleSizeChange('title2', 'spacing', e.target.value)
                            }
                        
                            />
                        </div>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ position: 'relative' }} controlId="formBasicDetails">
                        <Form.Label style={{ fontWeight: '700' }} >Summary:</Form.Label>
                        {details?.map((detail, index) => (
                            <div style={{ position: "relative" }} id={`summaryNo${index}`} class="summary">
                                <p>{index + 1}.</p>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter Summary"
                                    value={detail.summary}
                                    onChange={(event) => handleChange(index, event)}
                                    style={{ margin: "5px 0px" }}
                                />
                                <div style={{'display':'flex','gap':'20px',"align-items":"center","paddingBlock":'1rem'}}>
                                {index > 0 && (
                                    <Button type="button" variant="danger" onClick={() => handleRemove(index)} style={{ marginRight: "20px", backgroundColor: 'red', color: 'white' }}>
                                        Remove-
                                    </Button>
                                )}
                                <Button type="button" onClick={() => setShowColor({ show: true, index: index })} style={{ marginRight: "20px", backgroundColor: 'black', color: 'white' }}>
                                    Color Picker
                                </Button>
                                {showColor.show && showColor.index === index &&
                                    <div style={{ position: "absolute", right: "5px", top: 0, backgroundColor: "white", border: "2px solid gray", borderRadius: "5px", textAlign: "center", fontWeight: "bold", boxShadow: "5px 10px 10px", zIndex: "100" }}>
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <div></div><div>Color Picker for summary no {index + 1}</div><div style={{ cursor: "pointer", marginRight: "2px", color: "gray", fontWeight: "light" }} onClick={() => setShowColor({ show: false, index: index })}>Close X</div>
                                        </div>
                                        <ColorPicker hideInputs hidePresets value={details[index].color} onChange={(color) => handleChangeColor(index, color)} />
                                    </div>
                                }
                                <div style={{'display':'flex','gap':'1rem',"align-items":"center"}}>
                                <Form.Label style={{ fontWeight: '600','margin':'0px' }} >Size:</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter text size"
                            value={sizes.Summary1.textSize}
                            onChange={(e) =>
                            handleSizeChange('Phone', 'textSize', e.target.value)
                            }
                            />
                            <Form.Label style={{ fontWeight: '600','margin':'0px' }} >Spacing:</Form.Label>
                            <Form.Control
                            type="number"
                            placeholder="Enter spacing"
                            value={sizes.Summary1.spacing}
                            onChange={(e) =>
                            handleSizeChange('Summary1', 'spacing', e.target.value)
              }
                            />
                        </div>
                        </div>
                            </div>
                        ))}
                        <Button type="button" onClick={handleAdd} style={{ backgroundColor: 'green', color: 'white' }}>
                            Add+
                        </Button>
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ position: 'relative' }} controlId="formBasicPassword" >
                        <Form.Label style={{ fontWeight: '700' }} >Email:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <div style={{'display':'flex','gap':'20px',"align-items":"center","paddingTop":'1rem'}}>
                        <Button type="button" onClick={() => setShowEmailColor(!showEmailColor)} style={{ marginRight: "20px", backgroundColor: 'black', color: 'white' }}>
                            Color Picker
                        </Button>
                        {showEmailColor &&
                            <div style={{ position: "absolute", right: "5px", top: 0, backgroundColor: "white", border: "2px solid gray", borderRadius: "5px", textAlign: "center", fontWeight: "bold", boxShadow: "5px 10px 10px", zIndex: "100" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div></div><div>Color Picker for Email 3.</div><div style={{ cursor: "pointer", marginRight: "2px", color: "gray", fontWeight: "light" }} onClick={handleCloseAllColorPickers}>Close X</div>
                                </div>
                                <ColorPicker hideInputs hidePresets value={emailColor} onChange={(color) => setEmailColor(color)} />
                            </div>
                        }
                        <div style={{'display':'flex','gap':'1rem',"align-items":"center"}}>
                        <Form.Label style={{ fontWeight: '600','margin':'0px' }} >Size:</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter text size"
                            value={sizes.Email.textSize}
                            onChange={(e) =>
                            handleSizeChange('Email', 'textSize', e.target.value)
                            }
                            />
                            <Form.Label style={{ fontWeight: '600','margin':'0px' }} >Spacing:</Form.Label>
                            <Form.Control
                            type="number"
                            placeholder="Enter spacing"
                            value={sizes.Email.spacing}
                            onChange={(e) =>
                            handleSizeChange('Email', 'spacing', e.target.value)
                            } 
                            />
                        </div>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ position: 'relative' }} controlId="formBasicPassword">
                        <Form.Label style={{ fontWeight: '700' }} >Phone:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Phone"
                            value={locTxt}
                            onChange={(e) => {
                                setLocTxt(e.target.value);
                            }}
                        />
                        <div style={{'display':'flex','gap':'20px',"align-items":"center","paddingTop":'1rem'}}>
                        <Button type="button" onClick={() => setShowPhoneColor(!showPhoneColor)} style={{ marginRight: "20px", backgroundColor: 'black', color: 'white' }}>
                            Color Picker
                        </Button>
                        {showPhoneColor &&
                            <div style={{ position: "absolute", right: "5px", top: 0, backgroundColor: "white", border: "2px solid gray", borderRadius: "5px", textAlign: "center", fontWeight: "bold", boxShadow: "5px 10px 10px", zIndex: "100" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div></div><div>Color Picker for Phone.</div><div style={{ cursor: "pointer", marginRight: "2px", color: "gray", fontWeight: "light" }} onClick={handleCloseAllColorPickers}>Close X</div>
                                </div>
                                <ColorPicker hideInputs hidePresets value={phoneColor} onChange={(color) => setPhoneColor(color)} />
                            </div>
                        }
                        <div style={{'display':'flex','gap':'1rem',"align-items":"center"}}>
                        <Form.Label style={{ fontWeight: '600','margin':'0px' }} >Size:</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter text size"
                            value={sizes.Phone.textSize}
                            onChange={(e) =>
                            handleSizeChange('Phone', 'textSize', e.target.value)
                            }
                            />
                            <Form.Label style={{ fontWeight: '600','margin':'0px' }} >Spacing:</Form.Label>
                            <Form.Control
                            type="number"
                            placeholder="Enter spacing"
                            value={sizes.Phone.spacing}
                            onChange={(e) =>
                            handleSizeChange('Phone', 'spacing', e.target.value)
                            }
                            />
                        </div>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ position: 'relative' }} controlId="formBasicEmail">
                        <Form.Label style={{ fontWeight: '700' }} >Instagram Url:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Instagram URL"
                            value={instUrl}
                            onChange={(e) => {
                                setInstaUrl(e.target.value);
                            }}
                        />
                        <div style={{'display':'flex','gap':'20px',"align-items":"center","paddingTop":'1rem'}}>
                        <Button type="button" onClick={() => setShowInstaColor(!showInstaColor)} style={{ marginRight: "20px", backgroundColor: 'black', color: 'white' }}>
                            Color Picker
                        </Button>
                        {showInstaColor &&
                            <div style={{ position: "absolute", right: "5px", top: 0, backgroundColor: "white", border: "2px solid gray", borderRadius: "5px", textAlign: "center", fontWeight: "bold", boxShadow: "5px 10px 10px", zIndex: "100" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div></div><div>Color Picker for Instagram.</div><div style={{ cursor: "pointer", marginRight: "2px", color: "gray", fontWeight: "light" }} onClick={handleCloseAllColorPickers}>Close X</div>
                                </div>
                                <ColorPicker hideInputs hidePresets value={instaColor} onChange={(color) => setInstaColor(color)} />
                            </div>
                        }
                        <div style={{'display':'flex','gap':'1rem',"align-items":"center"}}>
                        <Form.Label style={{ fontWeight: '600','margin':'0px' }} >Size:</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter text size"
                            value={sizes.InstagramUrl.textSize}
                            onChange={(e) =>
                            handleSizeChange('InstagramUrl', 'textSize', e.target.value)
                            }
                            />
                            <Form.Label style={{ fontWeight: '600','margin':'0px' }} >Spacing:</Form.Label>
                            <Form.Control
                            type="number"
                            placeholder="Enter spacing"
                            value={sizes.InstagramUrl.spacing}
                            onChange={(e) =>
                            handleSizeChange('InstagramUrl', 'spacing', e.target.value)
                            }
                            />
                        </div>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ position: 'relative' }} controlId="formBasicEmail">
                        <Form.Label style={{ fontWeight: '700' }} >LinkedIn Url:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter LinkedIn Url"
                            value={repName}
                            onChange={(e) => {
                                setRepName(e.target.value);
                            }}
                        />
                        <div style={{'display':'flex','gap':'20px',"align-items":"center","paddingTop":'1rem'}}>
                        <Button type="button" onClick={() => setShowLinkedinColor(!showLinkedinColor)} style={{ marginRight: "20px", backgroundColor: 'black', color: 'white' }}>
                            Color Picker
                        </Button>
                        {showLinkedinColor &&
                            <div style={{ position: "absolute", right: "5px", top: 0, backgroundColor: "white", border: "2px solid gray", borderRadius: "5px", textAlign: "center", fontWeight: "bold", boxShadow: "5px 10px 10px", zIndex: "100" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div></div><div>Color Picker for LinkedIn.</div><div style={{ cursor: "pointer", marginRight: "2px", color: "gray", fontWeight: "light" }} onClick={handleCloseAllColorPickers}>Close X</div>
                                </div>
                                <ColorPicker hideInputs hidePresets value={linkedColor} onChange={(color) => setLinkedColor(color)} />
                            </div>
                        }
                        <div style={{'display':'flex','gap':'1rem',"align-items":"center"}}>
                        <Form.Label style={{ fontWeight: '600','margin':'0px' }} >Size:</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter text size"
                            value={sizes.LinkedInUrl.textSize}
                            onChange={(e) =>
                            handleSizeChange('LinkedInUrl', 'textSize', e.target.value)
                            }
                            />
                            <Form.Label style={{ fontWeight: '600','margin':'0px' }} >Spacing:</Form.Label>
                            <Form.Control
                            type="number"
                            placeholder="Enter spacing"
                            value={sizes.LinkedInUrl.spacing}
                            onChange={(e) =>
                            handleSizeChange('LinkedInUrl', 'spacing', e.target.value)
                            }
                            />
                        </div>
                        </div>
                    </Form.Group>
                    {/* <Form.Group className="mb-3" style={{ position: 'relative' }} controlId="formBasicEmail">
                        <Form.Label style={{ fontWeight: '700' }} >Represented Email:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Represented Email"
                            value={repEmail}
                            onChange={(e) => {
                                setRepEmail(e.target.value);
                            }}
                        />
                        <Button type="button" onClick={() => setShowRepresentedColor(!showRepresentedColor)} style={{ marginRight: "20px", backgroundColor: 'black', color: 'white' }}>
                            Color Picker
                        </Button>
                        {showRepresentedColor &&
                            <div style={{ position: "absolute", right: "5px", top: 0, backgroundColor: "white", border: "2px solid gray", borderRadius: "5px", textAlign: "center", fontWeight: "bold", boxShadow: "5px 10px 10px", zIndex: "100" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div></div><div>Color Picker for Rep Email</div><div style={{ cursor: "pointer", marginRight: "2px", color: "gray", fontWeight: "light" }} onClick={handleCloseAllColorPickers}>Close X</div>
                                </div>
                                <ColorPicker hideInputs hidePresets value={resEmailColor} onChange={(color) => setresEmailColor(color)} />
                            </div>
                        }
                    </Form.Group> */}
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
                        type="button"
                        className="d-flex align-items-center"
                        onClick={(e) => submitImage(e)}
                        disabled={loading ? true : false}
                        style={{ background: 'blue' }}
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
