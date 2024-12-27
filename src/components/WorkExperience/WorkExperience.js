import React, { useState } from "react";
import './WorkExperience.css';

const WorkExperience = ( props ) => {
    const [viewMore, setViewMore] = useState(false);

    const changeView = () => {
        setViewMore(!viewMore)
    }
    return (
        <section className="workExperienceSummaries">
            <section className="date">{props.jobName} - <b>{props.jobTitle}</b>
                <button className="viewMoreToggle" onClick={changeView}>
                    { viewMore 
                        ?
                            <img alt="img" className="imageArrow" src="/arrow-up.png"/>
                        : 
                            <img alt="img" className="imageArrow" src="/drop-down-arrow.png"/>
                    } 
                </button>
            </section>
            {
                viewMore && (
                    <ul>
                        { props.bullet1 && ( <li>{props.bullet1}</li> ) }
                        { props.bullet2 && ( <li>{props.bullet2}</li> ) }
                        { props.bullet3 && ( <li>{props.bullet3}</li> ) }
                        { props.bullet4 && ( <li>{props.bullet4}</li> ) }
                    </ul>
                )
            }
        </section>
    );
};

export default WorkExperience;
