import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Home.css";
function ViewAll(props) {

  const ViewAllClick = () => {
    props.indexBtn();

  };
  return (
    <div className="viewAll-projects">
      <div className="viewall" onClick={() => props.indexBtn()}>
      </div>
    </div>
  );
}

export default ViewAll;
