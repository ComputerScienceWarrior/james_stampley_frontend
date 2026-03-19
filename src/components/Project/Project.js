import './Project.css';
import { useNavigate } from "react-router-dom";

const Project = (props) => {
    const navigate = useNavigate();

    return(
        <section className="project-card">
            <div className="project-image-wrapper">
                <img className="project-image" alt="project-card" src={props.imageSource}/>
            </div>

            <div className="project-content">
                <h2 className="project-title">{props.name}</h2>
                <p className="project-caption">{props.caption}</p>
                <div className="project-footer">
                    <span className="project-tech">{props.language}</span>
                    <button
                        className="project-button"
                        onClick={() =>
                            navigate(`/project/${props.id}`, {
                                state: {
                                name: props.name,
                                image: props.imageSource,
                                id: props.id,
                                caption: props.caption,
                                language: props.language,
                                },
                            })
                        }
                    >
                        View →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Project;
