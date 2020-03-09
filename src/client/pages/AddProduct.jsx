import React, {useState} from 'react';
import AddProductForm from "../components/Forms/AddProductForm";
import Price from '../components/AddProduct/Price'

const AddProduct = () => {

    const [product, setProduct] = useState({
        productName: "",
        saleText: "",
        region: "",
        country: "",
        beanType: "",
        roastDegree: "",
        tasteProfile: "",
        certification: "",
        priceOptions: [
            {id: 0, grams0: '', price0: ''},
            {id: 1, grams1: '', price1: ''},
            {id: 2, grams2: '', price2: ''},
        ]
    });

    const onSubmit = () => {
        console.log(product)
    };

    return (
        <div>
            <AddProductForm product={product} setProduct={setProduct}/>
            <Price product={product} setProduct={setProduct} priceOptions={product.priceOptions}/>
            <button onClick={onSubmit}>Console log product object</button>
        </div>
    );
};

export default AddProduct

