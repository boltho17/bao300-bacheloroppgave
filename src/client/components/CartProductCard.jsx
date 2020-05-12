import React from 'react';

import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown
} from 'reactstrap';

export const CartProductCard = (props) => {
                
    return (
        <div>
            <div className="container">
                <div className="row-1">
                    <div className="col-1" />
                        <div className="cart-product-card mb-0">

                            <div className="row">
                                <div className="col-3">
                                    <img className="cart-product-image" src="https://www.ksb.com/blob/214770/e04c79b8ec64c99963ab3816dcae60ff/sugar-production-img-data.jpg" alt="The Product" />
                                </div>
                                    <div>
                                        <div className="cart-product-card-body">
                                            <h5 className="card-title pl-0">{props.product?.title}</h5>
                                            <p className="card-text">{props.product?.price} NOK per {props.product?.size}g</p>
                                            <UncontrolledDropdown>
                                                <DropdownToggle nav caret className="grind-option-dropdown pl-0 pt-0">
                                                    {props.product?.grindOption}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>
                                                        <p>Hei</p>
                                                    </DropdownItem>
                                                    <DropdownItem divider/>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>

                                            <div className="knapp col-6">
                                                <button className="delete-btn" onClick={() => {props.onDelete(props.id)}}>Slett</button>
                                            </div>

                                        </div>
                                    </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard
