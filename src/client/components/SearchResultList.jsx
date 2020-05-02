import React from 'react';
import ProductCard from "../components/ProductCard";

const SearchResultList = ({onSelect, results}) => {
    let productList;
    let totalProducts = 0;
    //console.log(results)

    if (results) {
        productList = results.map(product => {
            totalProducts++;
            return <ProductCard product={product} onSelect={onSelect} key={product.id}/>
        });
    }


    return (
        <div className="container">
            {(results?.length > 0 && <h4>{totalProducts} results</h4>)}
            {productList?.reverse()}
        </div>
    );
};

export default SearchResultList


