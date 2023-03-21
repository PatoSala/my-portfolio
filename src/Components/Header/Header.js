import React, { useState } from "react";
import "./Header.css";

// Components
import Burger from "../Burger/Burger";
import NavLinks from "../NavLinks/NavLinks";

function Header() {

    const [open, setOpen] = useState(false);

    let scrollToContact = (e) => {
        e.preventDefault();
        let element = document.getElementsByClassName('contact');
        console.log(element);
    }

    return (
        <div className="header-container" style={{ display: 'flex', flexDirection: 'column' }}>
            
            <div className="header-top" style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', padding: '30px 0px'}}>
                <Burger toggle={() => setOpen(!open)}/>
                <NavLinks/>
            </div>

            <div className="mobile-links-container" style={{ height: open ? '100vh' : 0, width: '100%', transition: '0.2s', overflow: 'hidden' }}>
                <div className="mobile-nav-links" style={{ display: 'flex', flexDirection: 'column', flex: 1}}>
                    <a href="#home" className="link" style={{fontSize: 25, margin: '10px 20px'}}>Home</a>
                    <a href="#about" className="link" style={{fontSize: 25, margin: '10px 20px'}}>About</a>
                    <a href="#experience" className="link" style={{fontSize: 25, margin: '10px 20px'}}>Experience</a>
                    <a href="#contact" onClick={scrollToContact} className="link" style={{fontSize: 25, margin: '10px 20px'}}>Contact</a>
                </div>

                <br/>

                <div className="mobile-nav-links" style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'end', position: 'relative', right: 20, top: 20}}>
                    <a href="#home" className="link" style={{fontSize: 25, margin: '10px 0px'}}>
                        <img align="left" width="30px" src="https://simpleicons.vercel.app/github/fff" />
                    </a>
                    <a href="#about" className="link" style={{fontSize: 25, margin: '10px 0px'}}>
                        <img align="left" width="30px" src="https://simpleicons.vercel.app/upwork/fff" />
                    </a>
                    <a href="#about" className="link" style={{fontSize: 25, margin: '10px 0px'}}>
                        <img align="left" width="30px" src="https://simpleicons.vercel.app/linkedin/fff" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Header;