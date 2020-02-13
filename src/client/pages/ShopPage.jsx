import React from 'react';
import ProductList from "../components/ProductList";
import {Container, Row, Col} from "react-bootstrap";
import ShopFilter from "../components/ShopFilter";
import ShopHeader from "../components/ShopHeader";


const ShopPage = () => {

    return (
        <Container>
            <Row>
                <Col sm={12} className="pl-0">
                    <ShopHeader/>
                </Col>
                <Col sm={3} className="p-0">
                    <ShopFilter/>
                </Col>
                <Col>
                    <ProductList/>
                </Col>
            </Row>
        </Container>
    );
};

export default ShopPage
