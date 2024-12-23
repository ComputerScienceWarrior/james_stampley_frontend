import React from "react";
import './Resume.css';
import { summaryText } from "../extras/TextBodies";
import WorkExperience from "../WorkExperience/WorkExperience";

const Resume = () => {
    return(
        <section className="resumeContainer">
            <section className="resumePadded">
                <section className="headerInfo">
                    <section>James-Ryan Stampley</section>
                    <section>(602)-374-0977</section>
                    <section>software.engineer.ryan@gmail.com</section>
                </section>
                <section className="summary">
                    <section className="titleHeader">Professional Summary</section>
                    <section className="summaryBody">{summaryText}</section>
                </section>
                <section className="titleHeader">Work Experience</section>
                <WorkExperience
                    jobTitle="AMAZON.COM"
                    date="JULY 2019 - DECEMBER 2024"
                    bullet1="Achieved a solo 500+ average package stow rate daily (260 above the 240 average required rate), by following best practices and procedures."
                    bullet2="Advanced from temporary hire, to management in 3 months by exuding leadership standards in all areas of the warehouse."
                    bullet3="Trained, oversaw and prepared at least 10 new hires on a weekly basis leading to improved new-hire performance."
                    bullet4="Worked as a Process Guide, assisting management in efficiently dispersing and managing associates, leading to success in hitting packing numbers on a weekly basis."
                />
            </section>
        </section>
    );
};

export default Resume;
