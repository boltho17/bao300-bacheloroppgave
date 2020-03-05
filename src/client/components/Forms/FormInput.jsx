import React from 'react';

const FormInput = props => {

    return (
        <div>
            <label htmlFor={props.label}>{props.label}</label>
            <input style={{width: '300px'}}
                className="form-input"
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                disabled={props.disabled}
            />
        </div>
    )
};

export default FormInput
