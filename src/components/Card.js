import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <section className="card--img-container">
                <p className="image-label">Sold Out</p>
                <img className="card--image" src={props.img} />
            </section>
            <p className="card--ratings">
                <img className="star" src="/images/star.png" /> {props.rating}(
                {props.reviewCount})•{props.country}
            </p>
            <p className="card--description">{props.title}</p>
            <p className="card--price">
                <span>From ${props.price}</span> / person
            </p>
        </div>
    );
}
