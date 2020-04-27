import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const VendorCard = ({vendor, onSelect}) => {

    // Parses "ID" to the selected vendor url path:
    let id = "/vendor/" + vendor.id;

    return (
        <div className="pr-0 col-12 col-md-6 col-lg-4 col-xl-3">
            <Link to={id} onClick={() => onSelect(vendor)} style={{textDecoration: 'none', color: 'black'}}>
                <Card className="product-card">
                    <Card.Img className="card-image" variant="top"
                              src="https://i.etsystatic.com/12261549/r/il/a62bd1/1343718373/il_570xN.1343718373_86xx.jpg"/>
                    <Card.Body>
                        <Card.Subtitle className="vendor mb-4 text-muted"/>
                        <Card.Title className="product-title">{vendor.displayName}</Card.Title>
                        <Card.Text className="short-description">{vendor.address}</Card.Text>
                        <Card.Subtitle className="price">
                            {vendor.address}
                        </Card.Subtitle>

                    </Card.Body>
                </Card>
            </Link>
        </div>

    )
};

export default VendorCard
