//Navbar component
import React from "react";
import airbnbLogo from "../images/airbnb.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={airbnbLogo} className="airbnb-logo" />
        </nav>
    );
}
