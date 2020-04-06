import React, { useState, useEffect } from 'react';
import { Dropdown, Button } from "react-bootstrap";

import CartProductCard from '../components/CartProductCard';

export const Cart = (props) => {
    const cartValue = 0
    const [product, setProduct] = useState([]);

    const addProduct = ()  => {
        const addNewProduct = [...product, {productName: 'Test3', productPrice: '158'}]
        setProduct(addNewProduct)
        localStorage.clear()
        localStorage.setItem('addNewProduct', JSON.stringify(addNewProduct))
    };

    useEffect(() => {
        const data = localStorage.getItem('addNewProduct')
        if(data){
            setProduct(JSON.parse(data))
        }
    }, []);

        return (
            <div>
                <Dropdown className="dropdownentry" aria-labelledby="dropdownMenuOffset" alignRight>
                    <Dropdown.Toggle id="dropdown-toggle"></Dropdown.Toggle>
                    <Dropdown.Menu className="drop-down-custom-menu">
                            <p>FRI FRAKT OVER 100Kr,-</p>
                            <h3>{product.length < 1 ? 'Handlekurven er tom!' : null}</h3>
                            {product.map((product, index) => (
                                <CartProductCard key={index} {...props} product = {product} /> 
                            ))}
                            
                            <h3>Totalt å betale: {cartValue},-</h3>
                            <Button onClick={e => addProduct()}>ADD</Button>
                            <Button onClick={e => console.log(product)}>LOGG</Button>
                            <Button className="cart-button-1">TIL KASSEN</Button>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }


export default Cart
