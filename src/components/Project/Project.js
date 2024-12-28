import React from "react";
import './Project.css';
import { useNavigate } from "react-router-dom";

const Project = (props) => {
    const navigate = useNavigate();

    return(
        <section className="projectWrapper">
            <header className="projectCardName"><b>{props.name}</b></header>
            <img className="cardImage" src={props.imageSource} />
            <button onClick={() => navigate(`/project/${props.id}`, {state: {name: props.name, image: props.imageSource, id: props.id, caption: props.caption }})}>View Project</button>
            <section className="cardCaption">{props.caption}</section>
        </section>
    );
};

export default Project;
