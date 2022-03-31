import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            {props.children}
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                <a href={props.link} className="btn btn-primary">{props.linkText}</a>
            </div>
        </div>
    );
}
