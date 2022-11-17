import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Home.css"
function ViewAll(props) {
  const ref1 = useRef(null);
  // const ref2 = useRef(null);
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
  return (
    <div ref={ref1} className="view-all-project">
      <div className="home-title"></div>
    </div>
  );
}

export default ViewAll;
