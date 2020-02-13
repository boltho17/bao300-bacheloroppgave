import React from 'react';
import ProductCard from "../components/ProductCard";
import {useQuery} from '@apollo/react-hooks';
import {GET_PRODUCTS} from "../components/GraphQL/product/queries";
import {Row} from "react-bootstrap";


const ProductList = () => {
    let productList = '';
    const {loading, error, data} = useQuery(GET_PRODUCTS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    //console.log(data);

    if (data) {
        productList = data.products.map(product => {
            return <ProductCard product={product} key={product.id}/>

        });
    } else console.log("Error: empty post list")


    return (
        <div className="container">
            <Row>{productList} </Row>
        </div>
    );
};

export default ProductList


