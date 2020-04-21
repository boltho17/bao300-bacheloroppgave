import React from 'react';
import { Form } from 'react-bootstrap';

const CheckBoxes = ({title, inLine, labels, handleChange}) => {

    return(
        <Form>
            <h5>{title}</h5>
            {labels.map((label, i) => (
                <Form.Check name={label} type="checkbox" inline={inLine} label={label} key={i} onChange={handleChange} />
            ))}
        </Form>
    )
};

export default CheckBoxes


