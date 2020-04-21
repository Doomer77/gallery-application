import React from "react";
import './SelectCategory.css';

const SelectCategory = () => {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="form-group col-md-3 col-sm-6">
                    <label htmlFor="exampleFormControlSelect1">Select a category</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option selected value>Сategories</option>
                        <option value="animals">Animals</option>
                        <option value="plants">Plants</option>
                    </select>
                </div>
                <div className="form-group col-md-3 col-sm-6">
                    <label htmlFor="exampleFormControlSelect1">Select a subcategory</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option selected value>Subcategories</option>
                        <option value="horses">Horses</option>
                        <option value="cane">Cane</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SelectCategory;