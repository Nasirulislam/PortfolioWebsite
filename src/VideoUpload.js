import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { fabricGif } from './Gifs/fabricGif';

export default function VideoUpload() {
    const canvaRefer = useRef(null);
    async function init() {
        const canvas = new fabric.Canvas(canvaRefer.current);
        canvas.setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });

        const gif3 = await fabricGif(
            "https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif",
            200,
            200
        );
        gif3.set({ top: 300, left: 50 });
        canvas.add(gif3);

        fabric.util.requestAnimFrame(function render() {
            canvas.renderAll();
            fabric.util.requestAnimFrame(render);
        });
    }
    init();
    // useEffect(() => {


    // }, []);

    return <canvas id="canvas" ref={canvaRefer} />;
}