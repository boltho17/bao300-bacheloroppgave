import React from 'react';
import ProductList from "../components/ProductList";

const ShopPage = ({onSelect}) => {
        return (
            <div>
                <ProductList onSelect={onSelect}/>
            </div>
        );
}

export default ShopPage
