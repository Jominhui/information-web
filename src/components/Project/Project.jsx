import React from "react";
import "./Project.scss";
import { Link } from "react-router-dom";

const Project = ({}) => {
  return (
    <>
      <div className="project">
        <div className="project-title">Project</div>
        <Link to="/ida">
          <div className="project-content">ida</div>
        </Link>
        <Link to="/eight">
          <div className="project-content">eight studio new clone</div>
        </Link>
      </div>
    </>
  );
};

Project.propTypes = {};

export default Project;
