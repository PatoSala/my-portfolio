import React, { useState } from "react";
import "./Header.css";

// Components
import Burger from "../Burger/Burger";
import NavLinks from "../NavLinks/NavLinks";

function Header() {

    const [open, setOpen] = useState(false);

    return (
        <div className="header-container" style={{ display: 'flex', flexDirection: 'column' }}>
            
            <div className="header-top" style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', padding: '30px 0px'}}>
                <Burger toggle={() => setOpen(!open)}/>
                <NavLinks/>
            </div>

            <div className="mobile-links-container" style={{ height: open ? 700 : 0, width: '100%', transition: '0.2s', overflow: 'hidden' }}>
                <div className="mobile-nav-links" style={{ display: 'flex', flexDirection: 'column', flex: 1}}>
                    <a href="#home" className="link" style={{fontSize: 25, margin: '10px 20px'}}>Home</a>
                    <a href="#about" className="link" style={{fontSize: 25, margin: '10px 20px'}}>About</a>
                    <a href="#experience" className="link" style={{fontSize: 25, margin: '10px 20px'}}>Experience</a>
                    <a href="#contact" className="link" style={{fontSize: 25, margin: '10px 20px'}}>Contact</a>
                </div>
            </div>

        </div>
    )
}

export default Header;