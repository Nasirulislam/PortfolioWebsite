import React, { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./Admin.css";
import API from "../../services/API";
import { fabric } from "fabric";
import { Spinner } from "react-bootstrap";
import url from "../../constants/url";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import gifffer from "gifffer";
import GIF from 'gif.js';
import { Canvas2Video } from 'canvas2video';
import { createCanvas } from 'canvas';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';


export default function HomeIndex({ homeIndexCanvas, homeIndexId, hom }) {
  const [loading, setLoading] = useState(false);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [screen, setScreen] = useState("large-laptop");
  const [selectedCanvas, setSelectedCanvas] = useState(hom?.canvas);
  const [deleteIcon, setDeleteIcon] = useState(
    "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E"
  );
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
      };
    });
  };

  const onSelectFile = async (e) => {
    let selectedFileLength = Array.from(e.target.files).length;
    let uploadedFileLength = Array.from(imagesPreview).length;

    let promises = [];
    [...e.target.files].forEach((file) => {
      promises.push(convertToBase64(file));
    });

    Promise.all(promises).then((result) => {
      setImagesPreview((current) => [...current, ...result]);
    });

    submitBtn.current.innerText = "Uploading files...";
    submitBtn.current.disabled = true;

    for (let i = 0; i < e.target.files.length; i++) {
      let file = e.target.files[i];

      // if(file.type === "image/gif"){
      //   console.log("going to convert to video")
      //   const vid = await convertGifToVideo(file)
      //   console.log("result: ", vid);
      //   file = vid
      // }

      const response = await API.formData("project/v2/s3/upload", {
        file: file,
      });
      if (response.status === 200) {
        console.log(response)
        delete response.status;
        setUploadedFiles((oldArray) => [response, ...oldArray]);
      }
    }
    submitBtn.current.innerText = "Update";
    submitBtn.current.disabled = false;
  };

  // ****************** FABRIC-JS **************
  function deleteObject(eventData, transform) {
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
    ctx.drawImage(
      document.getElementById("del-icon"),
      -size / 2,
      -size / 2,
      size,
      size
    );
    ctx.restore();
  }

  const onObjectAdded = () => {
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = "black";
    fabric.Object.prototype.cornerStyle = "circle";
    fabric.Object.prototype.controls.deleteControl = new fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: 5,
      cursorStyle: "pointer",
      mouseUpHandler: deleteObject,
      render: renderIcon,
      cornerSize: 24,
    });
  };

  const loadCanvasFromJSON = (canvasData) => {
    fabricRef.current.loadFromJSON(canvasData, function () {
      const data = JSON.parse(canvasData);
      // console.log("data", data);
      fabricRef.current.renderAll();
      data.objects.forEach((obj) => {
        if (obj.src.includes(".mp4")) {
          handleVideosFromData(obj);
        }
        // if (obj.src.includes(".gif")) {
        //   handleGifsFromData(obj);
        // }
      });
    });
  };

  const initFabric = async (canvas, width = window.innerWidth) => {
    if (fabricRef.current) {
      fabricRef.current.dispose();
      fabricRef.current = null;
    }

    fabricRef.current = new fabric.Canvas(canvasRef.current, {
      width: width,
      height: window.innerHeight,
      backgroundColor: homeIndexCanvas ? null : "pink",
    });

    if (homeIndexCanvas) {
      loadCanvasFromJSON(canvas || hom.canvas);
    }

    fabricRef.current.on("object:added", onObjectAdded);
    fabricRef.current.on("object:modified", function (options) {
      const target = options.target;
      if (target.type === "image" && target.video) {
        const videoElement = target.getElement();
        if (videoElement) {
          if (target.video.paused) {
            target.video.play();
          }
        }
      }
    });
  };

  const handleScreenChange = (e) => {
    setScreen(e.target.value);
  };

  useEffect(() => {
    if (hom) {
      if (screen === "large-laptop") {
        initFabric(hom?.canvas, window.innerWidth);
      } else if (screen === "small-laptop") {
        initFabric(hom?.canvasSmall, 1080);
      } else if (screen === "tab") {
        initFabric(hom?.canvasTab, 720);
      } else if (screen === "mobile") {
        initFabric(hom?.canvasMobile, 420);
      }
    }
  }, [screen]);

 

  async function convertGifToVideo(gifFile) {
    const ffmpeg = createFFmpeg({ log: true });
    await ffmpeg.load();
  
    const reader = new FileReader();
  
    return new Promise(async (resolve, reject) => {
      reader.onload = async () => {
        const arrayBuffer = reader.result;
        const gifBuffer = new Uint8Array(arrayBuffer);
  
        const inputFilename = 'input.gif';
        const outputFilename = 'output.mp4';
  
        ffmpeg.FS('writeFile', inputFilename, gifBuffer);
        await ffmpeg.run('-i', inputFilename, '-vf', 'fps=30', outputFilename);
  
        const videoData = ffmpeg.FS('readFile', outputFilename);
        const videoObject = new File([videoData.buffer], outputFilename, { type: 'video/mp4' });
        resolve(videoObject);
      };
  
      reader.onerror = () => {
        reject(new Error('Failed to read the GIF file.'));
      };
  
      reader.readAsArrayBuffer(gifFile);
    });
  }




  async function convertGifToVideo4(gifFile) {
    const ffmpeg = createFFmpeg({ log: true });
    await ffmpeg.load();
  
    const reader = new FileReader();
  
    return new Promise((resolve, reject) => {
      reader.onload = async () => {
        const arrayBuffer = reader.result;
        const gifBuffer = new Uint8Array(arrayBuffer);
  
        // const gif = new GIF({
        //   workerScript: URL.createObjectURL(new Blob([`(${GIF.worker.toString()})()`])),
        //   workers: 2
        // });

        const gif = new GIF({
          workerScript: URL.createObjectURL(new Blob([`(${GIF.worker.toString().replace('SharedArrayBuffer', 'ArrayBuffer')})()`])),
          workers: 2,
          transferTypedArray: true
        });
  
        gif.on('finished', async (blob) => {
          const videoData = ffmpeg.createWriteStream({ options: ['-pix_fmt', 'yuv420p', '-c:v', 'libx264'] });
  
          const inputFilename = 'input.gif';
          const outputFilename = 'output.mp4';
  
          ffmpeg.FS('writeFile', inputFilename, await fetchFile(blob));
          await ffmpeg.run('-i', inputFilename, '-vf', 'fps=30', outputFilename, { output: [outputFilename] });
  
          const videoBlob = ffmpeg.FS('readFile', outputFilename);
          const videoObject = new File([videoBlob.buffer], outputFilename, { type: 'video/mp4' });
          resolve(videoObject);
        });
  
        gif.on('error', (error) => {
          reject(error);
        });
  
        gif.addFrame(gifBuffer, { delay: 200 });
        gif.transferFromGifBuffer();
        gif.render();
      };
  
      reader.onerror = () => {
        reject(new Error('Failed to read the GIF file.'));
      };
  
      reader.readAsArrayBuffer(gifFile);
    });
  }




async function convertGifToVideo2(gifFile) {
  console.log(gifFile)
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async () => {
      const dataUrl = reader.result;

      // Create an image element
      const img = document.createElement('img');

      // Set the image source to the GIF data URL
      img.src = dataUrl;

      // Wait for the image to load
      img.onload = () => {
        // Create a canvas element
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // Set the canvas dimensions based on the GIF size
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the GIF frame on the canvas
        context.drawImage(img, 0, 0);

        // Create a MediaRecorder instance to record the canvas as video
        const stream = canvas.captureStream();
        const chunks = [];
        const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            chunks.push(event.data);
          }
        };

        recorder.onstop = () => {
          const videoBlob = new Blob(chunks, { type: 'video/webm' });
          // resolve(URL.createObjectURL(videoBlob));
          // resolve(videoBlob);
          const videoObject = new File([videoBlob], 'converted-video.webm', { type: 'video/webm' });
          resolve(videoObject);
        };

        recorder.start();
        gifffer(img, { loop: true, createVideo: true });
        setTimeout(() => {
          recorder.stop();
        }, gifffer(img).duration * 1000);
      };
    };

    reader.onerror = () => {
      reject(new Error('Failed to read the GIF file.'));
    };

    reader.readAsDataURL(gifFile);
  });
}



async function convertGifToVideo3(gifFile) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const arrayBuffer = reader.result;
      const gifBuffer = new Uint8Array(arrayBuffer);
      const gif = new GIF();
      gif.on('finished', async (blob) => {
        const videoBlob = await Canvas2Video(blob, 'mp4');
        const videoObject = new File([videoBlob], 'converted-video.mp4', { type: 'video/mp4' });
        resolve(videoObject);
      });
      gif.on('error', (error) => {
        reject(error);
      });
      gif.addFrame(gifBuffer, { delay: 200 }); // Add the GIF buffer frame to the GIF.js instance
      gif.render();
    };

    reader.onerror = () => {
      reject(new Error('Failed to read the GIF file.'));
    };

    reader.readAsArrayBuffer(gifFile);
  });
}



  function getVideoElement(url, width, height) {
    const videoE = document.createElement("video");
    videoE.width = width;
    videoE.height = height;
    videoE.muted = true;
    videoE.loop = true;
    videoE.autoplay = true;
    videoE.playsInline = true;
    videoE.controls = true;
    videoE.crossOrigin = "anonymous";
    videoE.src = url;
    const source = document.createElement("source");
    source.src = url;
    source.type = "video/mp4";
    videoE.appendChild(source);
    return videoE;
  }

 

  const handleVideosFromData = (file) => {
    const videoUrl = file.src; // Use the file URL obtained from the backend
    const originalWidth = 1080;
    const originalHeight = 1000;
    const videoE = getVideoElement(videoUrl, originalWidth, originalHeight);
    const fab_video = new fabric.Image(videoE, {
      ...file,
    });
    fab_video.set("video_src", videoUrl);
    fab_video.set("src", videoUrl);
    fabricRef.current.add(fab_video);
    videoE.load();
    fab_video.getElement().play();
    fabric.util.requestAnimFrame(function render() {
      fabricRef.current.renderAll();
      fabric.util.requestAnimFrame(render);
    });
  };

  const handleVideos = (file) => {
    const videoUrl = file.fileUrl; // Use the file URL obtained from the backend
    const originalWidth = 1080;
    const originalHeight = 1000;
    let scale = 300 / originalWidth;
    const videoE = getVideoElement(videoUrl, originalWidth, originalHeight);
    const fab_video = new fabric.Image(videoE, {
      left: 0,
      top: 0,
      scaleX: scale,
      scaleY: scale,
      padding: 0,
    });
    fab_video.set("video_src", videoUrl);
    fab_video.set("src", videoUrl);
    fabricRef.current.add(fab_video);
    videoE.load();
    fab_video.getElement().play();
    fabric.util.requestAnimFrame(function render() {
      fabricRef.current.renderAll();
      fabric.util.requestAnimFrame(render);
    });
  };

  // const handleGifs = (file) => {
  //   const img = document.createElement("img");
  //   img.src = file.fileUrl;
  //   img.setAttribute('data-gifffer', file.fileUrl);
  //   const fab_img = new fabric.Image(img, {
  //     left: 0,
  //     top: 0,
  //   });

  //   fab_img.set("src",file.fileUrl);
  //   fab_img.set("data-gifffer",file.fileUrl);
  //   console.log(fab_img);
  //   fabricRef.current.add(fab_img);
  //   fabricRef.current.renderAll();
  //   var gifs = gifffer();
  //     console.log(gifs)
  // };


  // const handleGifsFromData = (file) => {
  //   const img = document.createElement("img");
  //   img.src = file.src;
  //   img.setAttribute('data-gifffer', file.src);
  //   const fab_img = new fabric.Image(img, {
  //     ...file
  //   });

  //   fab_img.set("src",file.src);
  //   fab_img.set("data-gifffer",file.src);
  //   console.log(fab_img);
  //   fabricRef.current.add(fab_img);
  //   var gifs = gifffer();
  //   console.log(gifs)
  // };



  useEffect(() => {
    if (uploadedFiles.length > 0 && fabricRef.current !== null) {
      uploadedFiles.forEach(async (file, key) => {
        if (file.fileUrl.includes("mp4")) {
          handleVideos(file);
          setUploadedFiles([]);
        } 
        // else if (file.fileUrl.includes("gif")) {
        //   console.log("inside gif condition");
        //   // const video = await convertGifToVideo(file.fileUrl)
        //   // console.log(video)
        //   // handleVideos(video);
        //   // setUploadedFiles([]);
        //   // handleGifs(file);
        // } 
        else {
          new fabric.Image.fromURL(file.fileUrl, function (img) {
            let scale = 300 / img.width;
            img.set({
              left: 0,
              top: 0,
              scaleX: scale,
              scaleY: scale,
              padding: 0,
            });
            img.set("dirty", true);
            fabricRef.current.add(img);
            setUploadedFiles([]);
          });
        }
      });
    }
  }, [uploadedFiles]);

  useEffect(() => {
    initFabric();
    return () => {
      fabricRef.current.dispose();
      fabricRef.current = null;
    };
  }, [canvasContainer.current, homeIndexCanvas]);

  const submitCanvas = async () => {
    let payload;
    setLoading(!loading);
    if (screen === "large-laptop") {
      payload = {
        images: [],
        canvas: JSON.stringify(fabricRef.current.toJSON()),
        originalX: window.innerWidth,
        originalY: window.innerHeight,
      };
    } else if (screen === "small-laptop") {
      payload = {
        images: [],
        canvasSmall: JSON.stringify(fabricRef.current.toJSON()),
      };
    } else if (screen === "tab") {
      payload = {
        images: [],
        canvasTab: JSON.stringify(fabricRef.current.toJSON()),
      };
    } else if (screen === "mobile") {
      payload = {
        images: [],
        canvasMobile: JSON.stringify(fabricRef.current.toJSON()),
      };
    }

    const response = await API.patch(`project/home/${homeIndexId}`, payload);
    if (response.status === 225) {
      toast("Uploaded successfully");
    } else {
      toast(JSON.stringify(response));
    }
    setLoading(false);
  };

  const handleBgCanvasColor = (e) => {
    if (fabricRef.current) {
      fabricRef.current.backgroundColor = e.target.value;
      fabricRef.current.requestRenderAll();
    }
  };

  return (
    <div
      className="d-flex justify-content-center flex-column "
      style={{ width: "100%", height: "100%" }}
    >
      <img src={deleteIcon} className="d-none" id="del-icon" />
      <div className="d-flex justify-content-center">
        <div
          className="d-flex justify-content-between my-3"
          style={{ width: "80%" }}
        >
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

          <label className="img-label">
            + Pick Color
            <br />
            <input type="color" onChange={handleBgCanvasColor} />
          </label>
        </div>
      </div>
      <div className="d-flex justify-content-between my-3 px-20">
        <button
          className="btn btn-warning d-flex align-items-center"
          onClick={submitCanvas}
          disabled={loading ? true : false}
          ref={submitBtn}
        >
          <Spinner
            animation="border"
            variant="light"
            className={loading ? "me-2" : "d-none"}
          />
          {loading ? "Updating..." : "Update"}
        </button>
        <select onChange={handleScreenChange} className="py-1 px-3">
          <option value="large-laptop">Large Laptop</option>
          <option value="small-laptop">Small Laptop</option>
          <option value="tab">Tab</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>

      <div
        className="relative"
        style={{
          width:
            screen === "large-laptop"
              ? "100%"
              : screen === "small-laptop"
              ? "1080px"
              : screen === "tab"
              ? "720px"
              : screen === "mobile"
              ? "420px"
              : "",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <canvas className="sample-canvas" ref={canvasRef} id="canvas" />
      </div>
      <ToastContainer />
    </div>
  );
}
