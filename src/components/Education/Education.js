import React, { useState } from "react";
import './Education.css';

const Eduaction = (props) => {
    const [viewMore, setViewMore] = useState(false);
    const changeView = () => {
        setViewMore(!viewMore);
    };

    return(
        <section className="educationWrapper">
            <section className="schoolNameAndDatesAttended">
                <section className="">{props.name}</section>
                <section className="">{props.yearsAttended}</section>
            </section>
            <section><b>{props.degree}</b></section>
            <button className="viewMoreToggle" onClick={changeView}>
                {
                    viewMore 
                        ?
                            <img alt="img" className="imageArrow" src="/arrow-up.png"/>
                        : 
                            <img alt="img" className="imageArrow" src="/drop-down-arrow.png"/>
                }
            </button>
            {
                viewMore && (
                    <ul>
                        {props.bullet1 && ( <li>{props.bullet1}</li> ) }
                        {props.bullet2 && ( <li>{props.bullet2}</li> ) }
                        {props.bullet3 && ( <li>{props.bullet3}</li> ) }
                        {props.bullet4 && ( <li>{props.bullet4}</li> ) }
                    </ul>
                )
            }
        </section>
    );
};

export default Eduaction;
