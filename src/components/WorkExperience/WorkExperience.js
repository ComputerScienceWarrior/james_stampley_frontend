import React from "react";
import './WorkExperience.css';

const WorkExperience = ( props ) => {
    return(
        <section className="workExperienceSummaries">
            <section className="date">{props.jobName} - <b>{props.jobTitle}</b></section>
            <ul>
                <li>{props.bullet1}</li><br/>
                <li>{props.bullet2}</li><br/>
                <li>{props.bullet3}</li><br/>
                <li>{props.bullet4}</li><br/>
            </ul>
        </section>
    );
};

export default WorkExperience;
