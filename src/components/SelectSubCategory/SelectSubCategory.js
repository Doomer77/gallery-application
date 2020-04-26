import React from "react";
import './SelectSubCategory.css';

const SelectSubCategory = () => {
    return (
        <div className="form-group col-md-6 col-sm-6">
            <label htmlFor="exampleFormControlSelect1">Select a subcategory</label>
            <select className="form-control" id="exampleFormControlSelect1">
                <option selected value>Subcategories</option>
                <option value="horses">Horses</option>
                <option value="cane">Cane</option>
            </select>
        </div>
    )
}

export default SelectSubCategory;