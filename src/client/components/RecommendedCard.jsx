import React from 'react';
import {Link} from "react-router-dom";

const RecommendedCard = ({product, onSelect}) => {
    //console.log(onSelect);

    // Parses "ID" to the PostItem url path:
    let id = "/product/" + product.id;

    return (

            <Link to={id} onClick={() => onSelect(product)} style={{ textDecoration: 'none', color: 'black' }}>
            <div className="recommended-product-card"> 
                <div className="recommended-product-picture" style={{backgroundImage: `url("${"https://i.pinimg.com/736x/f6/c1/86/f6c18634aade9c5b4d06e59705e56702.jpg"}")`}}/>
                <p className="recommended-product-text-1">{product.vendor.displayName}</p>
                <div className="recommended-product-center-line"></div>
                <h3 className="recommended-product-text-2">{product.title}</h3>
                <p className="recommended-product-text-3">{product.descriptionShort}</p>
                <div className="recommended-product-buy-button">Kjøp</div>
            </div>
            </Link>

    )
};

export default RecommendedCard
