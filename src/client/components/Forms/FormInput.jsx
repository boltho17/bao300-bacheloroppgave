import React from 'react';
import {Row} from "react-bootstrap";

const FormInput = props => {

    return (
        <div className="mt-4 mb-4">
            <label htmlFor={props.label}>{props.label}</label>
            <Row>
                <input
                    className="form-input"
                    id={props.name}
                    name={props.name}
                    type={props.type}
                    value={props.value}
                    onChange={props.handleChange}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    min={props.min}
                    max={props.max}
                    maxLength={props.maxLength}
                />
                <div>{props.suffix}</div>
            </Row>
        </div>
    )
};

export default FormInput
