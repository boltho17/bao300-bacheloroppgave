import React from 'react';
import ProductList from "../components/ProductList";

const ShopPage = ({onSelect, data}) => {
        return (
            <div>
                <ProductList onSelect={onSelect} data={data}/>
            </div>
        );
}

export default ShopPage
