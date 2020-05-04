import React from "react";
import {Col, Form} from "react-bootstrap"
import './SelectSubCategory.css';

const SelectSubCategory = () => {
    return (
        <Col md="6" sm="6">
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select a subcategory</Form.Label>
                    <Form.Control as="select">
                        <option defaultValue>Subcategories</option>
                        <option value="horses">Horses</option>
                        <option value="cane">Cane</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </Col>
    )
}

export default SelectSubCategory;