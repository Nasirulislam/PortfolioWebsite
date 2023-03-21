import React, { useEffect, useRef, useState } from 'react'
import { Card, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import base_url from "../../constants/url";
import { toast } from 'react-toastify';
import "./Admin.css";
import API from '../../services/API';
import { fabric } from 'fabric';

export default function HomeIndex() {
    const [loading, setLoading] = useState(false);
    const [loadingPortrait, setLoadingPortrait] = useState(false);
    const [homeIndexId, setHomeIndexId] = useState(0);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [landscapeHomeIndexId, setLandscapeHomeIndexId] = useState(0);
    const [landscapeImagesPreview, setLandscapeImagesPreview] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [landscapeSelectedFiles, setLandscapeSelectedFiles] = useState([]);
    const [deleteIcon, setDeleteIcon] = useState("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E");
    const MAX_LENGTH = 10;

    const fabricRef = useRef(null);
    const canvasRef = useRef(null);
    const canvasContainer = useRef(null);

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
            alert(`Cannot upload files more than ${MAX_LENGTH - 1}`);
            return;
        }

        let promises = [];
        [...e.target.files].forEach(file => {
            promises.push(convertToBase64(file));
        });

        Promise.all(promises).then(result => {
            setImagesPreview(current => [...current, ...result])
        })

        let imagesFile = []
        Array.from(e.target.files).forEach(file => imagesFile.push(file));
        setSelectedFiles(imagesFile);
    }

    const onLandscapeSelectFile = (e) => {
        let selectedFileLength = Array.from(e.target.files).length;
        let uploadedFileLength = Array.from(imagesPreview).length;
        if (selectedFileLength > MAX_LENGTH || (uploadedFileLength + selectedFileLength) > MAX_LENGTH) {
            e.preventDefault();
            alert(`Cannot upload files more than ${MAX_LENGTH - 1}`);
            return;
        }

        let promises = [];
        [...e.target.files].forEach(file => {
            promises.push(convertToBase64(file));
        });

        Promise.all(promises).then(result => {
            setLandscapeImagesPreview(current => [...current, ...result])
        })

        let imagesFile = []
        Array.from(e.target.files).forEach(file => imagesFile.push(file));
        setLandscapeSelectedFiles(imagesFile);
    }

    const removePreviewImage = (index) => {

        let filteredImages = [];
        let selectedImages = [];
        imagesPreview.forEach((item, key) => {
            if (key !== index) {
                filteredImages.push(item);
            }
        });

        selectedFiles.forEach((item, key) => {
            if (key !== index) {
                selectedImages.push(item);
            }
        });

        if (typeof filteredImages[0] == "undefined") {
            filteredImages = [];
        }
        setImagesPreview(filteredImages);
        setSelectedFiles(selectedImages);
    }

    const removeLandscapePreviewImage = (index) => {

        let filteredImages = [];
        let selectedImages = [];
        landscapeImagesPreview.forEach((item, key) => {
            if (key !== index) {
                filteredImages.push(item);
            }
        });

        selectedFiles.forEach((item, key) => {
            if (key !== index) {
                selectedImages.push(item);
            }
        });

        if (typeof filteredImages[0] == "undefined") {
            filteredImages = [];
        }
        setLandscapeImagesPreview(filteredImages);
        setSelectedFiles(selectedImages);
    }

    const submit = async (event) => {
        event.preventDefault();
        setLoadingPortrait(true);
        let imagesArr = [];
        let selectedArr = [...selectedFiles];

        for (let i = 0; i < imagesPreview.length; i++) {
            if (imagesPreview[i].split(":")[0] !== "data") {
                imagesArr.push(imagesPreview[i]);
            }
        }

        const payload = {
            images: imagesArr,
            imagess: selectedArr
        }

        if (homeIndexId === 0) {
            const response = await API.upload(`project/home`, payload);
            if (response.status == 200) {
                toast("Uploaded successfully");
                setSelectedFiles([]);
            } else {
                toast(JSON.stringify(response))
            }
        } else {
            const response = await API.patch(`project/home/${homeIndexId}`, payload);
            if (response.status == 225) {
                toast("Uploaded successfully");
                setSelectedFiles([]);
            } else {
                toast(JSON.stringify(response));
            }
        }
        setLoadingPortrait(false);
    }

    const submitLandscape = async (event) => {
        event.preventDefault();
        setLoading(true);
        let imagesArr = [];
        let selectedArr = [...landscapeSelectedFiles];

        for (let i = 0; i < landscapeImagesPreview.length; i++) {
            if (landscapeImagesPreview[i].split(":")[0] !== "data") {
                imagesArr.push(landscapeImagesPreview[i]);
            }
        }

        const payload = {
            images: imagesArr,
            imagess: selectedArr
        }

        if (landscapeHomeIndexId === 0) {
            const response = await API.formData(`project/home`, payload);
            if (response.status == 200) {
                toast("Uploaded successfully");
                setSelectedFiles([]);
            } else {
                toast(JSON.stringify(response))
            }
        } else {
            const response = await API.patch(`project/home/${landscapeHomeIndexId}`, payload);
            if (response.status == 225) {
                toast("Uploaded successfully");
                setSelectedFiles([]);
            } else {
                toast(JSON.stringify(response));
            }
        }
        setLoading(false);
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

    const initFabric = () => {
        if (!canvasContainer.current) return;
        fabricRef.current = new fabric.Canvas(canvasRef.current, {
            height: canvasContainer.current.clientHeight,
            width: canvasContainer.current.clientWidth,
            backgroundColor: 'pink'
        });


        fabricRef.current.on('object:added', onObjectAdded);
    }


    useEffect(() => {
        if (imagesPreview.length > 0 && fabricRef.current !== null) {
            imagesPreview.forEach((image, key) => {
                new fabric.Image.fromURL(image, function (image) {
                    let scale = 300 / image.width;
                    var img = image.set({ left: 0, top: 0, scaleX: scale, scaleY: scale, padding: 0 });
                    fabricRef.current.add(img);
                })
            })
            setImagesPreview([]);
        }

    }, [imagesPreview])

    useEffect(() => {
        const loadHomeIndexImages = async () => {
            const response = await API.get(`project/home`);
            if (response.status == 210) {
                setImagesPreview(response.data.home[0]?.images || []);
                setHomeIndexId(response.data.home[0]?._id || 0);
                setLandscapeImagesPreview(response.data.home[2]?.images || []);
                setLandscapeHomeIndexId(response.data.home[2]?._id || 0);
            } else {
                console.log(response.message);
            }
        }
        initFabric();
        loadHomeIndexImages();

        return () => {
            fabricRef.current.dispose();
            // canvasRef.current.dispose();
            fabricRef.current = null;
        }
    }, [canvasContainer.current])

    const submitCanvas = async () => {
        const payload = {
            images: [],
            canvas: JSON.stringify(fabricRef.current.toJSON())
        }
        const response = await API.patch(`project/home/${landscapeHomeIndexId}`, payload);
        if (response.status == 225) {
            toast("Uploaded successfully");
            setSelectedFiles([]);
        } else {
            toast(JSON.stringify(response));
        }
    }

    const handleBgCanvasColor = (e) => {
        if (fabricRef.current) {
            fabricRef.current.backgroundColor = e.target.value;
            fabricRef.current.requestRenderAll();
        }
    }

    return (
        <div className="d-flex justify-content-center flex-column" style={{ width: '100%', height: '100vh' }} ref={canvasContainer}>
            <img src={deleteIcon} className="d-none" id="del-icon" />
            <div className='d-flex justify-content-between my-3' style={{ width: '40%' }}>
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
                        accept="image/*"
                    />
                </label>
                <label className="img-label">
                    + Pick Color
                    <br />
                <input type='color' onChange={handleBgCanvasColor} />
                </label>
            </div>
            <div className='d-flex justify-content-center my-3'>
            <button className='btn btn-warning' onClick={submitCanvas}>Save Changes</button>
            </div>
            <canvas className="sample-canvas" ref={canvasRef} />
        </div>
    )
}
