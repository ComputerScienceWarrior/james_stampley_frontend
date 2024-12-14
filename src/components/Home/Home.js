import React from "react";
import './Home.css';

const Home = () => {
    return(
        <div className="container">
            <header className="header">
                <p className="headerText">
                    James-Ryan Stampley's Software Engineering Portfolio
                </p>
                <section className="linksWrapper">
                    <button className="buttons" id="aboutButton">About Me</button>
                    <button className="buttons" id="contactButton">Contact Me</button>
                    <button className="buttons" id="projectsButton">View Projects</button>
                    <button className="buttons" id="resumeButton">View Resume</button>
                </section>
            </header>
        </div>
    );
};

export default Home;
