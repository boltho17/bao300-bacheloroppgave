import ProductCard from "../components/ProductCard";
<<<<<<< HEAD
import {useQuery} from '@apollo/react-hooks';
import React from 'react';
import {GET_PRODUCTS} from "../components/GraphQL/product/queries";
=======
>>>>>>> master
import {Col, Row} from "react-bootstrap";
import ProductFilter from "./ProductFilter";
import ShopHeader from "./ShopHeader";


<<<<<<< HEAD
const ProductList = ({onSelect, setCartItems, cartItems}) => {
    let productList;
    let totalProducts = 0;

    const {loading, error, data} = useQuery(GET_PRODUCTS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    //console.log(data);

    const onSelected = selectedProduct => {
        console.log(selectedProduct); // Printer ut det produkt objektet man trykker på!

        //setSelected([...selected, selectedProduct]);
        //console.log(selected)

        // Overskriver det som ligger i localStorage, må inkludere prevState
        localStorage.setItem('cart', JSON.stringify(selectedProduct))

        setCartItems([...cartItems, selectedProduct])
    };

=======
const ProductList = ({onSelect, data}) => {
    let productList;
    let totalProducts = 0;

>>>>>>> master
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


