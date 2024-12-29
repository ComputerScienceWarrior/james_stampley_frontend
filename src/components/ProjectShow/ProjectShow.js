import React from "react";
import { useLocation } from "react-router-dom";
import "./ProjectShow.css";

const ProjectShow = () => {
    const location = useLocation();

    const id = location.state?.id;
    const name = location.state?.name;
    const caption = location.state?.caption;
    const image = location.state?.image;

    return (
        <section className="projectShowWrapper">
            <section className="projectDetails">
                <div className="projectDetail">ID: <span>{id}</span></div>
                <div className="projectDetail">Project Name: <span>{name}</span></div>
            </section>
            <section className="imageWrapper">
                <img src={image} alt="Project Preview" className="projectImage" />
            </section>
            <section className="captionWrapper">
                <p>{caption}</p>
            </section>
        </section>
    );
};

export default ProjectShow;
