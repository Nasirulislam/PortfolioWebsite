import React from "react";
import "./Home.css";
function ViewAll(props) {

  return (
    <div className="viewAll-projects" >
      <div className="viewall" onClick={() => props.indexBtn()}>
        <h1 data-text={"view All Projects"}>View All Projects</h1>
      </div>
    </div>
  );
}

export default ViewAll;
