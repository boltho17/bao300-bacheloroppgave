import React, {useState} from 'react';
import FormInput from "../Forms/FormInput";
import {Col, Row} from 'react-bootstrap';

const Price = props => {
    const [numberOfPriceOptions, setNumberOfPriceOptions] = useState(1);

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        props.setProduct(prevValue => {
            const targetObject = props.priceOptions.filter(priceOption => priceOption.id === Number(name.slice(-1)));
            console.log(targetObject);

            return {
                ...prevValue,
                priceOptions: [
                    ...prevValue.priceOptions,
                    {
                        ...prevValue.priceOptions[name.slice(-1)],
                        [name]: value
                    }
                ]
            };
        });
    };


    const addPriceOption = () => {
        let options = [];
        for (let i = 0; i < numberOfPriceOptions; i++) {
            options.push(
                <Row key={i}>
                    <Col sm={3}>
                        <FormInput name={'grams' + i} value={props.priceOptions.grams} className="price-form" placeholder="0"
                                   handleChange={handleChange} suffix={"gr"} maxLength="4"/>
                    </Col>
                    <Col sm={3}>
                        <FormInput name={'price' + i} value={props.priceOptions.price} className="price-form" placeholder="0"
                                   handleChange={handleChange} suffix={"kr"} maxLength="4"/>
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
        <div className="container mt-4 mb-4">
            <Row>
                <h3>Pris</h3>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </Row>

            {addPriceOption()}

        </div>
    )
};
export default Price;
