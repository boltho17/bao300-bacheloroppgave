import React, { useState } from 'react';
import { Dropdown, Button } from "react-bootstrap";

import CartProductCard from '../components/CartProductCard';

export const Cart = (props) => {
    const [product, setProduct] = useState({ productName: "Ost", productPrice: "100"}, {productName: "Melk", productPrice: "70"})
        
        return (
            <div>
                <Dropdown className="dropdownentry" alignRight>
                    <Dropdown.Toggle className="testus" id=""></Dropdown.Toggle>
                    <Dropdown.Menu className="drop-down-custom-menu">
                            <p>FRI FRAKT OVER 100Kr,-</p>
                            <h5>Handlekurven er tom</h5>

                            
                            <CartProductCard {...props} product = {product} />


                            <h3>Totalt å betale: 0,-</h3>
                            <Button className="cart-button-1">TIL KASSEN</Button>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }


export default Cart
