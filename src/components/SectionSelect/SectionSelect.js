import React from "react";
import { Container, Row } from "react-bootstrap";
import './SectionSelect.css';
import SelectCategory from "../SelectCategory";
import SelectSubCategory from '../SelectSubCategory';

const SectionSelect = ({ card }) => {
    return (
        <section className="select">
            <Container>
                <Row className="justify-content-md-center">
                    <SelectCategory selectCategory = { card }/>
                    <SelectSubCategory />
                </Row>
            </Container>
        </section>
    )
}

export default SectionSelect;

