import React, { useRef } from 'react';
import { fabric } from 'fabric';
import { FabricJSCanvas } from 'fabricjs-react';


export default function VideoUpload() {
    const fabricCanvasRef = useRef(null);

    const handleVideoUpload = (e) => {
        const file = e.target.files[0];
        const video = document.createElement('video');

        video.src = URL.createObjectURL(file);
        video.addEventListener('loadeddata', () => {
            const fabricCanvas = fabricCanvasRef.current;

            const fabricVideo = new fabric.Image(video, {
                left: 0,
                top: 0,
                selectable: false,
            });

            // Adjust video dimensions to fit the canvas
            const canvasWidth = fabricCanvas.handler.width;
            const canvasHeight = fabricCanvas.handler.height;
            const videoAspectRatio = video.videoWidth / video.videoHeight;
            const canvasAspectRatio = canvasWidth / canvasHeight;

            if (videoAspectRatio > canvasAspectRatio) {
                const scaleFactor = canvasHeight / video.videoHeight;
                const scaledWidth = video.videoWidth * scaleFactor;
                fabricVideo.set({ width: scaledWidth, height: canvasHeight });
            } else {
                const scaleFactor = canvasWidth / video.videoWidth;
                const scaledHeight = video.videoHeight * scaleFactor;
                fabricVideo.set({ width: canvasWidth, height: scaledHeight });
            }

            fabricCanvas.handler.add(fabricVideo);
            fabricCanvas.handler.requestRenderAll();
        });
    };

    return (
        <div>
            <label htmlFor="video-upload">
                Choose video
                <input
                    id="video-upload"
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    style={{ display: 'none' }}
                />
            </label>
            <FabricJSCanvas ref={fabricCanvasRef} />
        </div>
    );
}