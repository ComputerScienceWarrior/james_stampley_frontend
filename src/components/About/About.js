import './About.css';
import { aboutMeText } from "../extras/TextBodies";

const About = () => {
    return (
        <section className="about-container">
            <div className="about-card">
                <h1 className="about-title">A little about James-Ryan Stampley...</h1>
                <div className="about-divider"></div>
                <section className="about-body">
                    <p>{aboutMeText}</p>
                </section>
            </div>
        </section>
    );
};

export default About;
