import React from 'react';
import VendorList from "../components/VendorList";

const VendorsPage = ({onSelect}) => {
    return (
        <div>
            <VendorList onSelect={onSelect} />
        </div>
    );
};

export default VendorsPage;
