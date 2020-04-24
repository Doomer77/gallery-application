import React from "react";
import './SelectCategory.css';

const SelectCategory = ({ selectCategory }) => {
    const selectItem = selectCategory.map(({category}) => {
        return <option value = { category }>{ category }</option>
    })

    return (
        <div className="form-group col-md-3 col-sm-6">
            <label htmlFor="exampleFormControlSelect1">Select a category</label>
            <select className="form-control" id="exampleFormControlSelect1">
                <option selected value>Сategories</option>
                {selectItem}
            </select>
        </div>
    )
}

export default SelectCategory;