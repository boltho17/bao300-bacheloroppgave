import React, {useState} from 'react';
import CartContext from '../contexts/CartContext';
import CartProductCard from "./CartProductCard";
import {Button, Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';
import {TiShoppingCart} from "react-icons/all";


const Cart = (props) => {

    // eslint-disable-next-line
    const [products, setProducts] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    // eslint-disable-next-line
    const onDelete = id => {
        const updatedProducts = props.setCartItems(props.cartItems.filter(item => item.productId !== id));
        localStorage.setItem('updatedProducts', JSON.stringify(updatedProducts))
        console.log("deleted " + id)
    }

    return (
        <CartContext.Consumer>
            {cart => (
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={dropdownOpen}
                    >
                        <TiShoppingCart style={{marginTop: '10px', cursor: 'pointer'}}/>
                    </DropdownToggle>
                    <DropdownMenu className="drop-down-custom-menu">
                        <h4>{cart?.items?.length || "No"} items in cart </h4>
                        {cart?.items?.map((item, index) => {
                            return <CartProductCard key={index} {...props} product={item}/>
                        })}
                        <Button className="cart-button-1">TIL KASSEN</Button>
                    </DropdownMenu>
                </Dropdown>
            )}
        </CartContext.Consumer>
    );
}

export default Cart;


/*
const Cart = (props) => {
    
    //const [products, setProducts] = useState([]);

    // eslint-disable-next-line
    const onDelete = id => {
        const updatedProducts = props.setCartItems(props.cartItems.filter(item => item.productId !== id));
        localStorage.setItem('updatedProducts', JSON.stringify(updatedProducts))
        console.log("deleted " + id)
    }

        return (
            <CartContext.Consumer>
                {cart => (
                <div>
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
*/
