import React from 'react';

const DetailView = ({product}) => {
    return (
        <div>
            <h1>HEI HEI HEI</h1>
            {console.log(product)}
            {product?.title}
        </div>
    )
}

export default DetailView
