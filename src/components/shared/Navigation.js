import React from "react";
import './Navigation.css';

const Navigation = () => {
    return(
        <div className="wrapper">
            <div className="navigationWrapper">
                <a className="items" href="/">Home</a>
                <a className="items" href="/about">About</a>
                <a className="items" href="/contact">Contact</a>
                <a className="items" href="/resume">Resume</a>
                <a className="items" href="/projects">Projects</a>
            </div>
        </div>
    );
};

export default Navigation;
