import React from "react";
import base_url from "../../constants/url";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
// import { motion } from "framer-motion";

function NextProject(props) {
  const projectData = props.projectData;
  const index = props.index;
  const navigate = useNavigate();
  const [bottom, setBottom] = useState(false);

  const nextProject = {
    hidden: {
      y: 150
    },
    visibility: {
      y: 0
    }
  }

  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [mediumCircle, setMediumCircle] = useState({ x: 0, y: 0 });

  const mousemove = (e) => {
    setLargeCircle({ x: (e.clientX / 30) * -1, y: (e.clientY / 30) * -1 });
    setMediumCircle({ x: (e.clientX / 80) * -1, y: (e.clientY / 80) * -1 });
  };
  useEffect(() => {
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <motion.div
      className="next-project-section"
      style={{
        width: "100%",
        zindex: "10",
        height: "100vh",
        background: "transparent",
        position: 'relative'
      }}
      onClick={() => {
        navigate(
          index + 1 < projectData.length - 1
            ? `${projectData[index + 1].slug}`
            : "/"
        );
        window.scrollTo(0, 0);
      }}
    >
      <div className="d-flex justify-content-center align-items-center" style={{ position: 'relative' }}>
        <motion.img
          className="next-proj-img1"
          src={
            `${base_url}` + "/img/projects/" + projectData[index + 1].images[0]
          }
          animate={{ x: largeCircle.x, y: largeCircle.y }}
        />
        {projectData[index + 1].images.length > 1 && (
          <motion.img
            className="next-proj-img2"
            src={
              `${base_url}` + "/img/projects/" + projectData[index + 1].images[1]
            }
            animate={{ x: mediumCircle.x, y: mediumCircle.y }}
          />
        )}
        {props.showDescription && (
          <motion.h2
            className="next-project"
            variants={nextProject}
            initial={"hidden"}
            animate={"visibility"}
            transition={{ type: "spring", duration: 2 }}
            style={{ position: "absolute", bottom: "9%", left: "20%" }}
          >Next project</motion.h2>
        )}

      </div>

    </motion.div>
  );
}

export default NextProject;
