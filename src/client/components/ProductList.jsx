import React from 'react';
import ProductCard from "../components/ProductCard";
import {Col, Row} from "react-bootstrap";
import ProductFilter from "./ProductFilter";
import ShopHeader from "./ShopHeader";


const ProductList = ({onSelect, data}) => {
    let productList;
    let totalProducts = 0;

    if (data) {
        productList = data.map(product => {
            totalProducts++;
            return <ProductCard product={product} onSelect={onSelect} key={product.id}/>
        });
    }


    return (
        <div className="container">
            <ShopHeader totalProducts={totalProducts}/>
            <Row>
                <Col sm={3}>
                    <ProductFilter products={data} totalProducts={totalProducts}/>
                </Col>
                <Col>
                    <Row>{productList?.reverse()}</Row>
                    <div className="text-center">
                        <button id="singlebutton" name="singlebutton" className="btn btn-info">Last mer</button>
                    </div>
                    <br/>
                </Col>
            </Row>
        </div>
    );
};

export default ProductList


