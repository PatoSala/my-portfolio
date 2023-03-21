import React from "react";
import "./About.css";

function About() {
    return (
        <div className="section">
            
            <div className="about">
                <h1 className="ab-title">About Me</h1>

                <p className="section-description" style={{color: 'white'}}>

                    I started my journey as a developer in 2020 during the pandemic. By the hand of <a href="https://digitalhouse.com" target="_blank" style={{textDecoration: 'none'}}><strong style={{color: '#f79e38'}}>Digital House</strong></a>,
                    I learned everything about full-stack development and later on I got hired as a <a href="https://reactnative.dev" target="_blank" style={{textDecoration: 'none'}}><strong style={{color: '#f79e38'}}>React Native</strong></a> developer.
                    <br/>
                    <br/>
                    Now I'm looking foward to start my career as a freelancer developer. All of my projects are done using NodeJS and
                </p>

            </div>

        </div>
    )
}

export default About;