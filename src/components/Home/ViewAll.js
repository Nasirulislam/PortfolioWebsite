import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
function ViewAll(props) {

  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate('/index')
  }
  return (
    <div className="viewAll-projects" onClick={() => props.indexBtn()}>
      <div className="viewall" >
          <h1 data-text={"view All Projects"}>
          View All Projects</h1>
      </div>
    </div>
  );
}

export default ViewAll;
