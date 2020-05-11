import React from 'react';

import {useQuery} from '@apollo/react-hooks';
import { GET_PRODUCTS_WITH_VENDOR_ID } from '../GraphQL/product/queries';

const ProductOverview = props => {
  const {loading, error, data} = useQuery(GET_PRODUCTS_WITH_VENDOR_ID);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data);
  console.log(props.vendor?.id)
  const vendorProducts = data.products.filter(product => product.vendor.id === props.vendor?.id);

  return (
    <>
      <h1 className="text-center">Produktoversikt</h1>
      <div>
        {/*data.products.map(product => (*/
          vendorProducts.map(product => (
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
      <div className="images row w-75 mx-auto">
              <div className="col">
                <span className="image"></span>
              </div>

              <div className="col">
                <span className="image"></span>
              </div>

              <div className="col">
                <span className="image"></span>
              </div>

              <div className="col">
                <span className="image"></span>
              </div>
            </div>
    </>
  );
};

export default ProductOverview;