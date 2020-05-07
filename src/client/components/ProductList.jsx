import React, {useState} from 'react';
import ProductCard from "../components/ProductCard";
import {Col, Row} from "react-bootstrap";
import ProductFilter from "./ProductFilter";
import ShopHeader from "./ShopHeader";
import FilterBadge from "./FilterBadge";


const ProductList = ({onSelect, data, filterData, onFilter}) => {
    let productList;
    let totalProducts = 0;

    let showBadge = false;
    let filters = ['fitler1', 'filter2', 'filter3'];
    let filterBadges;

    // eslint-disable-next-line
    const [reload, setReload] = useState()

    if (data) {
        productList = data.map(product => {
            totalProducts++;
            return <ProductCard product={product} onSelect={onSelect} key={product.id} />
        });
    }

    const reverseList = () => {
        productList.sort();
        console.log("reverse")
        setReload(true)
    }

    if (showBadge) {
        filterBadges = filters.map((filter, index) => {
            // console.log(filter)
            return <FilterBadge filterName={filter} key={index}/>
        })
    }

    return (
        <div className="container">
            <ShopHeader totalProducts={totalProducts} onReverse={reverseList}/>
            <Row>
                <Col sm={3}>
                    <ProductFilter products={filterData} totalProducts={totalProducts} onFilter={onFilter}/>
                </Col>
                <Col>
                    <Row>
                        {filterBadges}
                    </Row>
                    <Row>{productList}</Row>
                    <div className="text-center">

                    </div>
                    <br/>
                </Col>
            </Row>
        </div>
    );
};

export default ProductList


