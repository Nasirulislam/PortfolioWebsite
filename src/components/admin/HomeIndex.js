import React, { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "./Admin.css";
import API from '../../services/API';
import { fabric } from 'fabric';
import { Spinner } from 'react-bootstrap';
import url from '../../constants/url';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai';

export default function HomeIndex({ homeIndexCanvas, homeIndexId }) {
    const [loading, setLoading] = useState(false);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [deleteIcon, setDeleteIcon] = useState("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E");
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const fabricRef = useRef(null);
    const canvasRef = useRef(null);
    const canvasContainer = useRef(null);
    const submitBtn = useRef(null);

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
        });
    }

    const onSelectFile = async (e) => {

        let selectedFileLength = Array.from(e.target.files).length;
        let uploadedFileLength = Array.from(imagesPreview).length;

        let promises = [];
        [...e.target.files].forEach(file => {
            promises.push(convertToBase64(file));
        });

        Promise.all(promises).then(result => {
            setImagesPreview(current => [...current, ...result])
        })

        submitBtn.current.innerText = 'Uploading files...';
        submitBtn.current.disabled = true;

        for (let i = 0; i < e.target.files.length; i++) {
            const response = await API.formData('project/v2/s3/upload', { 'file': e.target.files[i] });
            if (response.status === 200) {
                delete response.status;
                setUploadedFiles(oldArray => [response, ...oldArray]);
            }
        }
        submitBtn.current.innerText = 'Update';
        submitBtn.current.disabled = false;
    }

    // ****************** FABRIC-JS **************
    function deleteObject(eventData, transform) {
        console.log(transform);
        var target = transform.target;
        var canvas = target.canvas;
        canvas.remove(target);
        canvas.requestRenderAll();
    }

    function renderIcon(ctx, left, top, styleOverride, fabricObject) {
        var size = this.cornerSize;
        ctx.save();
        ctx.translate(left, top);
        ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
        ctx.drawImage(document.getElementById("del-icon"), -size / 2, -size / 2, size, size);
        ctx.restore();
    }

    const onObjectAdded = () => {
        fabric.Object.prototype.transparentCorners = false;
        fabric.Object.prototype.cornerColor = 'black';
        fabric.Object.prototype.cornerStyle = 'circle';
        fabric.Object.prototype.controls.deleteControl = new fabric.Control({
            x: 0.5,
            y: -0.5,
            offsetY: 5,
            cursorStyle: 'pointer',
            mouseUpHandler: deleteObject,
            render: renderIcon,
            cornerSize: 24
        });
    }



    const initFabric = async () => {
        if (homeIndexCanvas) {
            fabricRef.current = new fabric.Canvas(canvasRef.current, {
                width: window.innerWidth,
                height: window.innerHeight
            })
            fabricRef.current.loadFromJSON(homeIndexCanvas);
            // console.log(fabricRef.current.loadFromJSON(homeIndexCanvas));
        } else {
            fabricRef.current = new fabric.Canvas(canvasRef.current, {
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: 'pink'
            });
        }

        fabricRef.current.on('object:added', onObjectAdded);
        fabricRef.current.on('object:modified', function (options) {
            const target = options.target;
            if (target.type === 'image' && target.video) {
                const videoElement = target.getElement();
                if (videoElement) {
                    if (target.video.paused) {
                        target.video.play();
                    }
                }
            }
        });
    }

    useEffect(() => {
        if (uploadedFiles.length > 0 && fabricRef.current !== null) {
            uploadedFiles.forEach((file, key) => {
                if (file.fileUrl.includes('mp4')) {
                    const videoUrl = file.fileUrl; // Use the file URL obtained from the backend

                    function getVideoElement(url, width, height) {
                        const videoE = document.createElement('video');

                        videoE.width = width;
                        videoE.height = height;
                        videoE.muted = true;
                        videoE.loop = true;
                        videoE.autoplay = true;
                        videoE.playsInline = true;
                        videoE.controls = true;
                        videoE.crossOrigin = 'anonymous';
                        const source = document.createElement('source');
                        source.src = url;
                        source.type = 'video/mp4';
                        videoE.appendChild(source);
                        // console.log(videoE.videoWidth)
                        return videoE;
                    }
                    const originalWidth = 1080;
                    const originalHeight = 1000;
                    let scale = 300 / originalWidth;
                    const videoE = getVideoElement(videoUrl, originalWidth, originalHeight);
                    const fab_video = new fabric.Image(videoE, {
                        left: 0,
                        top: 0,
                        scaleX: scale,
                        scaleY: scale,
                        padding: 0
                    });

                    fab_video.set('video_src', videoUrl);
                    fab_video.set('src', videoUrl);
                    fabricRef.current.add(fab_video);
                    videoE.load();
                    fab_video.getElement().play();
                    fabric.util.requestAnimFrame(function render() {
                        fabricRef.current.renderAll();
                        fabric.util.requestAnimFrame(render);
                    });

                    console.log('fabvideo:', fab_video);

                    setUploadedFiles([]);
                } else {
                    new fabric.Image.fromURL(file.fileUrl, function (img) {
                        let scale = 300 / img.width;
                        img.set({ left: 0, top: 0, scaleX: scale, scaleY: scale, padding: 0 });
                        img.set('dirty', true);
                        console.log('IMAGEEEEEE', img)
                        fabricRef.current.add(img);
                        setUploadedFiles([]);
                    });
                }
            });
        }
    }, [uploadedFiles]);



    // useEffect(() => {
    //     const playVideos = () => {
    //         if (fabricRef.current) {
    //             console.log("NEW", fabricRef.current);
    //             fabricRef.current.getObjects().forEach((obj) => {
    //                 if (obj.type === 'image' && obj.video) {
    //                     const videoElement = obj.getElement();
    //                     if (videoElement && videoElement.paused) {
    //                         videoElement.play().catch((error) => {
    //                             console.error('Video playback error:', error);
    //                         });
    //                     }
    //                 }
    //             });
    //         }
    //     };

    //     playVideos();

    //     const objectModifiedHandler = () => {
    //         playVideos();
    //     };

    //     if (fabricRef.current) {
    //         fabricRef.current.on('object:modified', objectModifiedHandler);
    //     }

    //     return () => {
    //         if (fabricRef.current) {
    //             fabricRef.current.off('object:modified', objectModifiedHandler);
    //         }
    //     };
    // }, [fabricRef.current]);


    useEffect(() => {
        initFabric();

        return () => {
            fabricRef.current.dispose();
            // canvasRef.current.dispose();
            fabricRef.current = null;
        }
    }, [canvasContainer.current, homeIndexCanvas])

    const submitCanvas = async () => {
        setLoading(!loading);

        // fabricRef.current.getObjects().forEach((e,index) => {
        //     e._element.src = uploadedFiles[index].fileUrl;
        //     fabricRef.current.renderAll();
        // })
        const payload = {
            images: [],
            canvas: JSON.stringify(fabricRef.current.toJSON()),
            originalX: window.innerWidth,
            originalY: window.innerHeight
        }
        console.log("Payload", payload)
        const response = await API.patch(`project/home/${homeIndexId}`, payload);
        if (response.status === 225) {
            toast("Uploaded successfully");
        } else {
            toast(JSON.stringify(response));
        }
        setLoading(false)
    }

    const handleBgCanvasColor = (e) => {
        if (fabricRef.current) {
            fabricRef.current.backgroundColor = e.target.value;
            fabricRef.current.requestRenderAll();
        }
    }


    // VIDEO UPLOAD
    // const [file, setFile] = useState(null);
    // const fileInputRef = useRef(null);
    // const [position, setPosition] = useState({ x: 0, y: 0 });
    // const [size, setSize] = useState({ width: 300, height: 200 });
    // const [success, setSuccess] = useState('');
    // const [videos, setVideos] = useState([]);
    // const [windowSize, setWindowSize] = useState({
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    // });
    // const videoRef = useRef(null);
    // useEffect(() => {
    //     const handleWindowResize = () => {
    //         setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    //     };
    //     window.addEventListener('resize', handleWindowResize);
    //     return () => {
    //         window.removeEventListener('resize', handleWindowResize);
    //     };

    // }, [windowSize])


    // useEffect(() => {
    //     fetchVideos();

    // }, []);


    // // console.log(windowSize)

    // const fetchVideos = async () => {
    //     try {
    //         const response = await axios.get(`${url}/project/video/get`); // Replace with your actual API endpoint
    //         const data = response.data;
    //         setVideos(data);
    //         // console.log("VIDEO : ",data[0])
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // // console.log(position, size);
    // //ref click
    // const handleUploadClick = () => {
    //     fileInputRef.current.click();
    // };
    // // file Select
    // const handleFileChange = (event) => {
    //     const selectedFile = event.target.files[0];
    //     setFile(selectedFile);

    // };
    // // drag drop
    // const handleMouseDown = (event) => {
    //     event.preventDefault();
    //     const startX = event.clientX - position.x;
    //     const startY = event.clientY - position.y;

    //     const handleMouseMove = (event) => {
    //         const newX = event.clientX - startX;
    //         const newY = event.clientY - startY;
    //         setPosition({ x: newX, y: newY });
    //     };

    //     const handleMouseUp = () => {
    //         document.removeEventListener('mousemove', handleMouseMove);
    //         document.removeEventListener('mouseup', handleMouseUp);
    //     };

    //     document.addEventListener('mousemove', handleMouseMove);
    //     document.addEventListener('mouseup', handleMouseUp);
    // };
    // // Resize
    // const handleResize = (event, corner) => {
    //     event.preventDefault();

    //     const startX = event.clientX;
    //     const startY = event.clientY;
    //     const initialSize = { ...size };

    //     const handleMouseMove = (event) => {
    //         const offsetX = event.clientX - startX;
    //         const offsetY = event.clientY - startY;

    //         let newWidth = initialSize.width;
    //         let newHeight = initialSize.height;

    //         if (corner === 'top-left') {
    //             newWidth = initialSize.width - offsetX;
    //             newHeight = initialSize.height - offsetY;
    //         } else if (corner === 'top-right') {
    //             newWidth = initialSize.width + offsetX;
    //             newHeight = initialSize.height - offsetY;
    //         } else if (corner === 'bottom-left') {
    //             newWidth = initialSize.width - offsetX;
    //             newHeight = initialSize.height + offsetY;
    //         } else if (corner === 'bottom-right') {
    //             newWidth = initialSize.width + offsetX;
    //             newHeight = initialSize.height + offsetY;
    //         }

    //         // Ensure the new width and height are positive values
    //         newWidth = Math.max(newWidth, 0);
    //         newHeight = Math.max(newHeight, 0);

    //         setSize({ width: newWidth, height: newHeight });
    //     };

    //     const handleMouseUp = () => {
    //         document.removeEventListener('mousemove', handleMouseMove);
    //         document.removeEventListener('mouseup', handleMouseUp);
    //     };

    //     document.addEventListener('mousemove', handleMouseMove);
    //     document.addEventListener('mouseup', handleMouseUp);
    // };
    // // upload video
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const formData = new FormData();
    //         formData.append('video', file);
    //         formData.append('x', position.x);
    //         formData.append('y', position.y);
    //         formData.append('width', size.width);
    //         formData.append('height', size.height);

    //         await axios.post(`${url}/project/video/upload`, formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });
    //         toast("Video Uploaded successfully");
    //         console.log('Video uploaded successfully!');
    //     } catch (error) {
    //         console.error('Error uploading video:', error);
    //         setSuccess('');
    //     }
    // };
    // const handleDelete = (videoId) => {
    //     axios.delete(`${url}/project/video/delete/${videoId}`)
    //         .then((response) => {
    //             // Handle successful deletion
    //             console.log('Video deleted successfully:', response.data);
    //             fetchVideos();
    //         })
    //         .catch((error) => {
    //             // Handle error
    //             console.error('Error deleting video:', error);
    //         });
    // };


    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas.getContext('2d');
    //     const video = videoRef.current;

    //     if (file) {
    //         video.src = URL.createObjectURL(file);
    //     }

    //     video?.addEventListener('loadedmetadata', function () {
    //         canvas.width = video.videoWidth;
    //         canvas.height = video.videoHeight;
    //     });

    //     video?.addEventListener('play', function () {
    //         const $this = this; // cache
    //         (function loop() {
    //             if (!$this.paused && !$this.ended) {
    //                 ctx.drawImage($this, 0, 0, canvas.width, canvas.height);
    //                 setTimeout(loop, 1000 / 30); // drawing at 30fps
    //             }
    //         })();
    //     }, 0);
    // }, [file]);

    return (
        <div className="d-flex justify-content-center flex-column " style={{ width: '100%', height: '100%' }}>
            <img src={deleteIcon} className="d-none" id="del-icon" />
            <div className='d-flex justify-content-center'>
                <div className='d-flex justify-content-between my-3' style={{ width: '80%' }}>
                    {/* <input type="file" onChange={onSelectFile} style={{ display: 'block' }} multiple accept='image/*'/> */}
                    <label className="img-label">
                        + Add Images
                        <br />
                        {/* <span>up to 5 images</span> */}
                        <input
                            type="file"
                            name="images"
                            onChange={onSelectFile}
                            multiple
                        // accept="image/*"
                        />
                    </label>
                    {/* <label className="img-label" onClick={handleUploadClick}>
                        + Choose Video
                        <br />


                    </label>
                    <input
                        type="file"
                        id="uploadVideo"
                        name='video'
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                    /> */}
                    <label className="img-label">
                        + Pick Color
                        <br />
                        <input type='color' onChange={handleBgCanvasColor} />
                    </label>
                </div>
            </div>
            <div className='d-flex justify-content-center my-3'>
                <button className='btn btn-warning d-flex align-items-center' onClick={submitCanvas}
                    disabled={loading ? true : false} ref={submitBtn}>
                    <Spinner animation="border" variant="light" className={loading ? "me-2" : "d-none"} />
                    {loading ? "Updating..." : "Update"}
                </button>

                {/* <button className='px-4 py-2 ml-2 text-white bg-green-500 rounded-md hover:bg-green-600'
                    onClick={handleSubmit}
                >
                    Update Video
                </button>
                <p>
                    {success}
                </p> */}

            </div>
            {/* <div style={{ width: '100%' }} ref={canvasContainer}> */}


            {/* </div> */}
            <div className='relative'>
                <canvas className="sample-canvas" ref={canvasRef} id="canvas" />

                {/* {file && (
                    <div
                        style={{
                            position: 'absolute',
                            top: `${position.y}px`,
                            left: `${position.x}px`,
                            cursor: 'move',
                            zIndex: '99'
                        }}
                        onMouseDown={handleMouseDown}
                    >
                        <div
                            style={{
                                width: `${size.width}px`,
                                height: `${size.height}px`,
                                border: '1px solid black',
                                outline: 'none',
                                boxShadow: 'none',
                            }}
                        >
                            <div
                                className="resize-dot top-left"
                                onMouseDown={(e) => handleResize(e, 'top-left')}
                            />
                            <div
                                className="resize-dot top-right"
                                onMouseDown={(e) => handleResize(e, 'top-right')}
                            />
                            <div
                                className="resize-dot bottom-left"
                                onMouseDown={(e) => handleResize(e, 'bottom-left')}
                            />
                            <div
                                className="resize-dot bottom-right"
                                onMouseDown={(e) => handleResize(e, 'bottom-right')}
                            />

                            <video
                                src={URL.createObjectURL(file)}
                                style={{
                                    width: '100%',
                                    height: '100%', objectFit: 'cover', backgroundPosition: 'center'
                                }}
                                autoPlay
                                // controls
                                loop
                                ref={videoRef}
                            />
                        </div>
                    </div>
                )}
                {videos?.map((video) => (
                    <div key={video._id}>
                        
                        <video
                            src={`${url}/about/${video?.video}`}
                            // controls
                            loop
                            muted
                            autoPlay
                            playsInline
                            className="responsive-video" 
                            style={{
                                width: `${video.width}px`,
                                height: `${video.height}px`,
                                position: 'absolute',
                                top: `${video.y}px`,
                                left: `${video.x}px`,
                                objectFit: 'cover',
                                backgroundPosition: 'center',
                                zIndex: '0'
                            }}
                        />
                        <button
                            className="delete-button"
                            onClick={() => handleDelete(video._id)}
                            style={{
                                position: 'absolute',
                                top: `${video.y - 20}px`,
                                left: `${video.x - 10}px`,
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            <AiFillDelete size={20} color="red" />
                        </button>
                    </div>
                ))} */}
            </div>
            <ToastContainer />
        </div>
    )
}
