import React from "react";
import "./NavLinks.css"

function NavLinks() {
    return (
        <div className="nav-links">
            <a href="#home" className="link">Home</a>
            <a href="#about" className="link">About</a>
            <a href="#experience" className="link">Experience</a>
            <a href="#contact" className="link">Contact</a>
        </div>
    )
}

export default NavLinks;