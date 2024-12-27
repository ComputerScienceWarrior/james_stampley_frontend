import React from "react";
import Project from "../Project/Project";
import './Projects.css';

const Projects = () => {
    return(
        <section className="projectsWrapper">
            <Project 
                id="1"
                name="Fitness Mobile App" 
                caption="A fitness Mobile Application to help you along the way of your fitness journey." 
                imageSource="https://placehold.co/600x400"
            />
        </section>
    );
};

export default Projects;
