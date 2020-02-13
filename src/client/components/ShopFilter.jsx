import React from 'react';
import {ListGroup} from "react-bootstrap";

const ShopFilter = () => {
    return (
        <div>
            <p style={{fontSize: '12px'}}>Filter</p>
            <ListGroup className="mt-2">
                <ListGroup.Item>Filter 1</ListGroup.Item>
                <ListGroup.Item>Filter 2</ListGroup.Item>
                <ListGroup.Item>Filter 3</ListGroup.Item>
                <ListGroup.Item>Filter 4</ListGroup.Item>
                <ListGroup.Item>Filter 5</ListGroup.Item>
                <ListGroup.Item>Filter 6</ListGroup.Item>
                <ListGroup.Item>Filter 7</ListGroup.Item>
                <ListGroup.Item>Filter 8</ListGroup.Item>
                <ListGroup.Item>Filter 9</ListGroup.Item>
            </ListGroup>
        </div>
    )
};

export default ShopFilter
