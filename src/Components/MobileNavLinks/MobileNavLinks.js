import React from "react";
import "./MobileNavLinks.css"

function MobileNavLinks() {
    return (
        <>
            <div className="mobile-nav-links" style={{ display: 'flex', flexDirection: 'column', flex: 1}}>
                <a href="#home" className="mobile-link">Home</a>
                <a href="#about" className="mobile-link">About</a>
                <a href="#experience" className="mobile-link">Experience</a>
                <a href="#contact" className="mobile-link">Contact</a>
            </div>

            <br/>

            <div className="mobile-nav-social">
                <a href="https://github.com/PatoSala" target="_blank" className="social-link">
                    <img align="left" width="30px" src="https://simpleicons.vercel.app/github/fff" />
                </a>
                <a href="https://www.upwork.com/freelancers/~01ae8e6591992ff092" target="_blank" className="social-link">
                    <img align="left" width="30px" src="https://simpleicons.vercel.app/upwork/fff" />
                </a>
                <a href="https://www.linkedin.com/in/patricio-sala-1025a1190/" target="_blank" className="social-link">
                    <img align="left" width="30px" src="https://simpleicons.vercel.app/linkedin/fff" />
                </a>
            </div>
            </>
    )
}

export default MobileNavLinks;