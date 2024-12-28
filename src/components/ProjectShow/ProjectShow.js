import React from "react";
import { useLocation } from "react-router-dom";

const ProjectShow = () => {
    const location = useLocation();
    
    const id = location.state?.id
    const name = location.state?.name
    const caption = location.state?.caption

    return(
        <section>
            Show Project Card Here
            {id}
            {name}
            {caption}
        </section>
    );
};

export default ProjectShow;
