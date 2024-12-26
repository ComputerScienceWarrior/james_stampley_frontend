import React from "react";
import './Education.css';

const Eduaction = (props) => {
    return(
        <section className="educationWrapper">
            <section className="schoolNameAndDatesAttended">
                <section className="">{props.name}</section>
                <section className="">{props.yearsAttended}</section>
            </section>
            <section><b>{props.degree}</b></section>
            <ul>
                {props.bullet1 && ( <li>{props.bullet1}</li> ) }
                {props.bullet2 && ( <li>{props.bullet2}</li> ) }
                {props.bullet3 && ( <li>{props.bullet3}</li> ) }
                {props.bullet4 && ( <li>{props.bullet4}</li> ) }
            </ul>
        </section>
    );
};

export default Eduaction;
