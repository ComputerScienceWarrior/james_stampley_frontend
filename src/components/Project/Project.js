import React from "react";
import './Project.css';

const Project = (props) => {
    return(
        <section className="projectWrapper">
            <header className="projectCardName"><b>{props.name}</b></header>
            <img className="cardImage" src={props.imageSource} />
            <section className="cardCaption">{props.caption}</section>
        </section>
    );
};

export default Project;
