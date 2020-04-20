import React, {useContext, useState} from 'react';
import AddProductForm from "../components/Forms/AddProductForm";
import Price from '../components/AddProduct/Price'
import {Col, Row} from "react-bootstrap";
import CheckBoxes from "../components/AddProduct/CheckBoxes";
import {useMutation} from "@apollo/react-hooks";
import {ADD_PRODUCT} from "../components/GraphQL/product/mutations";
import {AuthContext} from "../components/Firebase/AuthContext";
import ImageUpload from "../components/AddProduct/ImageUpload";
import TextAreaInput from "../components/Forms/TextAreaInput";

const AddProduct = () => {

    // Access the vendor object globally from AuthContext:
    let signedInVendor = useContext(AuthContext)?.vendor;

    // GraphQL mutation to add product to DB:
    const [addProduct, {productData}] = useMutation(ADD_PRODUCT);

    const initialState = {
        productName: "",
        descriptionShort: "Fantastisk kaffe med smak av himmel og et hint av grønne blader..",
        descriptionLong: "",
        region: "Velg..",
        country: "Velg..",
        beanType: "",
        roastDegree: "",
        tasteProfile: "",
        certification: "",
        priceOptions: [
            {grams0: null, price0: null},
            {grams1: null, price1: null},
            {grams2: null, price2: null},
        ],
        grinded: true,
        publishedStatus: true,
        pictures: []
    };

    const [product, setProduct] = useState(initialState);
    const [error, setError] = useState({
        productNameError: true,
        priceOptionsError: true
    })

    const handleChange = event => {
        const target = event.target;
        let value = target.value;
        let name = target.name;

        // For the select options:
        let options = event.target.options;
        if(options) {
            for (let i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    value = options[i].value;
                    name = target.id;
                }
            }
        }

        setProduct(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    };

    const getSkus = () => {
        if(product.priceOptions[2].grams2 && product.priceOptions[2].price2) {
            return [
                {weight: product.priceOptions[0].grams0, price: product.priceOptions[0].price0, grinded: product.grinded},
                {weight: product.priceOptions[1].grams1, price: product.priceOptions[1].price1, grinded: product.grinded},
                {weight: product.priceOptions[2].grams2, price: product.priceOptions[2].price2, grinded: product.grinded}
            ]
        }
        else if(product.priceOptions[1].grams1 && product.priceOptions[1].price1) {
            return [
                {weight: product.priceOptions[0].grams0, price: product.priceOptions[0].price0, grinded: product.grinded},
                {weight: product.priceOptions[1].grams1, price: product.priceOptions[1].price0, grinded: product.grinded}
            ]
        } else {
            return [
                {weight: product.priceOptions[0].grams0, price: product.priceOptions[0].price0, grinded: product.grinded}
            ]
        }
    };


    // OPPRETTER PRODUCT I DB:
    const onSubmit = () => {
        console.log(product);

        if(product.region === "Velg.." && product.country === "Velg..") {
            console.log("Ikke lagret! Vennligst fyll inn alle obligatoriske felt!");
        }
        if (product.productName === '') {
            setError(prevValue => {
                return {
                    ...prevValue, // Beholder previous values i hele state objektet
                    productNameError: true
                };
            });
            alert('Vennligst fyll inn et Produktnavn');
        }
        if (product.priceOptions[0].grams0 === null || product.priceOptions[0].price0 === null) {
            setError({priceOptionsError: true})
            alert('Vennligst skriv inn riktig vekt og pris!');
        } else {
            console.log(productData);
            alert('Lagret');
            addProduct({
                variables: {
                    title: product.productName,
                    descriptionShort: product.descriptionShort,
                    descriptionLong: product.descriptionLong,
                    flavorProfile: product.tasteProfile,
                    id: signedInVendor.id,
                    published: product.publishedStatus,
                    region: product.region,
                    countryName: product.country,
                    skus: getSkus()
                }
            });
        setProduct(initialState);
        //setRedirect(true)
        }
    };

    return (
        <div className="container-fluid">
            <h1 className="mt-4">Opprett et nytt produkt</h1>
            <Row>
                <Col sm={6}>
                    <AddProductForm product={product} setProduct={setProduct} handleChange={handleChange}/>
                </Col>
                <Col sm={3}>
                    <CheckBoxes title={'Hele Bønner'} labels={['Ja', 'Nei']} inLine={true}/>
                </Col>
                <Col sm={3}>
                    <CheckBoxes title={'Kverningsgrader'} labels={['Espressomaskin', 'Espressokanne', 'Aeropress', 'Drypp/V60', 'Filtermalt', 'Presskanne', 'Chemex', 'Kokmalt']} inLine={false}/>
                </Col>
            </Row>
            <Row>
                <Price product={product} setProduct={setProduct} priceOptions={product.priceOptions} error={error} setError={setError}/>
                <TextAreaInput label={'Beskrivelse'} handleChange={handleChange} product={product} value={product.descriptionLong} config={{name: 'descriptionLong', rows: '5', cols: '70', maxLength: '70', placeholder: 'Beskrivelse her..'}}/>
            </Row>
            <ImageUpload product={product} setProduct={setProduct} />
            <button onClick={onSubmit}>Lagre til DB og print</button>
        </div>
    );
};

export default AddProduct

