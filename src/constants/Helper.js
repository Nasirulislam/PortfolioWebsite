import { motion } from "framer-motion";
import { Blurhash } from "react-blurhash";
import { useState } from "react";

export default function Helper({ banner, largeCircle, index, imageFluid }) {

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
                    // <motion.img
                    //     className={"bottom-img "+(imageFluid ? "img-fluid" : "")}
                    //     src={image.src}
                    //     animate={{ x: largeCircle.x, y: largeCircle.y }}
                    //     key={index}
                    // />
                    <Blurhash
                        hash={banner.hash}
                        width={parseInt(banner.width)}
                        height={parseInt(banner.height)}
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                    />
                    : <Blurhash
                        hash={banner.hash}
                        width={parseInt(banner.width)}
                        height={parseInt(banner.height)}
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                    />
            }
        </>
    );
}