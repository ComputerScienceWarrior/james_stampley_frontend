import React from "react";
import './Resume.css';
import { summaryText } from "../extras/AboutMeText";

const Resume = () => {
    return(
        <section className="resumeContainer">
            <section>
                <section className="headerInfo">
                    <section>James-Ryan Stampley</section>
                    <section>(602)-374-0977</section>
                    <section>software.engineer.ryan@gmail.com</section>
                </section>
                <section className="summary">
                    <section className="titleHeader">Professional Summary</section>
                    <section className="summaryBody">{summaryText}</section>
                </section>
                <section className="workExperience">
                    <section className="titleHeader">Work Experience</section>
                </section>
            </section>
        </section>
    );
};

export default Resume;
