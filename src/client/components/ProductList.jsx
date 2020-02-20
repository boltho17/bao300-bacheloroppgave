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
        <div className="mt-4 mb-4 ml-0 mr-5">
            <ShopHeader totalProducts={totalProducts}/>
            <Row>
                <Col sm={2}>
                    <ProductFilter totalProducts={totalProducts}/>
                </Col>
                <Col>
                    <Row>{productList}</Row>
                </Col>
            </Row>
        </div>
    );
};

export default ProductList


