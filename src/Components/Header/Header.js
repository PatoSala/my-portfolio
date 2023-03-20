import React from "react";
import "./Header.css";

// Components
import Burger from "../Burger/Burger";

function Header() {
    return (
        <div className="header-container">
            <Burger/>
        </div>
    )
}

export default Header;