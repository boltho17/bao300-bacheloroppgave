import React, {useState} from 'react';
import FormInput from "../Forms/FormInput";
import {Col, Row} from 'react-bootstrap';

const Price = props => {
    const [numberOfPriceOptions, setNumberOfPriceOptions] = useState(1);

    const handleChange = (event, index) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        const options = props.priceOptions;
        options[index][name] = value;

        props.setProduct(prevValue => {
            return {
                ...prevValue, // Beholder previous values i hele state objektet
                priceOptions: options
            };
        });
        if (name !== '') {
            props.setError(prevValue => {
                return {
                    ...prevValue,
                    [name + 'Error']: false
                }
            })
        }
    };

    const addPriceOption = () => {
        let options = [];
        for (let i = 0; i < numberOfPriceOptions; i++) {
            options.push(
                <Row key={i}>
                    <Col sm={2}>
                        <FormInput name={'grams' + i} value={props.priceOptions[i]?.grams} data-index="0" className="price-form" placeholder="0"
                                   handleChange={(event) => handleChange(event, i)} suffix={"gr"} maxLength={"4"}/>
                    </Col>
                    <Col sm={2}>
                        <FormInput name={'price' + i} value={props.priceOptions[i]?.price} data-index="0" className="price-form" placeholder="0"
                                   handleChange={(event) => handleChange(event, i)} suffix={"kr"} maxLength={"4"}/>
                    </Col>
                </Row>
            );
        }
        return options;
    };

    const increment = () => {
        if (numberOfPriceOptions < 3) {
            setNumberOfPriceOptions(numberOfPriceOptions + 1)
        }
    };

    const decrement = () => {
        if (numberOfPriceOptions > 1) {
            setNumberOfPriceOptions(numberOfPriceOptions - 1)
        }
    };

    return (
        <div className="container mt-4 mb-4 ml-4">
            <Row>
                <h3>Størrelse og pris</h3>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </Row>

            {addPriceOption()}

        </div>
    )
};
export default Price;
