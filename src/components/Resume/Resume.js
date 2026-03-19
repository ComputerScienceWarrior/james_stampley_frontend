import React from "react";
import './Resume.css';
import { summaryText } from "../extras/TextBodies";
import WorkExperience from "../WorkExperience/WorkExperience";
import Education from "../Education/Education";

const Resume = () => {
    return(
       <section className="resume-container">
            <div className="resume-card">

                <div className="resume-header">
                    <h1 className="resume-name">James-Ryan Stampley</h1>
                    <div className="resume-contact">
                        <span>(602)-374-0977</span>
                        <span>software.engineer.ryan@gmail.com</span>
                    </div>
                </div>

                <section className="resume-section">
                    <h2 className="section-title">Professional Summary</h2>
                    <p className="section-body">{summaryText}</p>
                </section>

                <section className="resume-section">
                    <h2 className="section-title">Work Experience</h2>

                    <WorkExperience
                        jobName="Amazon.com"
                        jobTitle="Process Guide"
                        date="JULY 2019 - DECEMBER 2024"
                        bullet1="Achieved a solo 500+ average package stow rate daily..."
                        bullet2="Advanced from temporary hire to management in 3 months..."
                        bullet3="Trained and prepared 10+ new hires weekly..."
                        bullet4="Assisted management in efficiently managing associates..."
                    />

                    <WorkExperience
                        jobName="Floorplan Xpress"
                        jobTitle="Full Stack Software Engineer"
                        date="FEBRUARY 2022 - September 2023"
                        bullet1="Full stack development using Ruby, Rails, and React..."
                        bullet2="Managed deployments on Heroku and mobile apps..."
                        bullet3="Built automation tools and marketing applications..."
                        bullet4="Collaborated across teams to deliver scalable solutions..."
                    />

                    <WorkExperience
                        jobName="Walmart"
                        jobTitle="Overnight Stocker"
                        date="NOVEMBER 2021 - FEBRUARY 2022"
                        bullet1="Provided customer support and assistance..."
                        bullet2="Maintained store safety and monitored entrances..."
                        bullet3="Resolved customer concerns efficiently..."
                        bullet4="Demonstrated strong communication and professionalism..."
                    />
                </section>

                <section className="resume-section">
                    <h2 className="section-title">Education</h2>

                    <Education 
                        name="Mount Miguel High"
                        gradeLevel="High School"
                        yearsAttended="2006 to 2009"
                        degree="High School Diploma"
                        bullet1="Obtained High School Diploma."
                    />

                    <Education 
                        name="Grand Canyon University"
                        gradeLevel="College"
                        yearsAttended="2017 - 2019"
                        bullet1="Studied Computer Science."
                        bullet2="Coursework in Java, C#, PHP, JavaScript, SQL."
                    />

                    <Education 
                        name="Flatiron Coding School"
                        gradeLevel="Trade School"
                        yearsAttended="2019 - 2020"
                        bullet1="Focused on Ruby development."
                        bullet2="Built applications using Ruby on Rails."
                    />

                    <Education 
                        name="Netcom Learning School"
                        gradeLevel="Trade School"
                        yearsAttended="2024"
                        bullet1="Earned CompTIA ITF+ and Core 1 A+ certifications."
                        bullet2="Studied networking and IT fundamentals."
                    />
                </section>

            </div>
        </section>
    );
};

export default Resume;
