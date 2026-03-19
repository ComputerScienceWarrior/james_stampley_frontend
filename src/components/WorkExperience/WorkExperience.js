import React, { useState } from "react";
import "./WorkExperience.css";

const WorkExperience = (props) => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <section className={`work-card ${viewMore ? "open" : ""}`}>
      
      <div className="work-header" onClick={() => setViewMore(!viewMore)}>
        
        <div className="work-main">
          <h3 className="work-job">{props.jobTitle}</h3>
          <p className="work-company">{props.jobName}</p>
        </div>

        <div className="work-meta">
          <span className="work-date">{props.date}</span>

          <span className="work-toggle">
            {viewMore ? "−" : "+"}
          </span>
        </div>

      </div>

      <div className={`work-content ${viewMore ? "show" : ""}`}>
        <ul>
          {props.bullet1 && <li>{props.bullet1}</li>}
          {props.bullet2 && <li>{props.bullet2}</li>}
          {props.bullet3 && <li>{props.bullet3}</li>}
          {props.bullet4 && <li>{props.bullet4}</li>}
        </ul>
      </div>

    </section>
  );
};

export default WorkExperience;
