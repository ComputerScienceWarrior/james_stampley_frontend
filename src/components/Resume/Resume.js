import React from "react";
import './Resume.css';
import { summaryText } from "../extras/TextBodies";
import WorkExperience from "../WorkExperience/WorkExperience";
import Education from "../Education/Education";

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
                <section className="titleHeader">Education</section>
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
                    yearsAttended="October 2017 to October 2019"
                    degree=""
                    bullet1="Attended Grand Canyon University to study Computer Science."
                    bullet2="Completed coursework in Java, C#, PHP, JavaScript, and SQL."
                    bullet3="Developed a strong foundation in object-oriented programming concepts."
                    bullet4="Enhanced problem-solving skills and programming proficiency."
                />
                <Education 
                    name="Flatiron Coding School"
                    gradeLevel="Trade School"
                    yearsAttended=" July 2019 to March 2020"
                    degree=""
                    bullet1="Attended Flatiron Coding School's program, focusing on Ruby development."
                    bullet2="Gained foundational knowledge in web development and object-oriented programming."
                    bullet3="Acquired hands-on experience building applications with Ruby and Ruby on Rails."
                    bullet4="Leveraged skills gained to jumpstart professional experience in software development."
                />
                <Education 
                    name="Netcom Learning School"
                    gradeLevel="Trade School"
                    yearsAttended="April 2024 to July 2024"
                    degree=""
                    bullet1="Completed training remotely with a focus on IT fundamentals and certifications."
                    bullet2="Earned the CompTIA ITF+ and Core 1 A+ certifications."
                    bullet3="Gained knowledge in IT basics, including coursework in Network+ fundamentals."
                    bullet4="Continuing preparation to solidify skills and earn certifications in Core 2 A+ and Network+."
                />
            </section>
        </section>
    );
};

export default Resume;
