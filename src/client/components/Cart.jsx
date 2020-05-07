import React from 'react';
import { Dropdown, Button } from "react-bootstrap";
// import uniqid from 'uniqid';
import CartContext from '../contexts/CartContext';
import CartProductCard from '../components/CartProductCard';

const Cart = (props) => {
    
    //const [products, setProducts] = useState([]);

    const onDelete = id => {
        const updatedProducts = props.setCartItems(props.cartItems.filter(item => item.productId !== id));
        localStorage.setItem('updatedProducts', JSON.stringify(updatedProducts))
        console.log("deleted " + id)
    }

        return (
            <CartContext.Consumer>
                {cart => (
                <div>
                    {console.log(cart)}
                    <Dropdown className="dropdownentry" aria-labelledby="dropdownMenuOffset" alignRight>
                        <Dropdown.Toggle id="dropdown-toggle"></Dropdown.Toggle>
                        <Dropdown.Menu className="drop-down-custom-menu">
                                <h4>{cart?.items?.length || "No"} items in cart </h4>
                                    {cart?.items?.map((item, index) => {
                                        return <CartProductCard key={index} {...props} product={item}/>
                                    })}
                                <Button className="cart-button-1">TIL KASSEN</Button>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                )}
            </CartContext.Consumer>
        )
    }


export default Cart
