import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";

const VendorDetailView = ({vendor}) => {

    const [redirect, setRedirect] = useState(false);

    // Navigerer tilbake til selger oversikt hvis ingen selger er valgt.
    useEffect(() => {
        if (vendor === undefined) {
            setRedirect(true)
        }
    }, [vendor]);

    if (redirect) {
        return <Redirect to='/vendors'/>;
    } else {
        return (
            <div>
                <h3>{vendor?.displayName}</h3>
                {vendor?.address}
            </div>
        );
    }
};

export default VendorDetailView;
