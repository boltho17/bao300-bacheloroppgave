import React from 'react';
import ProductCard from "../components/ProductCard";
import {useQuery} from '@apollo/react-hooks';
import {GET_PRODUCTS} from "../components/GraphQL/product/queries";


const {loading, error, data} = useQuery(GET_PRODUCTS);

if (loading) return 'Loading...';
if (error) return `Error! ${error.message}`;
console.log(data);

const ShopPage = () => {


    return (
        <ProductCard />

        /*
        <div>
            {data.products.map(product => (
                <div key={product.id} value={product.title}>
                    <h3>{product.vendor.displayName}</h3>
                    <h5>{product.title}</h5>
                    <ul>
                        <li>
                            {product.description}
                        </li>
                        <li>
                            {product.flavorProfile}
                        </li>
                    </ul>
                </div>
            ))}
        </div>
         */
    );
};

export default ShopPage
