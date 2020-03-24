import React, {useState} from 'react';
import AddProductForm from "../components/Forms/AddProductForm";
import Price from '../components/AddProduct/Price'
import {Col, Row} from "react-bootstrap";
import CheckBoxes from "../components/AddProduct/CheckBoxes";
import {useMutation} from "@apollo/react-hooks";
import {ADD_PRODUCT} from "../components/GraphQL/product/mutations";
import firebase from "firebase";

const AddProduct = () => {

    const [addProduct, {productData}] = useMutation(ADD_PRODUCT);
    const [product, setProduct] = useState({
        productName: "",
        saleText: "",
        region: "",
        country: "",
        beanType: "",
        roastDegree: "",
        tasteProfile: "",
        certification: "",
        info: "Bla bla info",
        priceOptions: [
            {id: 0, grams0: '', price0: ''},
            {id: 1, grams1: '', price1: ''},
            {id: 2, grams2: '', price2: ''},
        ]
    });

    // OPPRETTER VENDOR I DB:

    const onSubmit = () => {
        console.log(product);
        addProduct({
            variables: {
                title: product.productName,
                description: product.saleText,
                flavorProfile: product.tasteProfile,
                info: product.info,
                vendorEmail: firebase.auth().currentUser?.email
            }
        });
        console.log(productData);
        //setRedirect(true)

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

