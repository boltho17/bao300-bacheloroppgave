import React from 'react';
import ProductCard from "../components/ProductCard";
import {useQuery} from '@apollo/react-hooks';
import {GET_PRODUCTS} from "../components/GraphQL/product/queries";
import {Row, Col, Dropdown, DropdownButton} from "react-bootstrap";



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

    } else console.log("Error: empty post list")


    return (
        <div className="container">
            <Row>
                <Col>
                    <p className="mb-0" style={{fontSize: '12px'}}>{totalProducts} produkter</p>
                </Col>


                    <Col sm={2}>
                        <div className="sort-btn m-0 p-0">
                            <DropdownButton variant="secondary-outline" id="dropdown-basic-button" title="Sorter" size="sm">
                                <Dropdown.Item href="#/action-1">Mest populare</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Høyest pris</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Lavest pris</Dropdown.Item>
                            </DropdownButton>
                        </div>

                    </Col>
            </Row>
            <Row className="mt-2">{productList} </Row>
        </div>
    );
};

export default ProductList


