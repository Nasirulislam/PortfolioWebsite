import React, { useEffect, useRef } from 'react';

import { fabric } from 'fabric';

export default function VideoUpload() {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current, {
            width: window.innerWidth,
            height: window.innerHeight,
        });

        function getVideoElement(url, width, height) {
            const videoE = document.createElement('video');
            videoE.width = width;
            videoE.height = height;
            videoE.muted = true;
            videoE.loop = true;
            videoE.autoplay = true;
            videoE.playsInline = true;
            videoE.crossOrigin = 'anonymous';
            const source = document.createElement('source');
            source.src = url;
            source.type = 'video/mp4';
            videoE.appendChild(source);
            console.log('hereeeeeeeeeeeeeeeee', videoE)
            return videoE;
        }

        const url_mp4 =
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';

        const originalWidth = 1200;
        const originalHeight = 700;

        let videoWidth = originalWidth;
        let videoHeight = originalHeight;
        let scale = 300 / videoWidth;

        const videoE = getVideoElement(url_mp4, videoWidth, videoHeight);
        // console.log('videoE', videoE)
        const fab_video = new fabric.Image(videoE, {
            left: 0,
            top: 0,
            width: videoWidth,
            height: videoHeight,
            scaleX: scale,
            scaleY: scale
        });

        fab_video.set('video_src', url_mp4); // Set custom attribute

        canvas.add(fab_video);

        fab_video.getElement().play();

        fabric.util.requestAnimFrame(function render() {
            canvas.renderAll();
            fabric.util.requestAnimFrame(render);
        });



        // Update video playback on fabric object events
        canvas.on('object:modified', function (options) {
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

        // Update video size when fabric object is scaled
        canvas.on('object:scaled', function (options) {
            const target = options.target;
            console.log('Target', target);
            if (target.type === 'image' && target.video) {
                videoWidth = target.getScaledWidth();
                videoHeight = target.getScaledHeight();
                target.getElement().width = videoWidth;
                target.getElement().height = videoHeight;
            }
        });

        console.log('here')
        return () => {
            // Clean up the canvas when the component unmounts
            canvas.dispose();
        };
    }, []);

    return (
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
    );

}
