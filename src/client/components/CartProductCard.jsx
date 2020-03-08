import React from 'react';

export const CartProductCard = (props) => {

    return (
        <div>   
            <div className="container">
                <div className="row-1"> 
                    <div className="col-1"></div>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-4">
                                    <img className="cart-product-image" src="https://www.ksb.com/blob/214770/e04c79b8ec64c99963ab3816dcae60ff/sugar-production-img-data.jpg" alt="The Product"></img>
                                </div>
                                    <div className="col-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{props.product.productName}</h5>
                                            <p className="card-text">{props.product.productPrice} NOK,-</p>
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