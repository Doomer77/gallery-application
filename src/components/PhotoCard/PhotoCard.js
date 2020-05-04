import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import './PhotoCard.css';

export default class PhotoCard extends Component {
    render() {
        const {label, src, date} = this.props;
        return (
            <Col sm="12" md="6" lg="4" xl="3">
                <Card className="card">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    <Card.Img src={ src } className="card-img-top" alt="..." />
                    <Card.Body>
                        <Card.Title className="card-title">{label}</Card.Title>
                        <Row>
                            <Col col="4" className="date-box">
                                <span className="card-text">{date.day}/{date.month}/{date.year}</span>
                            </Col>
                            <Col col="4" className="social-box">
                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                <i className="fa fa-vk" aria-hidden="true"></i>
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </Col>
                            <Col col="4" className="download-box">
                                <a href="/" className="btn btn-primary">Download</a>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

