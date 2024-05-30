//Hero component
import React from "react";
import group from "../images/group.png";

export default function Hero() {
    return (
        <section className="hero--section">
            <img src={group}></img>
            <h1 className="hero--heading"> Online Experiences</h1>
            <p className="hero--info">
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </p>
        </section>
    );
}
