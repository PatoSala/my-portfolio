import React from "react";
import "./HomePage.css";

// Components
import Header from "../../Components/Header/Header";
import Landing from "../../Components/LandingSection/Landing";
import About from "../../Components/AboutSection/About";
import Experience from "../../Components/ExperienceSection/Experience";
import Contact from "../../Components/ContactSection/Contact";

function HomePage() {
    return (
        <div className="">
            <Header/>
            <Landing/>
            <About/>
            <Experience/>
            <Contact/>
        </div>
    )
}

export default HomePage;