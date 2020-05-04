import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import {ListGroup} from "react-bootstrap";

const CollapseList = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <ListGroup.Item onClick={toggle}>{props.filterName}</ListGroup.Item>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        {props.list?.map((item, index) => {
                                return <div className="collapse-list-item" onClick={() => props.onFilter(item)} key={index}>{item}</div>
                            })
                        }
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default CollapseList;
