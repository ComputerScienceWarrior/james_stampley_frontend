import React from "react";
import './About.css';
import aboutMeText from "../extras/AboutMeText";

const About = () => {
    return(
        <section className="wrapper">
            <header>A little about James-Ryan Stampley...</header>
            <section className="body">
                {aboutMeText}
            </section>
        </section>
    );
};

export default About;
