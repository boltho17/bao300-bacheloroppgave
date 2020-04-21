import React from 'react';
import ProductList from "../components/ProductList";

const ShopPage = (props) => {
        return (
            <div>
                <ProductList cartItems={props.cartItems} setCartItems={props.setCartItems}/>
            </div>
        );
};

export default ShopPage
