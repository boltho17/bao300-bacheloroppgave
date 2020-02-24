import React from 'react';
import {Col, Dropdown, DropdownButton, Row} from "react-bootstrap";


const ShopHeader = ({totalProducts}) => {

    return (
        <div>
            <div className="mt-4 p-0">
                <h1 style={{fontSize: '4rem'}}>
                    All Coffee
                </h1>
                <p className="pl-0 col-4" style={{fontSize: '10px'}}>Our 400+ specialty coffees come from the best in the nation and are roasted fresh only when you place your order! So whether you take it whole or ground, decaf or full throttle, your top-rated coffee is guaranteed a winner.</p>
            </div>

            <Row className="mt-5">
                <Col sm={3}>
                    <p className="ml-2" style={{fontSize: '12px'}}>Filter</p>
                </Col>
                <Col sm={7}>
                    {totalProducts > 0 ?
                        <p style={{fontSize: '10px'}}>{totalProducts} produkter</p> : <div></div>
                    }
                </Col>

                <Col>
                    <div className="sort-btn">
                        <DropdownButton variant="secondary-outline" id="dropdown-basic-button" title="Sorter" size="sm">
                            <Dropdown.Item href="#/action-1">Mest populare</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Høyest pris</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Lavest pris</Dropdown.Item>
                        </DropdownButton>
                    </div>

                </Col>
            </Row>
        </div>
    )
};

export default ShopHeader
