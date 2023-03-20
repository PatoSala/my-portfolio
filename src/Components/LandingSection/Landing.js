import React from "react";
import "./Landing.css";

function Landing() {
    return (
        <div className="section">
            
            <div className="landing">
                <h1 className="landing-title">Front-end React <br/> Developer 💻</h1>

                <p className="section-description">
                    Hi! 👋 I'm Pato, and I develop front-end applications for <strong>Web</strong>, <strong>Android</strong> and <strong>iOS</strong>.
                    <br/>
                    Buenos Aires, Argentina.📍
                </p>

                <button className="btn-contact">Contact</button>

                {/* <h2>Tech Stack</h2>

                <ul className="tech-stack-container">

                    <li className="tech-stack-item">
                        <a href="#">
                            <img align="left" width="35px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/javascript.svg" />
                        </a>
                    </li>

                    <li className="tech-stack-item">
                        <a href="#">
                            <img align="left" width="35px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/react.svg" />
                        </a>
                    </li>

                    <li className="tech-stack-item">
                        <a href="#">
                            <img align="left" width="35px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/git.svg" />
                        </a>
                    </li>

                </ul> */}

            </div>

        </div>
    )
}

export default Landing;