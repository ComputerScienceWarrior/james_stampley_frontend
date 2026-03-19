import React, { useState } from "react";
import "./Education.css";

const Education = (props) => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <section className={`education-card ${viewMore ? "open" : ""}`}>
      
      <div
        className="education-header"
        onClick={() => setViewMore(!viewMore)}
      >
        <div className="education-main">
          <h3 className="education-school">{props.name}</h3>
          <p className="education-degree">{props.degree}</p>
        </div>

        <div className="education-meta">
          <span className="education-years">{props.yearsAttended}</span>
          <span className="education-toggle">
            {viewMore ? "−" : "+"}
          </span>
        </div>
      </div>

      <div className={`education-content ${viewMore ? "show" : ""}`}>
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

export default Education;
