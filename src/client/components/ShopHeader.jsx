import React from 'react';
import {Col, Dropdown, DropdownButton, Row} from "react-bootstrap";


const ShopHeader = ({totalProducts}) => {

    return (
        <div>
            <div className="mt-4 ml-4 p-0">
                <h1 style={{fontSize: '4rem'}}>
                    Hele Bønner
                </h1>
                <p style={{fontSize: '10px'}}>Savor these clear, authentic expressions of unique regions around the
                    world.</p>
            </div>

            <Row className="mt-5">
                <Col sm={2}>
                    <p className="ml-4" style={{fontSize: '12px'}}>Filter</p>
                </Col>
                <Col sm={6}>
                    {totalProducts > 0 ? (
                        <p className="mb-0" style={{fontSize: '12px'}}>{totalProducts} produkter</p>
                    ) : (
                        <div></div>
                    )}
                </Col>

                <Col>
                    <div className="sort-btn m-0 p-0">
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
