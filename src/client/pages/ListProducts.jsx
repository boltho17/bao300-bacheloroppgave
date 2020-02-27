import React from 'react';

import {useQuery} from '@apollo/react-hooks';
import {GET_PRODUCTS} from "../components/GraphQL/product/queries";


const ListProducts = () => {
    const {loading, error, data} = useQuery(GET_PRODUCTS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data);
    return (
        <div>
            {data.products.map(product => (
                <div key={product.id} value={product.title}>
                    <h3>{product.vendor.displayName}</h3>
                    <ul>
                        <li>
                            {product.title}
                        </li>
                        <li>
                            {product.flavorProfile}
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default ListProducts
