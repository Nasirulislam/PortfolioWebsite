import React, { useEffect, useState, useMemo, useRef } from "react";

function ViewAllProj() {
  // start viewport intersection
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);

  const isInViewport2 = useIsInViewport(ref2);

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
    <div>
      <div ref={ref1}>Top div {isInViewport1 && "| in viewport ✅"}</div>

      <div style={{ height: "155rem" }} />

      <div ref={ref2}>Bottom div {isInViewport2 && "| in viewport ✅"}</div>
    </div>
  );
  // end intersection viewport
  // return (
  //   <div className='view-all-projects'>

  //   </div>
  // )
}

export default ViewAllProj;
