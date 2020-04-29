import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import {GET_VENDORS} from "./GraphQL/vendor/queries";
import VendorCard from "./VendorCard";
import {Col, Row} from "react-bootstrap";


const VendorList = ({onSelect}) => {

    let vendorList;

    const {loading, error, data} = useQuery(GET_VENDORS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    // console.log(data);

    if (data) {
        vendorList = data.vendors.map(vendor => {
            return <VendorCard vendor={vendor} key={vendor.id} onSelect={onSelect} />
        });
    }

    return (
        <div className="container">
            <Row>
                <Col>
                    <Row>{vendorList.reverse()}</Row>
                </Col>
            </Row>
        </div>
    );
};

export default VendorList;
