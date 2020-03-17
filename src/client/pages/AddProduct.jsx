import React, {useState} from 'react';
import AddProductForm from "../components/Forms/AddProductForm";
import Price from '../components/AddProduct/Price'
import {Col, Row} from "react-bootstrap";
import CheckBoxes from "../components/AddProduct/CheckBoxes";

const AddProduct = () => {

    const [product, setProduct] = useState({
        productName: "",
        saleText: "",
        region: "",
        country: "",
        beanType: "",
        roastDegree: "",
        tasteProfile: "",
        certification: "",
        priceOptions: [
            {id: 0, grams0: '', price0: ''},
            {id: 1, grams1: '', price1: ''},
            {id: 2, grams2: '', price2: ''},
        ]
    });

    const onSubmit = () => {
        console.log(product)
    };

    return (
        <div className="container-fluid">
            <h1 className="mt-4">Opprett et nytt produkt</h1>
            <Row>
                <Col sm={6}>
                    <AddProductForm product={product} setProduct={setProduct}/>
                </Col>
                <CheckBoxes/>
            </Row>

            <Price product={product} setProduct={setProduct} priceOptions={product.priceOptions}/>
            <button onClick={onSubmit}>Console log product object</button>
        </div>
    );
};

export default AddProduct

