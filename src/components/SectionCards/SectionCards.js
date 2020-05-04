import React from "react";
import { Container, Row } from "react-bootstrap";
import './SectionCards.css';
import PhotoCard from "../PhotoCard/PhotoCard";

const SectionCards = ( { card } ) => {
    const elements = card.map((item) => {
        const { id, ...itemProps } = item;
        return(<PhotoCard {...itemProps} key={id}/>)
    })
    return (
        <section className="section-cards">
            <Container fluid>
                <Row>
                    {elements}
                </Row>
            </Container>
        </section>
    )
}

export default SectionCards;