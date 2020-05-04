import React from "react";
import {Col, Form} from "react-bootstrap";
import './SelectCategory.css';

const SelectCategory = ({ selectCategory }) => {
    const selectItem = selectCategory.map(({category, id}) => {
        return <option key = {id} value = { category }>{ category }</option>
    })

    return (
        <Col md="6" sm="6">
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select a category</Form.Label>
                    <Form.Control as="select">
                        <option defaultValue>Сategories</option>
                        {selectItem}
                    </Form.Control>
                </Form.Group>
            </Form>
        </Col>
    )
}

export default SelectCategory;