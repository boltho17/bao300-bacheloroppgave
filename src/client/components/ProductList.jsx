import React from 'react';
import ProductCard from "../components/ProductCard";
import {useQuery} from '@apollo/react-hooks';
import {GET_PRODUCTS} from "../components/GraphQL/product/queries";
import {Col, Row} from "react-bootstrap";
import ProductFilter from "./ProductFilter";
import ShopHeader from "./ShopHeader";


const ProductList = () => {
    let productList;
    let totalProducts = 0;

    const {loading, error, data} = useQuery(GET_PRODUCTS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    //console.log(data);

    if (data) {
        productList = data.products.map(product => {
            totalProducts++;
            return <ProductCard product={product} key={product.id}/>
        });
    }

    return (
        <div className="container">
            <ShopHeader totalProducts={totalProducts}/>
            <Row>
                <Col sm={3}>
                    <ProductFilter totalProducts={totalProducts}/>
                </Col>
                <Col>
                    <Row>{productList.reverse()}</Row>
            <div className="text-center">
                <button id="singlebutton" name="singlebutton" className="btn btn-info">Last mer</button>
            </div>
            <br/>
            <div className="text-center">FOOTER</div>
                </Col>
            </Row>
        </div>
    );
};

export default ProductList


