import React from 'react';
import {Link} from "react-router-dom";

const RecommendedCard = ({product, onSelect}) => {
    // console.log(product);

    // Parses "ID" to the PostItem url path:
    let id = "/product/" + product.id;

    return (
        <Link to={id} onClick={() => onSelect(product)} style={{textDecoration: 'none', color: 'black'}}>
            <div className="recommended-product-card">
                <div className="recommended-product-picture"
                     style={{backgroundImage: `url("${product?.productImages[0]}")`}}/>
                <p className="recommended-product-text-1">{product.vendor.displayName}</p>
                <div className="recommended-product-center-line"/>
                <h3 className="recommended-product-text-2">{product.title}</h3>
                <p className="recommended-product-text-3">{product.descriptionShort}</p>
                <div className="recommended-product-buy-button">Kjøp</div>
            </div>
        </Link>
    )
};

export default RecommendedCard
