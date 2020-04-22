import React from "react";
import './Card.css';

const Card = ({label, src, date}) => {
    console.log(date);
    return (
        <div className="col-md-3">
            <div className="card">
                <img src={ src } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{label}</h5>
                    <span className="card-text">{date.day}/</span>
                    <span className="card-text">{date.month}/</span>
                    <span className="card-text">{date.year}</span>
                    <a href="/" className="btn btn-primary">Переход куда-нибудь</a>
                </div>
            </div>
        </div>
    )
}

export default Card;



