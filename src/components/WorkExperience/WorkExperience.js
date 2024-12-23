import React from "react";


const WorkExperience = ( props ) => {
    return(
        <section className="workExperienceSummaries">
            <section className="date">{props.jobTitle} - {props.date}</section>
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
