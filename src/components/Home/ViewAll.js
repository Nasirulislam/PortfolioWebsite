import React from "react";
import "./Home.css";
function ViewAll(props) {

  return (
    <div className="viewAll-projects" onClick={() => props.indexBtn()}>
      <div className="viewall">
        <h1 data-text={"view All Projects"}>View All Projects</h1>
      </div>
    </div>
  );
}

export default ViewAll;
