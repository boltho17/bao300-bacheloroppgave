import React from 'react';

const FormSelect = props => {

    return(
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect">{props.navn}</label>
                <select className="form-control" id={props.name} onChange={props.handleChange}>
                    {props.selectionList.map(item => {
                        return <option value={item} key={item}>{item}</option>
                    })}
                </select>
        </div>
    )
};

export default FormSelect
