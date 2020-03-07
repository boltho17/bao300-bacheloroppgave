import React, {useState} from 'react';
import AddProductForm from "../components/Forms/AddProductForm";

const AddProduct = () => {

    const [product, setProduct] = useState({
        productName: "",
        saleText: "",
        region: "",
        country: "",
        beanType: "",
        roastDegree: "",
        tasteProfile: "",
        certification: ""
    });

    const onSubmit = () => {
        console.log(product)
    };

    return (
        <div>
            <AddProductForm product={product} setProduct={setProduct}/>
            <button onClick={onSubmit}>Console log product object</button>
        </div>
    );
};

export default AddProduct

