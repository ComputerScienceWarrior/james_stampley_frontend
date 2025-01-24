import React from "react";
import './About.css';
import { aboutMeText } from "../extras/TextBodies";

const About = () => {
    return (
        <section className="wrapper">
            <header className="aboutHeader">
                A little about James-Ryan Stampley...
            </header>
            <section className="body">
                <p>{aboutMeText}</p>
            </section>
        </section>
    );
};

export default About;
