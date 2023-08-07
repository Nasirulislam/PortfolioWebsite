import React, { useContext } from "react";
import base_url from "../../constants/url";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import Helper from "../../constants/Helper";
import { ProjectContext } from "../../services/ProjectContext";
// import { motion } from "framer-motion";

function NextProject(props) {
  const projectData = props.projectData;
  const index = props.index;
  const navigate = useNavigate();
  const [bottom, setBottom] = useState(false);
  const { selectedProj, setSelectedProj, projChanged, setProjChanged } = useContext(ProjectContext);

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
        props.setInitialBanners([])
        props.setBanners([])
        // console.log("the seected project is: ",projectData[index + 1].name)
        setSelectedProj(projectData[index + 1].name)
        setProjChanged(true)
        navigate(
          index + 1 < projectData.length - 1
            ? `/${projectData[index + 1].slug}`
            : "/"
        );
        // window.scrollTo(0, 0);
      }}
    >
      <div className="col-md-12 d-flex justify-content-center align-items-center" style={{ position: 'relative', height: '100%' }}>
        <div className="col-md-6 d-flex justify-content-end">
          {
            projectData[index + 1].imagesAndThumb[0].fileUrl?.includes("mp4") ?
              <motion.video autoPlay loop muted>
                <source src={projectData[index + 1].imagesAndThumb[0].fileUrl} type="video/mp4" />
                <source src={projectData[index + 1].imagesAndThumb[0].fileUrl} type="video/ogg" />
                Your browser does not support the video tag.
              </motion.video> :
              <Helper banner={projectData[index + 1].imagesAndThumb[0]} largeCircle={mediumCircle} index={0} imageFluid={false} />
            // <motion.img
            //   className="next-proj-img1"
            //   src={
            //     projectData[index + 1].imagesAndThumb[0].fileUrl
            //   }
            //   animate={{ x: mediumCircle.x, y: mediumCircle.y }}
            // />
          }
        </div>
        {projectData[index + 1].images.length > 1 && (
          <div className="col-md-5">
            {
              projectData[index + 1].imagesAndThumb[1].fileUrl?.includes("mp4") ?
                <motion.video autoPlay loop muted>
                  <source src={projectData[index + 1].imagesAndThumb[1].fileUrl} type="video/mp4" />
                  <source src={projectData[index + 1].imagesAndThumb[1].fileUrl} type="video/ogg" />
                  Your browser does not support the video tag.
                </motion.video> :
                <Helper banner={projectData[index + 1].imagesAndThumb[1]} largeCircle={largeCircle} index={0} imageFluid={false} />
              // <motion.img
              //   className="next-proj-img2"
              //   src={
              //     projectData[index + 1].imagesAndThumb[1].fileUrl
              //   }
              //   animate={{ x: largeCircle.x, y: largeCircle.y }}
              // />
            }
          </div>
        )}
        {props.showDescription && (
          <motion.h2
            className="next-project"
            variants={nextProject}
            initial={"hidden"}
            animate={"visibility"}
            transition={{ type: "spring", duration: 2 }}
            style={{ position: "absolute", bottom: "12%", left: "20%", fontSize: '2rem' }}
          >Next project</motion.h2>
        )}

      </div>

    </motion.div>
  );
}

export default NextProject;
