import React from 'react';
// import {Redirect} from 'react-router-dom';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const ProductCard = ({product, onSelect}) => {
    //console.log(product);

    // Parses "ID" to the PostItem url path:
    let id = "/product/" + product.id;

    return (
        <div className="pr-0 col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to={id} onClick={() => onSelect(product)} style={{ textDecoration: 'none', color: 'black' }}>
                <Card className="product-card">
                    <Card.Img className="card-image" variant="top"
                              src="https://cdn4.mystore4.no/thumb/401_600/stavangerkaff/72805_Kenya_AA_Mount_Kenya_Selection_LYSBRENT__1kg_1.png"/>
                    <Card.Body>
                        <Card.Subtitle className="vendor mb-2 text-muted">{product?.vendor?.displayName}</Card.Subtitle>
                        <Card.Title className="product-title">{product?.title || "hei"}</Card.Title>
                        <Card.Text className="short-description">{product?.descriptionShort}</Card.Text>
                        <Card.Subtitle className="price">
                         Fra {product?.skus[0]?.price},-
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </Link>
        </div>

    )
};

export default ProductCard
