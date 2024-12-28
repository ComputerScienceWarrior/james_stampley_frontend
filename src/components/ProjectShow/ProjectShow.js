import React from "react";
import { useLocation } from "react-router-dom";

const ProjectShow = () => {
    const location = useLocation();

    const id = location.state?.id
    const name = location.state?.name
    const caption = location.state?.caption
    const image = location.state?.image

    return(
        <section className="">
            <section className="projectIdAndNameWrapper">
                <section className="projectIdDiv">
                    ID: {id}
                </section>
                <section className="projectNameDiv">
                    Project Name: {name}
                </section>
            </section>
            <section className="imageWrapper">
                <img src={image}/>
            </section>
            <section className="captionWrapper">
                Caption: {caption}
            </section>
        </section>
    );
};

export default ProjectShow;
