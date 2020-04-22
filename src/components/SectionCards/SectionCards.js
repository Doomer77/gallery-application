import React from "react";
import Card from "../Card/Card";
import './SectionCards.css';

const SectionCards = ( { card } ) => {
    const elements = card.map((item) => {
        return(<Card {...item}/>)
    })
    return (
        <section className="section-cards">
            <div className="container-fluid">
                <div className="row">
                    {elements}
                </div>
            </div>
        </section>
    )
}

export default SectionCards;