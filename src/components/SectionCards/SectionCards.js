import React from "react";
import Card from "../Card/Card";
import './SectionCards.css';

const SectionCards = ( { card } ) => {
    const elements = card.map((item) => {
        const { id, ...itemProps } = item;
        return(<Card {...itemProps} key={id}/>)

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