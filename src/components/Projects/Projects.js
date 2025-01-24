import React from "react";
import Project from "../Project/Project";
import './Projects.css';
import ProjectData from "../extras/ProjectData";

const Projects = () => {
    return(
        <section className="projectsWrapper">
           {ProjectData.map((project) =>{
            return(
                <Project
                    key={project.id} 
                    id={project.id}
                    name={project.name}
                    caption={project.caption}
                    imageSource={project.imageSource}
                    language={project.language}
                    cardColor={project.cardColor}
                />
            )
           })} 
        </section>
    );
};

export default Projects;
