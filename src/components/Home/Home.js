import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="container">
            <header className="header">
                <p className="headerText">
                    James-Ryan Stampley's Software Engineering Portfolio
                </p>
                <section className="linksWrapper">
                    <button className="buttons" id="aboutButton"><Link to='/about'>About</Link></button>
                    <button className="buttons" id="contactButton"><Link to='/contact'>Contact Me</Link></button>
                    <button className="buttons" id="projectsButton"><Link to='/projects'>View Projects</Link></button>
                    <button className="buttons" id="resumeButton"><Link to='/resume'>View Resume</Link></button>
                </section>
            </header>
        </div>
    );
};

export default Home;
