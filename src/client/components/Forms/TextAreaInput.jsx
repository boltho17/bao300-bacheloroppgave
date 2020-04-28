import React from 'react';

const TextAreaInput = (props) => {

    return(
        <div className="mt-4 mb-4">
            <label>{props.label}</label>
            <br/>
            <textarea
                name={props.config.name}
                rows={props.config.rows}
                cols={props.config.cols}
                maxLength={props.config.maxLength}
                value={props.product.value}
                placeholder={props.config.placeholder}
                onChange={props.handleChange}
            />
        </div>
    )
}

export default TextAreaInput
