import React, { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "./Admin.css";
import API from '../../services/API';
import { fabric } from 'fabric';
import { Spinner } from 'react-bootstrap';

export default function HomeIndex({ homeIndexCanvas, homeIndexId }) {
    const [loading, setLoading] = useState(false);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [deleteIcon, setDeleteIcon] = useState("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E");
    const [uploadedFiles, setUploadedFiles] = useState([]);

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

        for (let i = 0; i < e.target.files.length; i++) {
            const response = await API.formData('project/v2/s3/upload', { 'file': e.target.files[i] });
            if (response.status === 200) {
                delete response.status;
                setUploadedFiles(oldArray => [response,...oldArray] );
            }
        }
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
            fabricRef.current = new fabric.Canvas(canvasRef.current)
            fabricRef.current.loadFromJSON(homeIndexCanvas);
        } else {
            fabricRef.current = new fabric.Canvas(canvasRef.current, {
                height: canvasContainer.current.clientHeight,
                width: canvasContainer.current.clientWidth,
                backgroundColor: 'pink'
            });
        }

        fabricRef.current.on('object:added', onObjectAdded);
    }

    useEffect(() => {
        if (uploadedFiles.length > 0 && fabricRef.current !== null) {
            uploadedFiles.forEach((image, key) => {
                new fabric.Image.fromURL(image.fileUrl, function (image) {
                    let scale = 300 / image.width;
                    var img = image.set({ left: 0, top: 0, scaleX: scale, scaleY: scale, padding: 0 });
                    image.set('dirty', true);
                    fabricRef.current.add(img);
                })
            })
        }

    }, [uploadedFiles])

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
        const payload = {
            images: [],
            canvas: JSON.stringify(fabricRef.current.toJSON())
        }
        const response = await API.patch(`project/home/${homeIndexId}`, payload);
        console.log(response.status)
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

    return (
        <div className="d-flex justify-content-center flex-column" style={{ width: '100%', height: '100vh' }} ref={canvasContainer}>
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
                            accept="image/*"
                        />
                    </label>
                    <label className="img-label">
                        + Pick Color
                        <br />
                        <input type='color' onChange={handleBgCanvasColor} />
                    </label>
                </div>
            </div>
            <div className='d-flex justify-content-center my-3'>
                <button className='btn btn-warning d-flex align-items-center' onClick={submitCanvas}
                    disabled={loading ? true : false}>
                    <Spinner animation="border" variant="light" className={loading ? "me-2" : "d-none"} />
                    {loading ? "Updating..." : "Update"}
                </button>
            </div>
            <canvas className="sample-canvas" ref={canvasRef} />
            <ToastContainer />
        </div>
    )
}
