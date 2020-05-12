import React from 'react';

import {useQuery} from '@apollo/react-hooks';
import { GET_PRODUCTS_WITH_VENDOR_ID } from '../GraphQL/product/queries';
import ProductCard from '../ProductCard';

const ProductOverview = (props) => {

  const {loading, error, data} = useQuery(GET_PRODUCTS_WITH_VENDOR_ID);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data);
  console.log(props.vendor?.id)
  const vendorProducts = data.products.filter(product => product.vendor.id === props.vendor?.id);
  let productList
  let totalProducts = 0;
  
  if (vendorProducts) {
    productList = vendorProducts.map(product => {
        totalProducts++;
        return <ProductCard product={product} onSelect={props.onSelect} key={product.id} />
    });
  }
  
  return (
    <>
      <h1 className="text-center">Produktoversikt</h1>
      <div>{productList}</div>
     
    </>
  );
};

export default ProductOverview;
