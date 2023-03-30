import { motion } from "framer-motion";
import { Blurhash } from "react-blurhash";
import { useState } from "react";

export default function Helper({ banner, largeCircle, index }) {

    const [show, setShow] = useState(false);
    var image = new Image();
    image.src = banner.fileUrl;
    image.onload = function () {
        setShow(true);
    }
    return (
        <>
            {
                show ?
                    <motion.img
                        className={"img-fluid bottom-img"}
                        src={image.src}
                        animate={{ x: largeCircle.x, y: largeCircle.y }}
                        key={index}
                    />
                    : <Blurhash
                        hash={banner.hash}
                        width={parseInt(banner.width)}
                        height={parseInt(banner.height)}
                        resolutionX={132}
                        resolutionY={132}
                        punch={1}
                    />
            }
        </>
    );
}