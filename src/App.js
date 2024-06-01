import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            {/* Adding props to card component */}
            <Card
                img="/images/katie_zaferes.png"
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </>
    );
}
