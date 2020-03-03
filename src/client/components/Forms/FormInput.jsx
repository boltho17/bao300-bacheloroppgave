import React from 'react';

const FormInput = props => {

    return (
        <div>
            <input
                className="form-input"
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
    )
};

export default FormInput
