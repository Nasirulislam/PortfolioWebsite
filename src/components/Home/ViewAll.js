import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Home.css";
function ViewAll(props) {
  const ref1 = useRef(null);
  const isInViewport = useIsInViewport(ref1);

  if (isInViewport) {
    handleChange({ name: "View All Projects", slug: "viewall" });
  }

  function handleChange(name) {
    props.onChange(name);
  }

  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  }
  const ViewAllClick = () => {
      props.indexBtn();
    
  };
  return (
    <div ref={ref1} className="viewAll-projects" >
      <div className="viewall" onClick={() =>  props.indexBtn()}>
        <h1 data-text={"view All Projects"}>View All Projects</h1>
        {/* <h1>Projects</h1> */}
      </div>
    </div>
  );
}

export default ViewAll;
