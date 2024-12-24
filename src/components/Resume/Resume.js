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
                    jobName="Amazon.com"
                    jobTitle="Process Guide"
                    date="JULY 2019 - DECEMBER 2024"
                    bullet1="Achieved a solo 500+ average package stow rate daily (260 above the 240 average required rate), by following best practices and procedures."
                    bullet2="Advanced from temporary hire, to management in 3 months by exuding leadership standards in all areas of the warehouse."
                    bullet3="Trained, oversaw and prepared at least 10 new hires on a weekly basis leading to improved new-hire performance."
                    bullet4="Worked as a Process Guide, assisting management in efficiently dispersing and managing associates, leading to success in hitting packing numbers on a weekly basis."
                />
                <WorkExperience
                    jobName="Floorplan Xpress"
                    jobTitle="Full Stack Software Engineer"
                    date="FEBRUARY 2022 - September 2023"
                    bullet1="Skilled Full Stack Software Engineer with expertise in Ruby, Ruby on Rails, and React JS, specializing in creating clean, reusable features that exceed user expectations."
                    bullet2="Experienced in managing web applications on Heroku, ensuring seamless deployment and performance, and maintaining React Native mobile apps with regular updates for iOS and Google Play Stores."
                    bullet3="Notable achievements include developing a custom Ruby web scraper for Tableau automation, revitalizing a deprecated React Native app, and collaborating on a complex Ruby on Rails/React JS marketing application integrating with a main system for personalized website creation and inventory marketing."
                    bullet4="Proven success in full-stack development and mobile app maintenance, confident in contributing to software engineering teams and driving innovation."
                />
                <WorkExperience
                    jobName="Walmart"
                    jobTitle="Overnight Stocker"
                    date="NOVEMBER 2021 - FEBRUARY 2022"
                    bullet1="Welcomed customers during overnight hours, providing a friendly first impression and answering questions about store policies and services."
                    bullet2="Monitored entrance and exit areas to ensure safety, security, and cleanliness while supporting loss prevention efforts by reporting suspicious activities."
                    bullet3="Assisted customers with directions, inquiries, and resolving concerns, coordinating with team members to address their needs promptly."
                    bullet4="Demonstrated strong communication skills, a positive attitude, and professionalism in handling diverse customer interactions."
                />
            </section>
        </section>
    );
};

export default Resume;
