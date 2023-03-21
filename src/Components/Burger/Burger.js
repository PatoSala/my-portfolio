import React from "react";
import "./Burger.css";

function Burger({ toggle }) {
    return (
        <div className="burger-container" onClick={toggle}>
            <div className="tile" id="1"></div>
            <div className="tile" id="2"></div>
            <div className="tile" id="3"></div>
        </div>
    )
}

export default Burger;