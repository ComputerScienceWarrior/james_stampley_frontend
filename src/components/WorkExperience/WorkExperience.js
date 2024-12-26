import React from "react";
import './WorkExperience.css';

const WorkExperience = ( props ) => {
    return(
        <section className="workExperienceSummaries">
            <section className="date">{props.jobName} - <b>{props.jobTitle}</b></section>
            <ul>
                {props.bullet1 && ( <li>{props.bullet1}</li> ) }
                {props.bullet2 && ( <li>{props.bullet2}</li> ) }
                {props.bullet3 && ( <li>{props.bullet3}</li> ) }
                {props.bullet4 && ( <li>{props.bullet4}</li> ) }
            </ul>
        </section>
    );
};

export default WorkExperience;
