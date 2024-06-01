import React from "react";
import Navbar from "./Navbar.js";
import Hero from "./Hero.js";
import Card from "./Card.js";
import experiences from "../data.js";

export default function App() {
    //mapping over data to create instances of </Card > component to render later
    const card = experiences.map((experience) => {
        return (
            <Card
                key={experience.id}
                //passing objects as prop
                //then use destructuring params in your functional component
                props={experience}

                // img={experience.coverImg}
                // rating={experience.stats.rating}
                // reviewCount={experience.stats.reviewCount}
                // location={experience.location}
                // openSpots={experience.openSpots}
                // title={experience.title}
                // price={experience.price}
            />
        );
    });
    return (
        <>
            <Navbar />
            <Hero />
            <div className="cards-container">{card}</div>
        </>
    );
}
