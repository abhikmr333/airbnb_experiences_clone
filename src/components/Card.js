import React from "react";

//better to destructure here than to use something like props.props.coverImg
export default function Card({ props }) {
    // console.log(props);
    let labelText;
    if (props.openSpots === 0) labelText = "Sold Out";
    else if (props.location === "Online") labelText = "Online";

    return (
        <div className="card">
            <section className="card--img-container">
                {/*conditional rendering 
                  using && operator
                  true && true
                  if true && excute this
                  if false && never gets executed
                */}
                {labelText && <p className="image-label">{labelText}</p>}
                <img
                    className="card--image"
                    src={`/images/${props.coverImg}`}
                />
            </section>
            <p className="card--ratings">
                <img className="card--star" src="/images/star.png" />
                {props.stats.rating}({props.stats.reviewCount})•{props.location}
            </p>
            <p className="card--description">{props.title}</p>
            <p className="card--price">
                <span>From ${props.price}</span> / person
            </p>
        </div>
    );
}
