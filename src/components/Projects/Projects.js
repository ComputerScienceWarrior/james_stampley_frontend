import React from "react";
import Project from "../Project/Project";
import './Projects.css';
import ProjectData from "../extras/ProjectData";

const Projects = () => {
    return(
        <section className="projects-container">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-grid">
                {ProjectData.map((project) => {
                    return (
                        <Project
                        key={project.id}
                        id={project.id}
                        name={project.name}
                        caption={project.caption}
                        imageSource={project.imageSource}
                        language={project.language}
                        cardColor={project.cardColor}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
