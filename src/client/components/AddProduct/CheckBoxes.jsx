import React from 'react';

const CheckBoxes = () => {

    return(
        <div className="mt-3">
            <h6>Hele bønner</h6>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Ja</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Nei</label>
            </div>
        </div>
    )
};

export default CheckBoxes


