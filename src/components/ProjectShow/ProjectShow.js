import React from "react";
import { useLocation } from "react-router-dom";
import "./ProjectShow.css";

const ProjectShow = () => {
    const location = useLocation();

    const id = location.state?.id;
    const name = location.state?.name;
    const caption = location.state?.caption;
    const image = location.state?.image;
    const language = location.state?.language;

    return (
        <section className="project-show-container">
            <div className="project-show-card">
                <h1 className="project-show-title">{name}</h1>
                <div className="project-show-meta">
                    <span>ID: {id}</span>
                    <span>Language: {language}</span>
                </div>

                <div className="project-show-image-wrapper">
                    <img src={image} alt="Project Preview" />
                </div>

                <p className="project-show-caption">{caption}</p>

            </div>
        </section>
    );
};

export default ProjectShow;
