import React from "react";
import './SelectCategory.css';

const SelectCategory = () => {
    return (
        <div className="form-group col-md-3 col-sm-6">
            <label htmlFor="exampleFormControlSelect1">Select a category</label>
            <select className="form-control" id="exampleFormControlSelect1">
                <option selected value>Сategories</option>
                <option value="animals">Animals</option>
                <option value="plants">Plants</option>
            </select>
        </div>
    )
}

export default SelectCategory;