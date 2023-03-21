import React, { useState } from "react";
import "./Header.css";

// Components
import Burger from "../Burger/Burger";
import NavLinks from "../NavLinks/NavLinks";
import MobileNavLinks from "../MobileNavLinks/MobileNavLinks";

function Header() {

    const [open, setOpen] = useState(false);

    let scrollToContact = (e) => {
        e.preventDefault();
        let element = document.getElementsByClassName('contact');
        console.log(element);
    }

    return (
        <div className="header-container" style={{ display: 'flex', flexDirection: 'column' }}>
            
            <div className="header-top" style={{ display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
                <Burger toggle={() => setOpen(!open)}/>
                <NavLinks/>
            </div>

            <div className="mobile-links-container" style={{ height: open ? '100vh' : 0, width: '100%', transition: '0.2s', overflow: 'hidden' }}>
                <MobileNavLinks/>
            </div>

        </div>
    )
}

export default Header;