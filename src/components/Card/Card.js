import React from "react";
import './Card.css';

const Card = ({label, src, date}) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
            <div className="card">
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                <img src={ src } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{label}</h5>
                    <div className="row">
                        <div className="date-box col-4">
                            <span className="card-text">{date.day}/{date.month}/{date.year}</span>
                        </div>
                        <div className="social-box col-4">
                            <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            <i className="fa fa-vk" aria-hidden="true"></i>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                        <div className="download-box col-4">
                            <a href="/" className="btn btn-primary">Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;



