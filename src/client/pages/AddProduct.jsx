import React, {useState} from 'react';
import AddProductForm from "../components/Forms/AddProductForm";
import Price from '../components/AddProduct/Price'
import {Col, Row} from "react-bootstrap";
import CheckBoxes from "../components/AddProduct/CheckBoxes";
import {useMutation} from "@apollo/react-hooks";
import {ADD_PRODUCT} from "../components/GraphQL/product/mutations";

const AddProduct = () => {

    /*
    *title: String!
  flavorProfile: String
  description: String!
  info: String
  published: Boolean! @default(value: false)
  vendor: Vendor @relation(link: INLINE)
  country: Country @relation(link:INLINE)
  productImages: [ProductImage!]!
  categories: [Category!]!
  skus: [SKU]
    * */

    const [addProduct, {productData}] = useMutation(ADD_PRODUCT);
    const [product, setProduct] = useState({
        productName: "",
        saleText: "Description ipsum lorem bla bla bla bla",
        region: "",
        country: "",
        beanType: "",
        roastDegree: "",
        tasteProfile: "",
        certification: "",
        info: "Bla bla info",
        priceOptions: [
            {id: 0, grams0: '', price0: ''},
            {id: 1, grams1: '', price1: ''},
            {id: 2, grams2: '', price2: ''},
        ],
        publishedStatus: true
    });

    // OPPRETTER VENDOR I DB:

    const onSubmit = () => {
        console.log(product);
        addProduct({
            variables: {
                title: product.productName,
                description: product.saleText,
                flavorProfile: product.tasteProfile,
                info: product.info,
                id: "ck6i1ll4m007h0726n3cujwit",
                published: product.publishedStatus,
                countryName: "Finland"
            }
        });
        console.log(productData);
        //setRedirect(true)

    };

    return (
        <div className="container-fluid">
            <h1 className="mt-4">Opprett et nytt produkt</h1>
            <Row>
                <Col sm={6}>
                    <AddProductForm product={product} setProduct={setProduct}/>
                </Col>
                <CheckBoxes/>
            </Row>

            <Price product={product} setProduct={setProduct} priceOptions={product.priceOptions}/>
            <button onClick={onSubmit}>Console log product object</button>
        </div>
    );
};

export default AddProduct

