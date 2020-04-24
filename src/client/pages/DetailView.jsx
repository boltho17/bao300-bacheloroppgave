import React from 'react';
import LoginModal from "../components/LoginModal";

const DetailView = ({product}) => {
    return (
        <div>
            <div className="text-center">
                <a href="/" className="btn btn-default btn-rounded" data-toggle="modal" data-target="#elegantModalForm">Launch
                    modal Login Form</a>
            </div>
            <LoginModal />
            <h1>HEI HEI HEI</h1>
            {console.log(product)}
            {product?.title}
        </div>
    )
}

export default DetailView
