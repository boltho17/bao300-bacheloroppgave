import React from 'react';
import { Form } from 'react-bootstrap';

const CheckBoxes = ({title, inLine, labels}) => {

    return(
        <Form>
            <h5>{title}</h5>
            {labels.map((label, i) => (
                <Form.Check inline={inLine} label={label} key={i} />
            ))}
        </Form>
    )
};

export default CheckBoxes


