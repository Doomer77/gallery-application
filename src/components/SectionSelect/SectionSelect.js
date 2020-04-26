import React from "react";
import './SectionSelect.css';
import SelectCategory from "../SelectCategory";
import SelectSubCategory from '../SelectSubCategory';

const SectionSelect = ({ card }) => {
    return (
        <section className="select">
            <div className="container">
                <div className="row justify-content-md-center">
                    <SelectCategory selectCategory = { card }/>
                    <SelectSubCategory />
                </div>
            </div>
        </section>
    )
}

export default SectionSelect;

